// src/sections/Contact.tsx
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants/data';
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  // Membersihkan format nomor telepon agar bisa digunakan di link WhatsApp
  const waNumber = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');

  return (
    <section id="contact" className="pt-24 pb-8 px-6 max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="backdrop-blur-xl bg-white/5 border border-white/10 p-10 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden"
      >
        {/* Animated Glow Line di bagian atas Card */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Mari Berkolaborasi
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informasi Kontak */}
          <div className="space-y-6">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group">
              <div className="p-3 bg-white/5 border border-white/10 rounded-lg group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all"><FaEnvelope size={20} /></div>
              <span className="text-sm md:text-base">{PERSONAL_INFO.email}</span>
            </a>
            
            <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition-colors group">
              <div className="p-3 bg-white/5 border border-white/10 rounded-lg group-hover:bg-green-500/20 group-hover:border-green-500/50 transition-all"><FaWhatsapp size={20} /></div>
              <span className="text-sm md:text-base">{PERSONAL_INFO.phone}</span>
            </a>
            
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-3 bg-white/5 border border-white/10 rounded-lg"><FaMapMarkerAlt size={20} /></div>
              <span className="text-sm md:text-base">{PERSONAL_INFO.address}</span>
            </div>
          </div>

          {/* Sosial Media & Deskripsi */}
          <div className="space-y-8">
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Saya selalu terbuka untuk diskusi mengenai pengembangan sistem, manajemen data, atau peluang kerjasama profesional lainnya. Jangan ragu untuk menghubungi saya!
            </p>
            <div className="flex gap-4">
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-cyan-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,246,255,0.3)] transition-all">
                <FaGithub size={24} />
              </a>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-blue-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Area */}
      <footer className="mt-24 text-center border-t border-white/10 pt-8">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Designed & Built with React, Tailwind CSS, and Framer Motion.
        </p>
      </footer>
    </section>
  );
}