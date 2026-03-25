import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    desc: "Responsive and scalable websites and full-stack web applications using modern frontend and backend technologies.",
  },
  {
    title: "Python Scripting",
    desc: "Efficient Python scripts for task automation, data processing, backend logic, and problem-solving.",
  },
  {
    title: "UI/UX & Web Design",
    desc: "Clean, modern, user-friendly interfaces with strong focus on UX, visual hierarchy, and engaging layouts.",
  },
  {
    title: "System Architecture",
    desc: "Scalable system structures, application workflows, and backend architectures for maintainable software.",
  },
  {
    title: "Technical Documentation",
    desc: "Software Requirements Specifications (SRS), system docs, and clear technical guides for developers and stakeholders.",
  },
  {
    title: "Technical Writing",
    desc: "Translating complex technical concepts into clear, structured, and easy-to-understand educational content.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07 },
  }),
};

const Services = () => {
  return (
    <section className="mt-16 px-6 md:px-10 lg:mt-24 lg:px-20">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-10 lg:mb-14">
          <h1 className="flex items-center font-clashbold font-semibold text-white text-[22px] leading-tight lg:text-[52px]">
            My Services <span className="animate-bounce ml-2">🔥</span>
          </h1>
          <p className="text-[#FFFFFF99] font-medium text-[14px] leading-relaxed mt-1 lg:text-[17px]">
            These are some of my services — I'm ready when you are
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 0.985 }}
              className="relative bg-[#0d0d6b] border border-[#ffffff08] p-7 lg:p-9 flex flex-col gap-3 overflow-hidden
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#c8a96e] after:transition-all after:duration-400 hover:after:w-full"
            >
              <span className="text-[#5454f0] text-[11px] font-medium tracking-[0.15em] uppercase">
                0{i + 1}
              </span>
              <h4 className="font-clashbold font-semibold text-white text-[18px] leading-snug lg:text-[22px]">
                {service.title}
              </h4>
              <p className="text-[#FFFFFF99] text-[13px] leading-[1.7] lg:text-[15px]">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;