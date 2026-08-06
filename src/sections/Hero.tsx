import { motion } from 'framer-motion';
import { HERO_DATA } from '../data';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 w-full max-w-7xl mx-auto text-center z-10">
      
      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent-cyan text-xs md:text-sm mb-8 backdrop-blur-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
        </span>
        Tersedia untuk peluang baru
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6"
      >
        {HERO_DATA.name}
      </motion.h1>

      {/* Roles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-lg md:text-2xl text-gray-400 mb-8 font-medium"
      >
        {HERO_DATA.roles.map((role, i) => (
          <div key={i} className="flex items-center gap-3 md:gap-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">{role}</span>
            {i !== HERO_DATA.roles.length - 1 && <span className="text-white/10">•</span>}
          </div>
        ))}
      </motion.div>

      {/* Professional Summary */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl text-gray-400 text-base md:text-lg leading-relaxed mb-12"
      >
        {HERO_DATA.summary}
      </motion.p>

      {/* Call to Actions (Buttons) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4 mb-16 w-full"
      >
        <a href="#about" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 hover:scale-105 transition-all duration-300">
          Tentang Saya
        </a>
        <a href="#projects" className="px-8 py-3 rounded-full bg-surface text-white font-semibold border border-border-subtle hover:bg-white/5 hover:border-border-hover transition-all duration-300">
          Lihat Proyek
        </a>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex gap-6"
      >
        {HERO_DATA.socials.map((social, i) => (
          <a key={i} href={social.url} target="_blank" rel="noreferrer" aria-label={social.label} className="text-gray-500 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300">
            <social.icon size={26} />
          </a>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-border-hover"
      >
      </motion.div>
    </section>
  );
}