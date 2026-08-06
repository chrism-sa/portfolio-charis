// src/sections/ExperienceEducation.tsx
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { EXPERIENCE, EDUCATION } from "../constants/data"; // Import data dari sumber terpusat

export default function ExperienceEducation() {
  return (
    <section
      id="experience"
      className="py-32 px-6 w-full max-w-7xl mx-auto relative z-10"
    >
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white tracking-tight"
        >
          Perjalanan{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
            Karier & Akademik
          </span>
        </motion.h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-12">
        {/* Kolom Pengalaman Kerja */}
        <div>
          <div className="flex items-center gap-3 mb-10 border-b border-border-subtle pb-4">
            <div className="p-2 bg-surface border border-border-subtle rounded-lg">
              <Briefcase className="text-accent-cyan" size={24} />
            </div>
            <h3 className="text-2xl font-semibold text-white">
              Pengalaman Kerja
            </h3>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border-subtle before:via-border-hover before:to-transparent">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-10 h-10 -translate-x-1/2 flex items-center justify-center bg-background">
                  <div className="w-3 h-3 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(34,211,238,0.5)] border-2 border-background"></div>
                </div>

                {/* Content Card */}
                <div className="bg-surface border border-border-subtle p-6 rounded-2xl hover:border-border-hover hover:bg-[#151515] transition-all duration-300">
                  <h4 className="text-xl font-bold text-white mb-1">
                    {exp.role}
                  </h4>
                  <p className="text-accent-purple font-medium text-sm mb-4">
                    {exp.company}
                  </p>

                  <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {exp.year}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} /> {exp.type}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech && exp.tech.map((t, i) => (
                      <span key={i} className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium tracking-wide text-gray-300 bg-white/5 border border-white/5 rounded-md">
                        {/* Render ikon jika tersedia (tidak null) */}
                        {t.icon && <t.icon size={12} className="text-gray-400" />}
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Kolom Pendidikan */}
        <div>
          <div className="flex items-center gap-3 mb-10 border-b border-border-subtle pb-4">
            <div className="p-2 bg-surface border border-border-subtle rounded-lg">
              <GraduationCap className="text-accent-purple" size={24} />
            </div>
            <h3 className="text-2xl font-semibold text-white">Pendidikan</h3>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border-subtle before:via-border-hover before:to-transparent">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-10 h-10 -translate-x-1/2 flex items-center justify-center bg-background">
                  <div className="w-3 h-3 rounded-full bg-accent-purple shadow-[0_0_10px_rgba(192,132,252,0.5)] border-2 border-background"></div>
                </div>

                {/* Content Card */}
                <div className="bg-surface border border-border-subtle p-6 rounded-2xl hover:border-border-hover hover:bg-[#151515] transition-all duration-300">
                  <h4 className="text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-accent-cyan font-medium text-sm mb-4">
                    {edu.school}
                  </p>

                  <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {edu.year}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
