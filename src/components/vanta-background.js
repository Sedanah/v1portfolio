import React, { useRef, useEffect } from 'react';
import VANTA from 'vanta/dist/vanta.net.min'; // Import VANTA library

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    // Initialize Vanta.js effect in useEffect with proper cleanup
    if (!vantaRef.current) {
      VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x14d01,
        backgroundColor: 0x70431,
        points: 12.00,
        maxDistance: 27.00
      });
    }
  }, []);

  return <div ref={vantaRef} style={{ width: '100%', height: '100vh' }} />;
};

export default VantaBackground;
