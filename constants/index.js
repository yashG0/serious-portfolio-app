import devShowPreview from "../assets/projects/devshow-pic.webp";
import ledgerPreview from "../assets/projects/ledger-job-application-tracker.webp";
import resonancePreview from "../assets/projects/resonance-pic-1.webp";
import smartBatchPreview from "../assets/projects/smart_batch_pdf-pic.webp";

export const HERO_CONTENT = `I build practical, scalable software with a focus on backend systems, APIs, and modern web applications. My work combines Python, Go, React, and modern development tools to turn ideas into reliable, usable products.`;

export const ABOUT_TEXT = `I'm a developer who enjoys understanding how software works beneath the surface and building things that are useful in the real world. My primary focus is backend and full-stack development, with particular interest in APIs, system design, databases, developer tools, and automation.

I started my development journey with a BCA and have continued expanding my skills through hands-on projects and an MCA. I learn by building, experimenting, and solving practical problems rather than simply following tutorials.

Today, I work primarily with Python and Go on the backend while using React and modern web technologies to build complete applications. I'm particularly interested in writing clean, maintainable software and continuously exploring better ways to build it.`;

export const PROJECTS = [
  {
    title: "DevShow",
    image: devShowPreview,
    description:
      "A platform for developers to showcase their work, explore projects, and share what they are building.",
    technologies: ["React", "JavaScript", "Developer Platform"],
    github: "https://github.com/yashG0/Devshow-application",
    live: "https://devshow.yashgaurkar.me",
  },
  {
    title: "Ledger — Full-Stack Job Application Tracker",
    image: ledgerPreview,
    description:
      "A full-stack job search tracker for keeping applications, hiring stages, and progress in one quiet, organized workspace.",
    technologies: ["Django", "Django REST Framework", "React", "PostgreSQL"],
    github: "https://github.com/yashG0/full-stack-job-application-tracker",
    live: "https://jobtracker.yashgaurkar.me/",
  },
  {
    title: "Resonance",
    image: resonancePreview,
    description:
      "A Linux-first, offline-friendly desktop client for testing HTTP APIs. Built with Rust and Slint, with local SQLite storage.",
    technologies: ["Rust", "Slint", "SQLite", "HTTP"],
    github: "https://github.com/yashG0/resonance-api-testing-platform",
    live: null,
  },
  {
    title: "Smart Batch PDF Toolkit",
    image: smartBatchPreview,
    description:
      "A local-first toolkit for batch PDF and image tasks, including merging, splitting, conversion, compression, and page extraction.",
    technologies: ["Python", "Streamlit", "PyMuPDF", "Pillow"],
    github:
      "https://github.com/yashG0/Smart-Batch-Converter-PDF-Image-Processing-GUI",
    live: null,
  },
];

export const CONTACT = {
  address: "Nagpur, India",
  email: "yashgaurkar0@gmail.com",
};
export const EDUCATION = [
  {
    period: "2025 — Present",
    degree: "Master of Computer Applications",
    institution: "GH Raisoni College, Nagpur",
  },
  {
    period: "2021 — 2024",
    degree: "Bachelor of Computer Applications",
    institution: "SFS College, Nagpur",
  },
];

export const PROFILE = [
  {
    label: "01",
    title: "Backend focused",
    description: "APIs, databases, services and application architecture.",
  },
  {
    label: "02",
    title: "Full-stack capable",
    description: "Building complete products from backend to interface.",
  },
  {
    label: "03",
    title: "Builder mindset",
    description: "Learning by creating practical software and tools.",
  },
];
