import { ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';
import CustomCursor from '../components/CustomCursor'; // Pastikan komponen ini tetap ada

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <ReactLenis root>
      <div className="relative w-full min-h-screen bg-background">
        <CustomCursor />
        
        {/* Efek Ambient Glow Global */}
        <div className="fixed top-0 inset-x-0 h-[500px] w-full bg-gradient-to-b from-accent-purple/5 to-transparent pointer-events-none -z-10 blur-3xl"></div>

        {/* Placeholder untuk Navbar modern (Sticky) */}
        {/* <Navbar /> */}

        <main className="relative z-10 w-full flex flex-col items-center">
          {children}
        </main>

        {/* Placeholder untuk Footer */}
        {/* <Footer /> */}
      </div>
    </ReactLenis>
  );
}