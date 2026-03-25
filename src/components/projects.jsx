import { Arrow } from "./svgs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/data";

const Projects = () => {
  return (
    <section className="px-6 mt-16 md:px-10 lg:px-20 lg:mt-24">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-10 lg:mb-14">
          <h2 className="flex items-center font-clashbold text-[22px] text-white font-semibold leading-tight lg:text-[52px]">
            What I've Shipped <span className="animate-bounce ml-2">🚀</span>
          </h2>
          <p className="font-medium text-[#FFFFFF99] text-[14px] leading-relaxed mt-1 lg:text-[17px]">
            Some real & fun ideas I've turned into working products… more dropping soon 👀
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative bg-[#0d0d6b] border border-[#ffffff08] px-6 py-8 flex flex-col gap-4 overflow-hidden group
                hover:border-[#5454f030] transition-colors duration-300
                after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px] after:bg-[#c8a96e] after:transition-all after:duration-400 after:group-hover:left-0 after:group-hover:w-full"
            >
              <div className="flex items-start justify-between">
                <h5 className="font-clash font-medium text-[18px] leading-snug text-[#c8a96e] max-w-[75%]">
                  {project.name}
                </h5>
                <Link to={project.link} target="_blank" rel="noreferrer">
                  <motion.span
                    whileHover={{ scale: 0.88 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full border border-[#ffffff15] flex items-center justify-center hover:border-[#c8a96e55] transition-colors duration-300"
                  >
                    <Arrow className="w-4 h-4" />
                  </motion.span>
                </Link>
              </div>

              <p className="text-[#5454f0] text-[12px] font-medium tracking-wide uppercase">
                {project.lang}
              </p>

              <p className="text-[#FFFFFF99] text-[13px] leading-[1.7] lg:text-[14px] flex-1">
                {project.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;