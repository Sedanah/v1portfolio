import { Bomb } from "lucide-react";

export const Navigation = () => {
  return (
      <div className="flex items-center justify-between px-20 py-10">
        <div className="flex items-center text-white gap-5">
          <Bomb className="h-8 w-8 text-white" />
        </div>
        <div className="flex flex-wrap items-center text-white gap-10 ">
            <a className="hover:text-[#64ffda]">About</a>
            <a className="hover:text-[#64ffda]">Experience</a>
            <a className="hover:text-[#64ffda]">Work</a>
            <a className="hover:text-[#64ffda]">Contact</a>
            <button className="border-2 border-[#64ffda] rounded-md text-[#64ffda] px-3 py-2
            transition hover:-translate-x-2 hover:-translate-y-2 ease-in-out">
                Resume
            </button>
        </div>
      </div>
  );
};
