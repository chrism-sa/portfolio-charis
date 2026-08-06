// src/sections/TechStack.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TECH_STACK, TOOLS, SOFT_SKILLS } from "../constants/data";
import { Code2, MonitorPlay, HeartHandshake } from "lucide-react";

// Animasi Container (Stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
} as any;

// Animasi Item (Kotak/Badge)
const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
} as any;

export default function TechStack() {
  // State untuk menyimpan Tab mana yang sedang aktif
  const [activeTab, setActiveTab] = useState("framework");

  // Konfigurasi Tombol Tab
  const TABS = [
    {
      id: "framework",
      label: "Bahasa & Framework",
      icon: Code2,
      color: "text-accent-cyan",
    },
    {
      id: "tools",
      label: "Produktivitas & Desain",
      icon: MonitorPlay,
      color: "text-accent-purple",
    },
    {
      id: "skills",
      label: "Keahlian Interpersonal",
      icon: HeartHandshake,
      color: "text-pink-500",
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
      {/* Header Section */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
        >
          Teknologi{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
            &amp; Keahlian
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
          saya gunakan untuk merancang dan membangun sistem digital.
        </motion.p>
      </div>

      {/* Tab Navigation Menu */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeTab === tab.id
                ? "bg-white/10 border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                : "bg-surface/50 border-border-subtle text-gray-400 hover:text-gray-200 hover:bg-surface hover:border-white/10"
            }`}
          >
            <tab.icon
              size={18}
              className={activeTab === tab.id ? tab.color : "text-gray-500"}
            />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Area */}
      {/* Menggunakan min-h agar tinggi tidak melompat-lompat saat pindah tab */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
          >
            {/* KONTEN: Bahasa & Framework */}
            {activeTab === "framework" && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {TECH_STACK.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      y: -4,
                      backgroundColor: "rgba(255,255,255,0.08)",
                    }}
                    className="flex flex-col items-center justify-center gap-3 p-6 bg-surface border border-border-subtle rounded-xl cursor-pointer transition-colors group"
                  >
                    <tech.icon
                      className={`text-4xl ${tech.color} group-hover:scale-110 transition-transform`}
                    />
                    <span className="text-gray-300 font-medium text-sm text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* KONTEN: Produktivitas & Desain */}
            {activeTab === "tools" && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {TOOLS.map((tool, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      y: -4,
                      backgroundColor: "rgba(255,255,255,0.08)",
                    }}
                    className="flex flex-col items-center justify-center gap-3 p-6 bg-surface border border-border-subtle rounded-xl cursor-pointer transition-colors group"
                  >
                    <tool.icon
                      className={`text-4xl ${tool.color} group-hover:scale-110 transition-transform`}
                    />
                    <span className="text-gray-300 font-medium text-sm text-center">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* KONTEN: Keahlian Interpersonal */}
            {activeTab === "skills" && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
              >
                {SOFT_SKILLS.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="flex items-center gap-2.5 px-6 py-3.5 bg-surface border border-border-subtle rounded-full text-sm font-medium text-gray-300 hover:border-pink-500/50 hover:text-white hover:bg-pink-500/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all cursor-default group"
                  >
                    {/* Render Ikon Soft Skill */}
                    <skill.icon
                      size={18}
                      className="text-pink-500/70 group-hover:text-pink-500 transition-colors"
                    />
                    {skill.name}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
