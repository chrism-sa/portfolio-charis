import { ReactLenis } from 'lenis/react';
import { lazy, Suspense } from 'react';
import ThreeBackground from './components/ThreeBackground';
import CustomCursor from './components/CustomCursor';

// Lazy loading komponen halaman
const Hero = lazy(() => import('./sections/Hero'));
const About = lazy(() => import('./sections/About'));
const TechStack = lazy(() => import('./sections/TechStack'));
const Experience = lazy(() => import('./sections/Experience'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));

function App() {
  return (
    <ReactLenis root>
      {/* Komponen Kursor Kustom berjalan secara global di atas semua elemen */}
      <CustomCursor />

      <div className="relative w-full min-h-screen bg-primary">
        <ThreeBackground />
        
        <main className="relative z-10 w-full flex flex-col">
          <Suspense fallback={
            <div className="h-screen flex items-center justify-center text-cyan-400 animate-pulse font-mono text-xl">
              Memuat Sistem...
            </div>
          }>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <TechStack />
            <Contact />
          </Suspense>
        </main>
      </div>
    </ReactLenis>
  );
}

export default App;