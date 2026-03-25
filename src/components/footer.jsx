import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Copyright, TwIcon, IgIcon, InIcon } from "./svgs";

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="px-6 mt-20 pb-10 md:px-10 lg:px-20 lg:mt-32 lg:pb-14">
      <div className="max-w-[1100px] mx-auto">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#ffffff10] to-transparent mb-10" />

        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <Copyright className="w-4 h-4" />
              <span className="text-[#FFFFFF99] text-[14px] font-medium">
                David <span className="text-white">{new Date().getFullYear()}</span>
              </span>
            </div>
            <span className="text-[#FFFFFF55] text-[12px] tabular-nums">{time}</span>
            <p className="text-[#FFFFFF55] text-[11px] mt-2">
              Inspo by{" "}
              <a
                href="https://vickyjay.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-[#FFFFFF99] underline underline-offset-2 hover:text-[#c8a96e] transition-colors duration-300"
              >
                VickyJay
              </a>
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { href: "https://twitter.com/0xdaruby", Icon: TwIcon },
              { href: "https://www.instagram.com/daruby_official", Icon: IgIcon },
              { href: "", Icon: InIcon },
            ].map(({ href, Icon }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 0.94 }}
                whileHover={{ scale: 1.08 }}
                className="w-9 h-9 rounded-full border border-[#ffffff15] flex items-center justify-center hover:border-[#FFFFFF40] transition-colors duration-300"
              >
                <Icon fill="#FFFFFF99" className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;