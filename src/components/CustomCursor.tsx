// src/components/CustomCursor.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // 1. Update posisi kursor
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // 2. Deteksi apakah mouse berada di atas elemen yang bisa diklik
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Mengecek apakah elemen target atau induknya adalah link/button
      const isClickable = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button');

      setIsHovered(!!isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 bg-white rounded-full mix-blend-difference pointer-events-none z-[9999] hidden md:block"
        animate={{
          // Jika di-hover, posisi di-offset lebih banyak karena ukuran membesar
          x: mousePosition.x - (isHovered ? 24 : 6),
          y: mousePosition.y - (isHovered ? 24 : 6),
          // Ukuran berubah membesar saat hover
          width: isHovered ? 48 : 12,
          height: isHovered ? 48 : 12,
          // Transparansi sedikit berkurang saat membesar
          opacity: isHovered ? 0.6 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500, // Kecepatan mengikuti kursor (lebih tinggi = lebih responsif)
          damping: 28,
          mass: 0.1
        }}
      />
    </>
  );
}