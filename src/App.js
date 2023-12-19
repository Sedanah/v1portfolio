import { ChevronDown } from "lucide-react";
import { Navigation } from "./components/navigation";
import { TypeAnimation } from "react-type-animation";
import { Experience } from "./components/experience";


function App() {

  return (
    <div className="s-page-1 s-section-1 s-section">
      <div className="flex flex-col bg-[#0a192f] h-screen">
        <Navigation />
        <div className="h-full w-full flex flex-col text-white items-center justify-center px-20 ">
          <h2 className="text-2xl p-5 text-[#b4b4b4] ">Hi, my name is</h2>
          <h1 className="text-6xl font-bold text-slate-300 px-5 py-2">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Sedanah",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Developer",
                1000,
                "a Designer",
                1000,
                "",
                1000,
              ]}
              wrapper="span"
              speed={30}
              style={{ fontSize: "1.6em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <h2 className="text-3xl font-bold text-gray-400 px-5 py-2 mt-5">
            Crafting digital experiences.
          </h2>

          <button
            className="border-2 border-[#64ffda] rounded-md text-[#64ffda] m-5 p-4
        transition hover:-translate-x-2 hover:-translate-y-2 ease-in-out text-lg mt-10"
          >
            Resume
          </button>

          <ChevronDown className="absolute bottom-2 w-8 h-8 animate-bounce" />
        </div>
      </div>
      <div className="flex bg-[#0a192f] h-screen">
        <Experience />
      </div>
      
    </div>

    
  );
}

export default App;
