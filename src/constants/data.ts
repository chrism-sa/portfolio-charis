// src/constants/data.ts
import {
  FaReact,
  FaPhp,
  FaPython,
  FaJava,
  FaLaravel,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiCodeigniter,
  SiHtml5,
  SiGit,
  SiCss,
  SiVite, SiNodedotjs, SiBootstrap, SiPostman, SiDocker, SiNotion, SiJira, SiVercel, SiXampp, SiLaragon
} from "react-icons/si";
import {
  FaMicrosoft,
  FaGoogle,
  FaFigma,
  FaPaintBrush,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { Lightbulb, Search, ClipboardList, MessageSquare, Users, Clock, Brain, ShieldCheck, FileText, GraduationCap, Zap } from 'lucide-react';


export const PERSONAL_INFO = {
  name: "Charis Maulana Setya Adi",
  roles: ["Full Stack Developer", "System Analyst", "QA Engineer"],
  email: "charis.maulana.sa@gmail.com",
  phone: "+62 813-3666-3071",
  address: "Jl. Sidomulyo No.110B, Pagentan, Singosari, Kabupaten Malang",
  profileImage: "/assets/profile-utama.jpg",
  aboutImage: "/assets/foto-wisuda.png",
  summary:
    "Saya berspesialisasi dalam merancang dan membangun arsitektur sistem skala enterprise. Lebih dari sekadar menulis kode, saya berfokus pada analisis mendalam untuk menerjemahkan kompleksitas operasional menjadi solusi digital yang tangguh, aman, dan berdampak langsung pada pertumbuhan bisnis.",
  socials: {
    github: "https://github.com/chrism-sa",
    linkedin: "https://linkedin.com/in/charismaulanasa",
    instagram: "https://instagram.com/charismaulana.al",
  },
};

export const EXPERIENCE = [
  {
    id: 1,
    role: "Fullstack Developer | System Analyst",
    company: "Danone Indonesia",
    year: "Sept 2025 - Mar 2026",
    type: "Remote",
    description:
      "Merancang dan mengembangkan aplikasi web internal (sistem workflow) untuk mendukung berbagai proses bisnis perusahaan. Bertanggung jawab dalam pemeliharaan sistem, optimasi performa, manajemen integrasi Big Data, serta berkolaborasi dengan stakeholder lintas divisi.",
    tech: [
      { name: "CodeIgniter", icon: SiCodeigniter },
      { name: "PHP", icon: FaPhp },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Postman", icon: SiPostman },
      { name: "Canva", icon: FaPaintBrush },
      { name: "Microsoft Office", icon: FaMicrosoft },
      { name: "Google Workspace", icon: FaGoogle },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    id: 2,
    role: "IT Developer",
    company: "CV Hawari, Malang",
    year: "Juli 2025 - Mar 2026",
    type: "On-site",
    description:
      "Fokus pada pengembangan dan pemeliharaan arsitektur aplikasi bisnis seperti Dashboard Management, serta Sistem Monitoring Kehadiran. Menangani sisi backend, perbaikan infrastruktur server, dan pemecahan masalah perangkat keras.",
    tech: [
      { name: "PHP", icon: FaPhp },
      { name: "CodeIgniter", icon: SiCodeigniter },
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Postman", icon: SiPostman },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: FaGithub },
      { name: "CSS", icon: SiCss },
      { name: "MySQL", icon: SiMysql },
      { name: "Microsoft Office", icon: FaMicrosoft },
    ],
  },
  {
    id: 3,
    role: "Guru Ekstrakurikuler IT",
    company: "SMAN 1 Lawang (SMANELA)",
    year: "Feb 2026 - Mei 2026",
    type: "On-site",
    description:
      "Menyusun dan menyampaikan materi pemrograman website interaktif menggunakan HTML, CSS, dan JavaScript. Membimbing lebih dari 10 siswa dalam merancang proyek berbasis web dari awal hingga selesai dengan tingkat penyelesaian proyek mencapai 100%.",
    tech: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Laragon", icon: SiLaragon },
      { name: "Mentoring", icon: null },
    ],
  },
  {
    id: 4,
    role: "Internship - QA Engineer",
    company: "Diskominfo Kota Malang",
    year: "Juni 2024 - Agust 2024",
    type: "On-site",
    description:
      "Melakukan pengujian aplikasi menggunakan metode Blackbox Testing untuk memastikan stabilitas, fungsionalitas, dan keamanan layanan digital pemerintahan. Menyusun dokumentasi dan laporan hasil pengujian secara terstruktur.",
    tech: [
      { name: "Manual Testing", icon: null },
      { name: "Blackbox Testing", icon: null },
      { name: "Jira", icon: SiJira },
    ],
  },
  {
    id: 5,
    role: "Asisten Dosen & Praktikum",
    company: "Jurusan Teknik Informatika UIN Malang",
    year: "Juli 2023 - Juli 2025",
    type: "On-site",
    description:
      "Berpengalaman sebagai Asisten Praktikum selama 4 semester. Membimbing mata kuliah Jaringan Komputer, Sistem Terdistribusi, Pemrograman Website, dan Database. Bertanggung jawab dalam pendampingan teknis dan implementasi secure coding.",
    tech: [
      { name: "Networking", icon: null },
      { name: "Database", icon: null },
      { name: "Secure Coding", icon: null },
    ],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "S1 Teknik Informatika (S.Kom)",
    school: "UIN Maulana Malik Ibrahim Malang",
    year: "2021 - 2025",
    details:
      "Lulus dengan predikat CumLaude (IPK 3.76). Aktif berperan sebagai Asisten Praktikum selama 4 semester untuk mata kuliah Jaringan Komputer dan Sistem Terdistribusi.",
  },
  {
    id: 2,
    degree: "Matematika dan Ilmu Pengetahuan Alam (MIPA)",
    school: "SMAS Annur Bululawang",
    year: "2018 - 2021",
    details:
      "Fokus pada penguasaan logika dasar, matematika, dan ilmu sains yang menjadi fondasi kuat dalam logika pemrograman.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Management of Change Information System (Workflow Website)",
    year: "2025 - 2026",
    description: "Pengembangan sistem workflow internal berbasis web secara mandiri (Fullstack). Proyek ini mendigitalisasi dan mengotomatisasi alur kerja manajemen perubahan pada unit bisnis.",
    images: [
      "/assets/project-mocis-dashboard.png",
      "/assets/project-moc.com-dashboard.png", 
      "/assets/bukti.jpg",
    ],
    // Ubah techStack menjadi array of objects dengan ikon
    techStack: [
      { name: "PHP", icon: FaPhp },
      { name: "CodeIgniter3", icon: SiCodeigniter },
      { name: "MySQL", icon: SiMysql },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Google Workspace", icon: FaGoogle },
      { name: "Microsoft Office", icon: FaMicrosoft },
      { name: "Technical Documentation", icon: null },
      { name: "UAT", icon: null },
    ],
    github: "#",
    demo: "#",
  },
];

// Data Tech Stack yang digunakan di komponen TechStack.tsx
export const TECH_STACK = [
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Vite", icon: SiVite, color: "text-purple-400" },
  { name: "PHP", icon: FaPhp, color: "text-indigo-400" },
  { name: "Laravel", icon: FaLaravel, color: "text-red-500" },
  { name: "CodeIgniter", icon: SiCodeigniter, color: "text-orange-500" },
  { name: "Python", icon: FaPython, color: "text-yellow-300" },
  { name: "Java", icon: FaJava, color: "text-red-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-300" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Github", icon: FaGithub, color: "text-white" },
  { name: "Git", icon: SiGit, color: "text-white" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "Notion", icon: SiNotion, color: "text-gray-300" },
];

export const TOOLS = [
  { name: "Microsoft Office", icon: FaMicrosoft, color: "text-blue-500" },
  { name: "Google Workspace", icon: FaGoogle, color: "text-blue-400" },
  { name: "Figma", icon: FaFigma, color: "text-pink-500" },
  { name: "VS Code", icon: VscVscode, color: "text-blue-500" },
  { name: "Jira", icon: SiJira, color: "text-blue-400" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
  { name: "XAMPP", icon: SiXampp, color: "text-orange-500" },
  { name: "Laragon", icon: SiLaragon, color: "text-blue-500" },
];

export const SOFT_SKILLS = [
  { name: "Problem Solving", icon: Lightbulb },
  { name: "System Analysis", icon: Search },
  { name: "Requirement Gathering", icon: ClipboardList },
  { name: "Komunikasi Efektif", icon: MessageSquare },
  { name: "Kerjasama Tim", icon: Users },
  { name: "Manajemen Waktu", icon: Clock },
  { name: "Berpikir Kritis", icon: Brain },
  { name: "Quality Assurance", icon: ShieldCheck },
  { name: "Technical Documentation", icon: FileText },
  { name: "Mentoring & Coaching", icon: GraduationCap },
  { name: "Adaptasi Cepat", icon: Zap },
];