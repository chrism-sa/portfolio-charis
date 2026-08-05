// src/sections/TechStack.tsx
import { motion } from 'framer-motion';
import { TECH_STACK, TOOLS, SOFT_SKILLS } from '../constants/data';

export default function TechStack() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
      >
        Keahlian & Teknologi
      </motion.h2>

      {/* Bagian 1: Hard Skills */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-white mb-8 border-l-4 border-cyan-500 pl-4">Pemrograman & Framework</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {TECH_STACK.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center justify-center p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:shadow-[0_0_20px_rgba(0,246,255,0.2)] transition-all cursor-pointer group"
            >
              <tech.icon className={`text-5xl mb-4 ${tech.color} group-hover:drop-shadow-[0_0_10px_currentColor] transition-all`} />
              <span className="text-gray-300 font-medium tracking-wide text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bagian 2: Tools */}
      <div className="mb-20">
        <h3 className="text-2xl font-semibold text-white mb-8 border-l-4 border-purple-500 pl-4">Produktivitas & Desain</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TOOLS.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-4 p-5 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all cursor-pointer group"
            >
              <tool.icon className={`text-3xl ${tool.color} group-hover:drop-shadow-[0_0_10px_currentColor] transition-all`} />
              <span className="text-gray-300 font-medium text-sm">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bagian 3: Soft Skills */}
      <div>
        <h3 className="text-2xl font-semibold text-white mb-8 border-l-4 border-pink-500 pl-4">Keahlian Interpersonal</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {SOFT_SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all group"
            >
              <h4 className="text-2xl font-bold text-cyan-400 mb-4 group-hover:text-pink-400 transition-colors">
                {skill.title}
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}