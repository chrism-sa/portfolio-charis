// src/sections/About.tsx
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SOFT_SKILLS } from '../constants/data';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden relative"
      >
        {/* Glow Effect */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"></div>
        
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center relative z-10">
          {/* Foto Profil / Wisuda */}
          <div className="relative group mx-auto w-64 md:w-full max-w-sm">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-secondary">
              <img 
                src={PERSONAL_INFO.aboutImage} 
                alt="Charis Maulana Setya Adi" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x600?text=Foto+Wisuda';
                }}
              />
            </div>
          </div>

          {/* Deskripsi & Soft Skills */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Tentang Saya
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {PERSONAL_INFO.summary}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {SOFT_SKILLS.map((skill, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors">
                  <h3 className="text-cyan-400 font-semibold text-xl mb-2">{skill.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}