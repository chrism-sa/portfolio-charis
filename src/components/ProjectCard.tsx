// src/components/ProjectCard.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { ChevronDown, ChevronUp } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ProjectCard({ project }: { project: any }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
    >
      {/* Image Carousel */}
      <div className="relative aspect-video bg-[#0a0a0a] group">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation
          loop
          className="w-full h-full"
        >
          {project.images.map((img: string, idx: number) => (
            <SwiperSlide key={idx}>
              <img src={img} alt={`${project.title} - ${idx}`} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-cyan-400 text-xs font-mono tracking-wider uppercase">{project.category} • {project.year}</span>
            <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
          </div>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
            {project.status}
          </span>
        </div>

        {/* Expandable Description */}
        <div className="relative">
          <AnimatePresence initial={false}>
            <motion.div
              key="content"
              initial="collapsed"
              animate={isExpanded ? "open" : "collapsed"}
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 1, height: "60px" }
              }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="text-gray-400 text-sm leading-relaxed overflow-hidden"
            >
              {project.description}
            </motion.div>
          </AnimatePresence>
          
          {/* Fade Overlay when collapsed */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#111111] to-transparent" />
          )}
        </div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-xs text-cyan-400 mt-2 hover:text-cyan-300 transition-colors"
        >
          {isExpanded ? <><ChevronUp size={14}/> Show Less</> : <><ChevronDown size={14}/> Read More</>}
        </button>

        {/* Project Info Grid */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0, marginTop: 0 }}
              animate={{ opacity: 1, marginTop: 24 }}
              exit={{ opacity: 0, marginTop: 0 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-white/5"
            >
              <div><p className="text-gray-500 text-xs mb-1">Role</p><p className="text-sm text-gray-200">{project.role}</p></div>
              <div><p className="text-gray-500 text-xs mb-1">Client</p><p className="text-sm text-gray-200">{project.info.client}</p></div>
              <div><p className="text-gray-500 text-xs mb-1">Platform</p><p className="text-sm text-gray-200">{project.info.platform}</p></div>
              <div><p className="text-gray-500 text-xs mb-1">Duration</p><p className="text-sm text-gray-200">{project.info.duration}</p></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.techStack.map((tech: string, idx: number) => (
            <span key={idx} className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-md border border-white/5">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}