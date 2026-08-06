// src/sections/About.tsx
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants/data';
import { Code2, Database, Layout, Server, Briefcase } from 'lucide-react';

const HIGHLIGHTS = [
  { text: "Full Stack Development", icon: <Layout className="text-accent-cyan" size={18} /> },
  { text: "Backend Architecture", icon: <Server className="text-accent-purple" size={18} /> },
  { text: "REST API Integration", icon: <Code2 className="text-accent-cyan" size={18} /> },
  { text: "Database Design", icon: <Database className="text-accent-purple" size={18} /> },
  { text: "System Analysis", icon: <Briefcase className="text-accent-cyan" size={18} /> },
];

const STATS = [
  { value: "2+", label: "Tahun Pengalaman" },
  { value: "5+", label: "Proyek Selesai" },
  { value: "15+", label: "Teknologi Dikuasai" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-center">
          
          {/* Kolom Kiri: Foto & Stats */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-md">
            {/* Dekorasi Background Foto */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent-cyan/20 to-accent-purple/20 rounded-[2.5rem] blur-2xl opacity-50"></div>
            
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-border-subtle bg-surface z-10 group">
              <img 
                src={PERSONAL_INFO.aboutImage} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500?text=Foto+Wisuda';
                }}
              />
              
              {/* Overlay Gradient on Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Floating Stats Bar */}
            <div className="relative z-20 -mt-12 mx-auto w-[90%] bg-surface/80 backdrop-blur-xl border border-border-hover rounded-2xl p-6 shadow-2xl flex justify-between divide-x divide-border-subtle">
              {STATS.map((stat, i) => (
                <div key={i} className="flex-1 text-center px-2">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Teks & Highlight */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
              Mengenal Lebih <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">Dekat.</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-10">
              <p>
                Halo! Saya <strong className="text-white font-semibold">Charis Maulana Setya Adi</strong>, seorang {PERSONAL_INFO.roles[0]} yang berbasis di Malang, Indonesia.
              </p>
              <p style={{ textAlign: 'justify' }}>
                {PERSONAL_INFO.summary}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {HIGHLIGHTS.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-border-subtle flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-gray-300 font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}