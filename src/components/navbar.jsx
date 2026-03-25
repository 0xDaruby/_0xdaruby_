import clsx from "clsx";
import { GhIcon } from "./svgs";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed z-40 top-0 w-full bg-primaryBg/85 backdrop-blur-md border-b border-[#ffffff08] transition-all duration-300">
      <nav className="max-w-[1100px] mx-auto flex items-center justify-between px-6 py-4 md:px-10 lg:px-20">
        <NavLink to="/">
          {({ isActive }) => (
            <span
              className={clsx(
                "font-clashbold font-semibold text-[18px] md:text-[22px] tracking-tight transition-colors duration-200",
                isActive ? "text-[#c8a96e]" : "text-white hover:text-[#c8a96e]"
              )}
            >
              David🪽<span className="text-[#5454f0]">.</span>
            </span>
          )}
        </NavLink>

        <Link
          to="https://www.github.com/0xdaruby"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 text-[#FFFFFF99] hover:text-white transition-colors duration-300"
        >
          <GhIcon className="w-5 h-5 md:w-6 md:h-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="font-clash text-[14px] md:text-[16px] font-medium">GitHub</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;