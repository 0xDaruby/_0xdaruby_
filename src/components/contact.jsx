import { useState, useEffect } from "react";
import { MailIcon } from "./svgs";

const Contact = () => {
  const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay());

  useEffect(() => {
    setTimeOfDay(getTimeOfDay());
  }, []);

  function getTimeOfDay() {
    const h = new Date().getHours();
    if (h >= 6 && h < 12) return "morning";
    if (h >= 12 && h < 18) return "afternoon";
    return "evening";
  }

  return (
    <section className="px-6 mt-20 md:px-10 lg:px-20 lg:mt-32">
      <div className="max-w-[1100px] mx-auto">
        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#5454f030] to-transparent mb-16" />

        <div className="flex flex-col items-center text-center gap-6 max-w-[640px] mx-auto">
          <p className="text-[#5454f0] text-[12px] font-medium tracking-[0.2em] uppercase">
            Get in touch
          </p>
          <h1 className="font-clashbold font-semibold text-[32px] leading-tight text-white md:text-[52px] lg:text-[64px]">
            Do You Have Any Ideas?
          </h1>
          <p className="text-[#FFFFFF99] text-[14px] leading-[1.8] max-w-[480px] lg:text-[17px]">
            I can help you structure, improve or build web experiences for your new or existing products. Feel free to get in touch.
          </p>

          <p className="flex items-center gap-2 font-semibold text-[13px] tracking-[0.15em] uppercase text-white">
            Say hello! <span className="animate-bounce text-base">👋</span>
          </p>

          <a
            href="mailto:Iquaibomdavid@gmail.com"
            className="group mt-2 flex items-center gap-3 bg-[#0d0d6b] border border-[#ffffff10] px-7 py-4 hover:border-[#5454f050] transition-all duration-300 hover:bg-[#0d0d6b]/80"
          >
            <MailIcon className="w-5 h-5 flex-shrink-0" />
            <span className="text-white font-medium text-[15px] lg:text-[17px] group-hover:text-[#c8a96e] transition-colors duration-300">
              Iquaibomdavid@gmail.com
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;