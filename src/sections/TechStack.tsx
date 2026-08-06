// src/sections/TechStack.tsx
import { motion } from "framer-motion";
import { TECH_STACK, TOOLS, SOFT_SKILLS } from "../constants/data";
import { Code2, MonitorPlay, HeartHandshake } from "lucide-react";

// Menggunakan 'as any' untuk mencegah bug type-checking bawaan Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
} as any;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
} as any;

export default function TechStack() {
  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
        >
          Teknologi{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
            & Keahlian
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg"
        >
          Ekosistem perangkat lunak, framework, dan keahlian interpersonal yang
          saya gunakan untuk merancang, membangun, dan memelihara infrastruktur
          digital skala enterprise.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16">
        {/* Kolom Kiri: Hard Skills & Tools */}
        <div className="space-y-16">
          {/* Programming & Frameworks */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-surface border border-border-subtle rounded-lg text-accent-cyan">
                <Code2 size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Bahasa & Framework
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {TECH_STACK.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -4,
                    backgroundColor: "rgba(255,255,255,0.08)",
                  }}
                  className="flex items-center gap-3 p-4 bg-surface border border-border-subtle rounded-xl cursor-pointer transition-colors group"
                >
                  <tech.icon
                    className={`text-2xl ${tech.color} group-hover:scale-110 transition-transform`}
                  />
                  <span className="text-gray-300 font-medium text-sm">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Productivity & Design Tools */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-surface border border-border-subtle rounded-lg text-accent-purple">
                <MonitorPlay size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Produktivitas &amp; Desain
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {TOOLS.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -4,
                    backgroundColor: "rgba(255,255,255,0.08)",
                  }}
                  className="flex items-center gap-3 p-4 bg-surface border border-border-subtle rounded-xl cursor-pointer transition-colors group"
                >
                  <tool.icon
                    className={`text-2xl ${tool.color} group-hover:scale-110 transition-transform`}
                  />
                  <span className="text-gray-300 font-medium text-sm">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Kolom Kanan: Soft Skills */}
        <div className="h-full">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-surface border border-border-subtle rounded-lg text-pink-500">
              <HeartHandshake size={24} />
            </div>
            <h3 className="text-2xl font-semibold text-white">
              Keahlian Interpersonal
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {SOFT_SKILLS.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 300,
                }}
                whileHover={{ y: -3, scale: 1.05 }}
                className="px-4 py-2.5 bg-surface border border-border-subtle rounded-full text-sm font-medium text-gray-300 hover:border-pink-500/50 hover:text-white hover:bg-pink-500/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
