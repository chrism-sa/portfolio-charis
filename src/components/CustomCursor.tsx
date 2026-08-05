// src/components/CustomCursor.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Titik inti (Core dot) */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full mix-blend-screen pointer-events-none z-[100] shadow-[0_0_10px_#00f6ff] hidden md:block"
        animate={{ 
          x: mousePosition.x - 6, 
          y: mousePosition.y - 6 
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 28, mass: 0.1 }}
      />
      
      {/* Lingkaran luar (Outer ring) */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-cyan-500/50 rounded-full mix-blend-screen pointer-events-none z-[100] hidden md:block"
        animate={{ 
          x: mousePosition.x - 20, 
          y: mousePosition.y - 20 
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
      />
    </>
  );
}