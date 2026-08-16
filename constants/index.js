import project1 from "../assets/projects/linkpulse.png";
import project2 from "../assets/projects/smart_batch_pdf.png";
import project3 from "../assets/projects/job_app_tracker.png";
import project4 from "../assets/projects/pp.png";

export const HERO_CONTENT = `I build practical, scalable software with a focus on backend systems, APIs, and modern web applications. My work combines Python, Go, React, and modern development tools to turn ideas into reliable, usable products.`;

export const ABOUT_TEXT = `I'm a developer who enjoys understanding how software works beneath the surface and building things that are useful in the real world. My primary focus is backend and full-stack development, with particular interest in APIs, system design, databases, developer tools, and automation.

I started my development journey with a BCA and have continued expanding my skills through hands-on projects and an MCA. I learn by building, experimenting, and solving practical problems rather than simply following tutorials.

Today, I work primarily with Python and Go on the backend while using React and modern web technologies to build complete applications. I'm particularly interested in writing clean, maintainable software and continuously exploring better ways to build it.`;

export const PROJECTS = [
	{
		title: "LinkPulse",
		image: project1,
		description:
			"A concurrent website monitoring service built with Go that periodically checks endpoints, records availability and response-time metrics, and exposes a REST API for managing monitors.",
		technologies: ["Go", "SQLite", "REST API", "Docker"],
		github: "https://github.com/yashG0/linkpulse-website-monitoring-tool",
		live: null,
	},
	{
		title: "Smart Batch PDF Toolkit",
		image: project2,
		description:
			"A local-first document processing toolkit for batch PDF and image operations, designed to simplify repetitive file-processing workflows through a Streamlit interface.",
		technologies: [
			"Python",
			"Streamlit",
			"Pillow",
			"PyMuPDF",
			"SQLite",
			"img2pdf",
		],
		github: "https://github.com/yashG0/Smart-Batch-Converter-PDF-Image-Processing-GUI",
		live: null,
	},
	{
		title: "Job Application Tracker",
		image: project3,
		description:
			"A web application for organizing the job search lifecycle, allowing users to track applications, hiring stages, and application history through a lightweight server-rendered interface.",
		technologies: [
			"FastAPI",
			"PostgreSQL",
			"Pydantic",
			"SQLAlchemy(Async)",
		],
		github: "https://github.com/yashG0/job-application-tracker",
		live: null,
	},
	{
		title: "Personal Portfolio",
		image: project4,
		description:
			"A personal portfolio website showcasing projects, skills, and contact information.",
		technologies: ["Javascript", "React", "TailwindCSS", "Motion Framer"],
		github: "https://github.com/yashG0/serious-portfolio-app",
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