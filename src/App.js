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
      minHeight: 400.0,
      minWidth: 200.0,
      maxDistance: 26.00,
      spacing: 14.00,
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
         
          <h1 className="text-6xl font-bold text-[#64f5ffbd] px-5 py-2">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Hello',
                1000,
                'Welcome to my website',
                1000,
                'I am Sedanah',
                1000, // wait 1s before replacing first "" with second ""
                'a Developer',
                1000,
                'a Designer',
                1000,
                'Enjoy',
                1000,
              ]}
              wrapper="span"
              speed={20}
              style={{ fontSize: '1.6em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
         
        </div>
      </div>

        </div>
     
  );
}

export default App;
