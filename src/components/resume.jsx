import toast, { Toaster } from "react-hot-toast";

const Resume = ({ pdfUrl, fileName, buttonText }) => {
  const downloadPDF = async () => {
    try {
      const response = await fetch(pdfUrl);
      if (!response.ok) throw new Error(response.statusText);
      const blob = await response.blob();
      const link = document.createElement("a");
      const blobUrl = URL.createObjectURL(blob);
      link.href = blobUrl;
      link.download = fileName || "download.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      toast.error("Error downloading PDF");
      console.error("Error downloading PDF:", error.message);
    }
  };

  return (
    <div>
      <button
        onClick={downloadPDF}
        className="group inline-flex items-center gap-2 bg-[#0d0d6b] border border-[#5454f040] px-6 py-3.5 font-clash font-medium text-[15px] text-white
          hover:border-[#c8a96e80] hover:text-[#c8a96e] transition-all duration-300 active:scale-[0.97]"
      >
        {buttonText || "Download PDF"}
        <span className="text-[#FFFFFF55] group-hover:text-[#c8a96e] transition-colors duration-300">↓</span>
      </button>
      <Toaster />
    </div>
  );
};

export default Resume;