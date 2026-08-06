// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Beranda', href: '#' },
  { name: 'Keahlian', href: '#skills' },
  { name: 'Perjalanan', href: '#experience' },
  { name: 'Proyek', href: '#projects' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Deteksi scroll untuk mengubah gaya Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo / Nama */}
        <a href="#" className="text-xl font-bold text-white tracking-tighter group">
          Charis<span className="text-accent-cyan group-hover:text-accent-purple transition-colors">.dev</span>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, index) => (
            <a 
              key={index} 
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              {/* Garis bawah animasi saat di-hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact" // Nanti kita arahkan ke section kontak
            className="px-5 py-2.5 bg-white/5 border border-white/10 hover:border-accent-cyan/50 text-sm font-medium text-white rounded-full transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            Hubungi Saya
          </a>
        </nav>

        {/* Tombol Hamburger Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Menu Mobile (Dropdown) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Tutup menu setelah di-klik
                  className="text-lg font-medium text-gray-300 hover:text-accent-cyan transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-block mt-4 text-center px-5 py-3 bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan rounded-xl font-medium"
              >
                Hubungi Saya
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}