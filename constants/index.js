import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `A passionate full-stack developer dedicated to building modern, scalable, and user-friendly web applications. With expertise in cutting-edge technologies like React, FastAPI, and MongoDB, I bring ideas to life with efficient and innovative solutions. Let’s create something extraordinary together!`;

export const ABOUT_TEXT = `Hi, I’m Yash, a motivated and passionate Full-Stack Developer with a strong foundation in building scalable and efficient web applications. As a BCA graduate, I have gained hands-on experience through multiple personal and academic projects, developing expertise in both front-end and back-end development.

My journey as a developer has been fueled by curiosity and continuous learning. I’ve completed various certification courses that have honed my skills in FastAPI, React, Express, and modern database management systems.`;


export const PROJECTS = [
	{
		title: "E-Commerce Website",
		image: project1,
		description:
			"A fully functional e-commerce website with features like product listing, shopping cart, order summery and user authentication.",
		technologies: ["HTML", "React", "Tailwindcss", "Python", "FastApi", "SqLite"],
	},
	{
		title: "Task Management App",
		image: project2,
		description:
			"An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
		technologies: ["HTML", "CSS", "React", "Firebase"],
	},
	{
		title: "Portfolio Website",
		image: project3,
		description:
			"A personal portfolio website showcasing projects, skills, and contact information.",
		technologies: ["HTML", "TailwindCSS", "React", "Motion Framer"],
	},
	{
		title: "Blogging Platform",
		image: project4,
		description:
			"A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
		technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
	},
];

export const CONTACT = {
	address: "Nagpur, India",
	phoneNo: "+91 8766529209",
	email: "yashgaurkar0@gmail.com",
};
