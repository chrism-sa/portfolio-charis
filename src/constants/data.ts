// src/constants/data.ts
import { FaReact, FaPhp, FaPython, FaJava, FaLaravel, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMysql, SiPostgresql, SiTailwindcss, SiCodeigniter, SiHtml5, SiCss } from 'react-icons/si';
import { FaMicrosoft, FaGoogle, FaFigma, FaVideo, FaFilm, FaPalette, FaPaintBrush } from 'react-icons/fa';

export const PERSONAL_INFO = {
  name: "Charis Maulana Setya Adi",
  roles: ["Fullstack Developer", "System Analyst", "QA Engineer"],
  email: "charis.maulana.sa@gmail.com",
  phone: "+62 813-3666-3071",
  address: "Jl. Sidomulyo No.110B, Pagentan, Singosari, Kabupaten Malang",
  profileImage: "D:/Portofolio/portfolio-charis/public/assets/profile-utama.jpg",
  aboutImage: "/assets/foto-wisuda.png",
  summary: "Lulusan S1 Teknik Informatika (S.Kom) dari UIN Maulana Malik Ibrahim Malang dengan predikat CumLaude (IPK 3.76). Memiliki pengalaman profesional dalam pengembangan berbagai aplikasi bisnis berbasis web skala enterprise untuk mendukung proses operasional perusahaan. Mengombinasikan kemampuan teknis yang mendalam dengan keterampilan interpersonal untuk menghadirkan solusi digital yang inovatif, aman, dan berorientasi pada tujuan bisnis.",
  socials: {
    github: "https://github.com/chrism-sa",
    linkedin: "https://linkedin.com/in/charismaulanasa",
    instagram: "https://instagram.com/"
  }
};

export const EXPERIENCE = [
  {
    id: 1,
    role: "Fullstack Developer | System Analyst (Remote)",
    company: "Danone Indonesia (Aqua & VIT)",
    year: "Sept 2025 - Mar 2026",
    description: "Mengembangkan sistem ERP internal secara mandiri, mendigitalisasi serta mengotomatisasi seluruh alur kerja manajemen perubahan di unit bisnis Aqua dan VIT (VIT). Mengelola integrasi Big Data dan berkolaborasi dengan stakeholder lintas divisi."
  },
  {
    id: 2,
    role: "Back End Developer",
    company: "CV Hawari, Malang",
    year: "Juli 2025 - Mar 2026",
    description: "Fokus pada pengembangan dan pemeliharaan arsitektur aplikasi bisnis seperti CMS, Dashboard Management, serta Attendance & Workforce Monitoring System. Memastikan performa server yang stabil dan melakukan troubleshooting hardware."
  },
  {
    id: 3,
    role: "QA Engineer (Departemen Aptika)",
    company: "Diskominfo Kota Malang",
    year: "Juni 2024 - Agust 2024",
    description: "Melakukan pengujian aplikasi menggunakan metode Blackbox Testing untuk memastikan fungsionalitas dan keamanan layanan digital pemerintahan. Menyusun dokumentasi dan laporan hasil pengujian secara terstruktur."
  },
  {
    id: 4,
    role: "Asisten Dosen & Praktikum",
    company: "Jurusan Teknik Informatika UIN Malang",
    year: "2023 - 2025",
    description: "Membimbing mata kuliah Jaringan Komputer, Sistem Terdistribusi, Pemrograman Website, dan Database. Bertanggung jawab dalam pendampingan teknis dan implementasi secure coding."
  }
];

export const EDUCATION = [
  {
    id: 1,
    degree: "S1 Teknik Informatika (S.Kom)",
    school: "UIN Maulana Malik Ibrahim Malang",
    year: "2021 - 2025",
    details: "Lulus dalam 8 semester dengan predikat CumLaude (IPK 3.76). Fokus tugas akhir pada pengembangan solusi perangkat lunak dan keamanan sistem."
  },
  {
    id: 2,
    degree: "MIPA (Matematika dan Ilmu Pengetahuan Alam)",
    school: "SMAS Annur Bululawang",
    year: "2018 - 2021",
    details: "Fokus pada bidang MIPA dengan minat kuat pada teknologi informasi dan logika pemrograman."
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "MOCIS & MOC.COM ",
    description: "Pengembangan sistem workflow internal berbasis web secara mandiri (Fullstack) untuk divisi Danone Indonesia. Proyek ini mendigitalisasi dan mengotomatisasi alur kerja manajemen perubahan pada unit bisnis Aqua dan VIT.",
    image: "/assets/project-mocis-dashboard.jpg",
    techStack: ["PHP", "CodeIgniter3", "MySQL", "Tailwind CSS"],
    github: "#",
    demo: "#"
  },
];

export const SOFT_SKILLS = [
  {
    title: "Komunikasi",
    description: "Mampu menyampaikan ide teknis yang kompleks menjadi bahasa yang mudah dipahami oleh stakeholder. Berpengalaman dalam presentasi teknis dan dokumentasi sistem."
  },
  {
    title: "Kerjasama & Manajemen",
    description: "Terbiasa bekerja dalam tim lintas fungsional maupun mandiri (remote). Mengedepankan kolaborasi aktif, disiplin waktu, dan manajemen proyek yang terorganisir."
  }
];

// Data Tech Stack yang digunakan di komponen TechStack.tsx
export const TECH_STACK = [
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "PHP", icon: FaPhp, color: "text-indigo-400" },
  { name: "Laravel", icon: FaLaravel, color: "text-red-500" },
  { name: "CodeIgniter", icon: SiCodeigniter, color: "text-orange-500" },
  { name: "Python", icon: FaPython, color: "text-yellow-300" },
  { name: "Java", icon: FaJava, color: "text-red-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-300" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Git", icon: FaGithub, color: "text-white" },
];

export const TOOLS = [
  { name: "Microsoft Office", icon: FaMicrosoft, color: "text-blue-500" },
  { name: "Google Workspace", icon: FaGoogle, color: "text-blue-400" },
  { name: "Figma", icon: FaFigma, color: "text-pink-500" },
  { name: "Canva", icon: FaPaintBrush, color: "text-cyan-500" }, // Menggunakan ikon kuas
  { name: "Photoshop", icon: FaPalette, color: "text-blue-600" }, // Menggunakan ikon palet warna
  { name: "Premiere Pro", icon: FaVideo, color: "text-purple-500" }, // Menggunakan ikon video
  { name: "CapCut", icon: FaFilm, color: "text-white" }, // Menggunakan ikon roll film
];