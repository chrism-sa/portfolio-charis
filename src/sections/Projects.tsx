// src/sections/Projects.tsx
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants/data';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
      >
        Proyek Penting
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(0,246,255,0.15)] transition-all duration-300"
          >
            {/* Image Thumbnail */}
            <div className="w-full h-56 overflow-hidden bg-gray-900">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Screenshot+MOCIS';
                }}
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}