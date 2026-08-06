import { Suspense, lazy } from 'react';
import MainLayout from './layouts/MainLayout';
import ThreeBackground from './components/ThreeBackground';

// Lazy loading komponen (Campuran yang baru dan yang lama sementara waktu)
const Hero = lazy(() => import('./sections/Hero'));
const ExperienceEducation = lazy(() => import('./sections/ExperienceEducation')); // <-- Timeline Baru
const About = lazy(() => import('./sections/About'));
const TechStack = lazy(() => import('./sections/TechStack'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));

function App() {
  return (
    <MainLayout>
      <ThreeBackground />
      
      <Suspense fallback={
        <div className="h-screen flex items-center justify-center text-accent-cyan animate-pulse font-mono text-xl">
          Memuat Sistem...
        </div>
      }>
        {/* Urutan section bisa disesuaikan nantinya */}
        <Hero />
        <About />
        <TechStack />
        <ExperienceEducation />
        <Projects />
        <Contact />
      </Suspense>
    </MainLayout>
  );
}

export default App;