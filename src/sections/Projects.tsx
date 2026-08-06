// src/sections/Projects.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants/data';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Import Swiper React components & modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
      <div className="mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Proyek <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">Unggulan</span>
        </motion.h2>
        <p className="text-gray-400 max-w-2xl text-lg">Beberapa sistem skala enterprise dan aplikasi web yang telah saya kembangkan.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

// Komponen Internal Card
function ProjectCard({ project, index }: { project: any, index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-surface border border-border-subtle rounded-[2rem] overflow-hidden group hover:border-border-hover transition-colors flex flex-col relative"
    >
      {/* Thumbnail Carousel (Gaya Instagram) */}
      <div className="relative aspect-[16/10] bg-[#050505] overflow-hidden group/slider">
        <Swiper
          modules={[Pagination, Navigation, A11y]}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          loop={true}
          className="w-full h-full"
          // Kustomisasi warna elemen bawaan Swiper agar sesuai tema
          style={{
            '--swiper-pagination-color': '#22d3ee',
            '--swiper-pagination-bullet-inactive-color': '#71717a',
            '--swiper-navigation-color': 'rgba(255,255,255,0.7)',
            '--swiper-navigation-size': '20px',
          } as React.CSSProperties}
        >
          {project.images?.map((img: string, i: number) => (
            <SwiperSlide key={i}>
              <img 
                src={img} 
                alt={`${project.title} - Slide ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/slider:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x500?text=Project+Preview';
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Overlay subtle gradient yang tidak menghalangi klik tombol Swiper */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80 pointer-events-none z-10"></div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex-1 flex flex-col">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-accent-cyan mb-3 font-mono">
            {project.year}
          </span>
          <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
        </div>

        {/* Expandable Text */}
        <div className="relative mb-6">
          <AnimatePresence initial={false}>
            <motion.div
              animate={{ height: isExpanded ? "auto" : "72px" }}
              className="text-gray-400 text-sm leading-relaxed overflow-hidden"
            >
              {project.description}
            </motion.div>
          </AnimatePresence>
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
          )}
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 text-xs font-semibold text-accent-cyan hover:text-white transition-colors mb-8 w-max"
        >
          {isExpanded ? <><ChevronUp size={14}/> Lebih Sedikit</> : <><ChevronDown size={14}/> Baca Selengkapnya</>}
        </button>

        {/* Tags & Action Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech: any, i: number) => (
              <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0a0a0a] border border-border-subtle text-gray-300 text-xs rounded-lg font-medium">
                {/* Tampilkan ikon jika ada */}
                {tech.icon && <tech.icon size={14} className="text-gray-400" />}
                {tech.name}
              </span>
            ))}
          </div>
      </div>
    </motion.div>
  );
}