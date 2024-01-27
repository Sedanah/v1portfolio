import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import {Bomb} from "lucide-react";


export const Navigation = () => {
    return (
        <div className="flex items-center justify-between px-20 py-10">
          <div className="flex items-center text-white gap-5">
            <Bomb className="h-8 w-8 text-white" />
          </div>
          <div className="flex flex-wrap items-center text-[#64f5ff] gap-10 ">
             
              <button className="border-2 border-[#64f5ff] rounded-md text-[#64f5ff] px-3 py-2
              transition hover:-translate-x-2 hover:-translate-y-2 ease-in-out animate-pulse">
                  Home
              </button>
          </div>
        </div>
    );
  };