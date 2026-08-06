// src/data/index.ts
import { FaReact, FaPhp, FaPython, FaNodeJs, FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMysql, SiPostgresql, SiTailwindcss, SiCodeigniter, SiLaravel, SiFigma } from 'react-icons/si';

export const HERO_DATA = {
  name: "Charis Maulana Setya Adi",
  roles: ["Full Stack Developer", "Software Engineer", "System Analyst"],
  summary: "Mengombinasikan kemampuan teknis yang mendalam dengan keterampilan interpersonal untuk menghadirkan solusi digital skala enterprise yang inovatif, aman, dan berorientasi pada tujuan bisnis.",
  resumeUrl: "/assets/CV_CHARIS_MAULANA.pdf",
  socials: [
    { icon: FaGithub, url: "https://github.com/chrism-sa", label: "GitHub" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/charismaulanasa", label: "LinkedIn" },
    { icon: FaEnvelope, url: "mailto:charis.maulana.sa@gmail.com", label: "Email" },
    { icon: FaWhatsapp, url: "https://wa.me/6281336663071", label: "WhatsApp" }
  ]
};

export const ABOUT_STATS = [
  { label: "Tahun Pengalaman", value: "2+" },
  { label: "Proyek Enterprise", value: "5+" }
];

export const SKILLS_DATA = [
  {
    category: "Programming Languages",
    items: [
      { name: "PHP", icon: FaPhp, level: 90 },
      { name: "TypeScript", icon: SiTypescript, level: 85 },
      { name: "JavaScript", icon: SiJavascript, level: 90 },
      { name: "Python", icon: FaPython, level: 75 },
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Laravel", icon: SiLaravel, level: 90 },
      { name: "React", icon: FaReact, level: 85 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 95 },
      { name: "CodeIgniter", icon: SiCodeigniter, level: 80 },
    ]
  },
  {
    category: "Database & Tools",
    items: [
      { name: "MySQL", icon: SiMysql, level: 90 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 85 },
      { name: "Git", icon: FaGithub, level: 85 },
      { name: "Figma", icon: SiFigma, level: 70 },
    ]
  }
];

export const PROJECTS_DATA = [
  {
    id: "mocis-erp",
    title: "MOCIS ERP System",
    category: "Enterprise Web App",
    role: "Fullstack Developer",
    year: "2025",
    status: "Completed",
    description: "Pengembangan sistem ERP internal berbasis web secara mandiri (Fullstack) untuk divisi Danone Indonesia. Proyek ini mendigitalisasi dan mengotomatisasi alur kerja manajemen perubahan pada unit bisnis Aqua dan Coman. Mengelola integrasi Big Data dan mengoptimalkan performa aplikasi untuk ribuan data transaksi harian.",
    images: [
      "/assets/projects/mocis-1.jpg",
      "/assets/projects/mocis-2.jpg",
      "/assets/projects/mocis-3.jpg"
    ],
    techStack: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    info: {
      client: "Danone Indonesia (Aqua & Coman)",
      platform: "Web Application",
      duration: "7 Bulan",
      features: "15+ Modul Utama"
    },
    links: {
      github: null,
      live: null
    }
  }
];