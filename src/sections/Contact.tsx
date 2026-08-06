// src/sections/Contact.tsx
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants/data';
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  // Membersihkan format nomor telepon agar bisa digunakan di link WhatsApp
  const waNumber = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');

  return (
    <section id="contact" className="pt-32 pb-12 px-6 max-w-5xl mx-auto relative z-10">
      
      {/* Kartu Utama Kontak dengan Efek Glassmorphism & Hover Glow */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative backdrop-blur-2xl bg-surface/80 border border-border-subtle hover:border-accent-cyan/30 p-8 md:p-14 rounded-[2.5rem] shadow-2xl overflow-hidden transition-all duration-500 group"
      >
        {/* Animated Glow Line di bagian atas Card */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-60"></div>
        
        {/* Background Ambient Glow */}
        <div className="absolute -right-24 -bottom-24 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none group-hover:bg-accent-cyan/20 transition-all duration-700"></div>

        {/* Badge Status Ketersediaan */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-medium tracking-wide">
            <Sparkles size={14} className="animate-pulse" />
            <span>Terbuka untuk Peluang Baru</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-14 tracking-tight text-white">
          Mari <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">Berkolaborasi</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Kolom Informasi Kontak (Email, WhatsApp, Lokasi) */}
          <div className="space-y-4">
            
            {/* Email Card */}
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="flex items-center justify-between p-4 bg-white/[0.02] border border-border-subtle hover:border-accent-cyan/50 rounded-2xl text-gray-300 hover:text-white transition-all group/item"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-surface border border-border-subtle rounded-xl text-accent-cyan group-hover/item:scale-110 transition-transform">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-mono">Email Utama</p>
                  <span className="text-sm md:text-base font-medium">{PERSONAL_INFO.email}</span>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-gray-500 group-hover/item:text-accent-cyan group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
            </a>
            
            {/* WhatsApp Card */}
            <a 
              href={`https://wa.me/${waNumber}`} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-between p-4 bg-white/[0.02] border border-border-subtle hover:border-green-500/50 rounded-2xl text-gray-300 hover:text-white transition-all group/item"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-surface border border-border-subtle rounded-xl text-green-400 group-hover/item:scale-110 transition-transform">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-mono">WhatsApp / Telepon</p>
                  <span className="text-sm md:text-base font-medium">{PERSONAL_INFO.phone}</span>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-gray-500 group-hover/item:text-green-400 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
            </a>
            
            {/* Lokasi */}
            <div className="flex items-center gap-4 p-4 bg-white/[0.02] border border-border-subtle rounded-2xl text-gray-300">
              <div className="p-3 bg-surface border border-border-subtle rounded-xl text-purple-400">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-mono">Lokasi Domisili</p>
                <span className="text-sm md:text-base font-medium">{PERSONAL_INFO.address}</span>
              </div>
            </div>

          </div>

          {/* Kolom Deskripsi & Sosial Media */}
          <div className="space-y-6 flex flex-col justify-center h-full">
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Saya selalu antusias untuk mendiskusikan tantangan baru dalam pengembangan sistem skala enterprise, integrasi data, maupun peluang kerja sama profesional lainnya.
            </p>
            
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 font-mono">Profil Profesional</p>
              <div className="flex gap-4">
                <a 
                  href={PERSONAL_INFO.socials.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2.5 px-5 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/30 text-gray-300 hover:text-white transition-all group"
                >
                  <FaGithub size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                
                <a 
                  href={PERSONAL_INFO.socials.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2.5 px-5 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-blue-500/10 hover:border-blue-500/30 text-gray-300 hover:text-blue-400 transition-all group"
                >
                  <FaLinkedin size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Footer Area */}
      <footer className="mt-20 text-center border-t border-border-subtle pt-8">
        <p className="text-gray-400 text-sm font-medium">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Hak Cipta Dilindungi.
        </p>
        <p className="text-gray-400 text-xs mt-2 font-mono">
          Dirancang & Dibangun dengan React, Tailwind CSS, dan Framer Motion.
        </p>
      </footer>
    </section>
  );
}