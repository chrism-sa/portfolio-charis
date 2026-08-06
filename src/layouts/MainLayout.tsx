// src/layouts/MainLayout.tsx
import type { ReactNode } from 'react';
import ThreeBackground from '../components/ThreeBackground';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar'; // <-- 1. Import Navbar di sini

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen bg-background text-white selection:bg-accent-cyan/30 overflow-hidden">
      {/* 2. Panggil Navbar di dalam layout */}
      <Navbar /> 
      
      <CustomCursor />
      
      <div className="fixed inset-0 z-0">
        <ThreeBackground />
      </div>

      <main className="relative z-10 w-full overflow-x-hidden pt-24"> 
        {/* Catatan: pt-24 (padding-top) ditambahkan agar konten pertama (Hero) tidak tertutup Navbar */}
        {children}
      </main>
    </div>
  );
}