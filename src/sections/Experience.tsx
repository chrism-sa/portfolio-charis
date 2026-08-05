import { motion } from 'framer-motion';
import { EXPERIENCE, EDUCATION } from '../constants/data';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
      >
        Experience & Education
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-cyan-400">Experience</h3>
          <div className="space-y-8 border-l-2 border-white/10 pl-6 relative">
            {EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[33px] top-1 w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_10px_#00f6ff]"></div>
                <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                <p className="text-gray-400 text-sm mb-2">{exp.company} | {exp.year}</p>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-purple-400">Education</h3>
          <div className="space-y-8 border-l-2 border-white/10 pl-6 relative">
            {EDUCATION.map((edu, index) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[33px] top-1 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]"></div>
                <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                <p className="text-gray-400 text-sm mb-2">{edu.school} | {edu.year}</p>
                <p className="text-gray-300">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}