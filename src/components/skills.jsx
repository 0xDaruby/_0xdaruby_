import { Experience } from ".";
import { motion } from "framer-motion";

const skillsList = [
  "Python", "JavaScript", "HTML/CSS", "MySQL",
  "Git/GitHub", "Notion", "Jupyter - Notebook", "Express.js",
  "Node.js", "React", "Creative", "Solidity",
];

const Skills = () => {
  return (
    <section className="px-6 mt-16 md:px-10 lg:px-20 lg:mt-24 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-16 lg:items-start">

          {/* Skills */}
          <div className="flex-shrink-0 lg:w-[420px]">
            <h2 className="flex items-center font-clashbold text-white font-semibold text-[22px] leading-tight lg:text-[52px]">
              Skills <small className="animate-bounce ml-2">🤹‍♂️</small>
            </h2>
            <p className="font-medium text-[#FFFFFF99] text-[14px] leading-relaxed mt-1 lg:text-[17px] lg:tracking-wide">
              Yo, I've honed some of these skills over the years...
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
              {skillsList.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ scale: 0.96 }}
                  className="relative bg-[#0d0d6b] border border-[#ffffff08] px-5 py-4 cursor-default
                    hover:border-[#5454f030] transition-colors duration-300"
                >
                  <p className="text-white font-medium font-clash text-[14px] lg:text-[16px]">
                    {skill}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="flex-1 min-w-0">
            <Experience />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;