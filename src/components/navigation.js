import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import {Bomb} from "lucide-react";


export const Navigation = () => {
    return (
        <div className="flex items-center justify-between px-20 py-10">
          <div className="flex items-center text-white gap-5">
            <Bomb className="h-8 w-8 text-white" />
          </div>
          <div className="flex flex-wrap items-center text-white gap-10 ">
              <a href={"/about"} className="transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#64ffda]"> About</a>
              <a href={"/experience"} className="transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#64ffda]">Experience</a>
              <a href={"/Contact"}  className="transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#64ffda]">Contact</a>
              <button className="border-2 border-[#64ffda] rounded-md text-[#64ffda] px-3 py-2
              transition hover:-translate-x-2 hover:-translate-y-2 ease-in-out animate-pulse">
                  Resume
              </button>
          </div>
        </div>
    );
  };