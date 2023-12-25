import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Navigation } from './components/navigation';
import { TypeAnimation } from 'react-type-animation';
import NET from 'vanta/src/vanta.net';

function App() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  const myRef2 = useRef(null);

  useEffect(() => {
    const vantaEffect2 = NET({
      el: myRef2.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      maxDistance: 26.00,
      spacing: 13.00,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x283bca,
      backgroundColor: 0x10002,
    });

    return () => {
      if (vantaEffect2) vantaEffect2.destroy();
    };
  }, []);

  return (
    <div className="s-page-1 s-section-1 s-section">
      <div className="flex flex-col bg-[#172554] h-screen" ref={myRef2}>
        <Navigation />
        <div className="h-full w-full flex flex-col text-white items-center justify-center px-20 ">
          <h2 className="text-2xl p-5 text-[#b4b4b4] ">Hello, I am</h2>
          <h1 className="text-6xl font-bold text-[#E6E6FA] px-5 py-2">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Sedanah',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'a Developer',
                1000,
                'a Designer',
                1000,
                '',
                1000,
              ]}
              wrapper="span"
              speed={30}
              style={{ fontSize: '1.6em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <h2 className="text-3xl font-bold text-gray-400 px-5 py-2 mt-5">
            Crafting digital experiences.
          </h2>
        </div>
      </div>

        </div>
     
  );
}

export default App;
