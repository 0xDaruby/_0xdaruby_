import Resume from "./resume";
import resumeUrl from "../utils/Iquaibom David - Resume.pdf";

const experiences = [
  {
    role: "",
    company: "",
    period: "",
    isCooking: false,
    desc: "",
  },
  {
    role: "",
    company: "",
    period: "",
    desc: "",
  },
  {
    role: "",
    company: "",
    period: "",
    desc: "",
  },
];

const Experience = () => {
  return (
    <div>
      <h2 className="flex items-center font-clashbold text-white font-semibold text-[22px] leading-tight lg:text-[52px]">
        Experience <small className="animate-bounce ml-2">🚀</small>
      </h2>
      <p className="font-medium text-[#FFFFFF99] text-[14px] leading-relaxed mt-1 lg:text-[17px]">
        My experience so far...
      </p>

      {/* Timeline */}
      <div className="mt-8 flex flex-col gap-0">
        {experiences.map((exp, i) => (
          <div key={i} className="flex gap-5">
            {/* Line + dot */}
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 mt-1 rounded-full bg-[#3B82F6] flex-shrink-0 shadow-[0_0_8px_#3B82F660]" />
              {i < experiences.length - 1 && (
                <div className="w-[1px] flex-1 bg-[#3B82F615] mt-2 mb-2" />
              )}
            </div>

            {/* Content */}
            <div className={`pb-10 ${i === experiences.length - 1 ? "pb-0" : ""}`}>
              <div className="flex flex-col gap-0.5">
                <h3 className="font-semibold text-white text-[15px] lg:text-[17px] leading-snug">
                  {exp.role}
                </h3>
                <p className="text-[#5454f0] font-semibold text-[13px] lg:text-[15px]">
                  {exp.company}

                  {/* Pulse and Ongoing indicators */}
                  {exp.isCooking && (
                    <span className="ml-2 text-[#FFFFFF99] italic text-[11px] animate-pulse font-normal">
                      some idea i'm cooking up...
                    </span>
                  )}

                  {exp.isOngoing && (
                    <span className="ml-2 text-[#FFFFFF99] italic text-[11px] animate-pulse font-normal">
                      what im currently working on...
                    </span>
                  )}

                </p>
                <span className="text-[#FFFFFF55] text-[12px] italic">{exp.period}</span>
              </div>
              <p className="text-[#FFFFFF99] text-[13px] leading-[1.7] mt-3 max-w-[540px] lg:text-[15px]">
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <Resume pdfUrl={resumeUrl} fileName="Iquaibom David - Resume.pdf" buttonText="Download Resume" />
      </div>
    </div>
  );
};

export default Experience;