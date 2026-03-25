import { motion } from "framer-motion";
import { TwIcon, IgIcon, InIcon } from "./svgs";

const Hero = () => {
  return (
    <section className="w-full px-6 pt-24 md:px-10 lg:pt-32 lg:px-20">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-12 md:flex-row md:items-center md:justify-between md:gap-10">

        {/* Left */}
        <div className="flex flex-col gap-6 flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-clashbold font-semibold text-[38px] leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-[#c8a96e] via-[#e8c88a] to-[#c8a96e] md:text-[48px] lg:text-[64px]">
              Web Developer
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#FFFFFF99] text-[15px] leading-[1.7] max-w-[520px] md:text-[17px]"
          >
            A passionate Web Developer dedicated to creating robust, scalable, and user-friendly web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-4 lg:flex-row lg:gap-8"
          >
            <p className="text-[#FFFFFF99] text-[14px] leading-[1.7] max-w-[280px] border-l border-[#5454f020] pl-4">
              1+ years building responsive and secure web solutions using modern frontend & backend technologies.
            </p>
            <p className="text-[#FFFFFF99] text-[14px] leading-[1.7] max-w-[280px] border-l border-[#5454f020] pl-4">
              Focused on progressive enhancement, scalable architectures, and full-stack development.
            </p>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-5 mt-2"
          >
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
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="w-9 h-9 rounded-full border border-[#c8a96e55] flex items-center justify-center transition-colors duration-300 hover:border-[#c8a96e] hover:bg-[#c8a96e12]"
              >
                <Icon fill="#F1F2F4" className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right — image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-shrink-0 self-center"
        >
          <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px]">
            {/* decorative offset border */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 border border-[#c8a96e44] rounded-sm" />
            <div className="absolute inset-0 border-2 border-[#c8a96e] rounded-sm overflow-hidden">
              <img
                src="/images/hero.jpeg"
                alt="David — Web Developer"
                className="w-full h-full object-cover"
                draggable={false}
                loading="lazy"
              />
            </div>
            {/* accent dot */}
            <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-[#5454f0] opacity-70" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;