import {
	FaDocker,
	FaGitAlt,
	FaGithub,
	FaJs,
	FaLinux,
	FaPython,
	FaReact,
} from "react-icons/fa";
import {
	SiFastapi,
	SiGo,
	SiPostgresql,
	SiPydantic,
	SiSqlite,
	SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";

const categories = [
	{
		title: "Languages",
		description: "The languages I use to build software.",
		items: [
			{ name: "Python", icon: FaPython },
			{ name: "Go", icon: SiGo },
			{ name: "JavaScript", icon: FaJs },
			{ name: "SQL", icon: SiPostgresql },
		],
	},
	{
		title: "Backend",
		description: "APIs, data, and application architecture.",
		items: [
			{ name: "FastAPI", icon: SiFastapi },
			{ name: "Pydantic", icon: SiPydantic },
			{ name: "PostgreSQL", icon: SiPostgresql },
			{ name: "SQLite", icon: SiSqlite },
		],
	},
	{
		title: "Frontend",
		description: "Interfaces focused on clarity and usability.",
		items: [
			{ name: "React", icon: FaReact },
			{ name: "Tailwind CSS", icon: SiTailwindcss },
			{ name: "JavaScript", icon: FaJs },
		],
	},
	{
		title: "Tools & Infrastructure",
		description: "Tools I use to build, test, and ship software.",
		items: [
			{ name: "Git", icon: FaGitAlt },
			{ name: "GitHub", icon: FaGithub },
			{ name: "Docker", icon: FaDocker },
			{ name: "Linux", icon: FaLinux },
		],
	},
];

export const Technologies = () => {
	return (
		<section className="border-b border-neutral-900 py-20">
			<div className="mx-auto max-w-6xl px-4">
				{/* HEADER */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-14"
				>
					<p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
						02 / Skills
					</p>

					<h2 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
						Tools I use to{" "}
						<span className="text-neutral-500">build.</span>
					</h2>

					<p className="mt-5 max-w-2xl text-neutral-500">
						A focused set of technologies I use across backend
						systems, web applications, databases, and development
						infrastructure.
					</p>
				</motion.div>

				{/* SKILL GRID */}
				<div className="grid gap-5 md:grid-cols-2">
					{categories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: categoryIndex * 0.1,
							}}
							className="group rounded-2xl border border-neutral-800 bg-neutral-950/40 p-7 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/40"
						>
							{/* CATEGORY HEADER */}
							<div className="mb-7 flex items-start justify-between">
								<div>
									<h3 className="text-xl font-medium text-neutral-200">
										{category.title}
									</h3>

									<p className="mt-2 text-sm text-neutral-500">
										{category.description}
									</p>
								</div>

								<span className="text-sm text-neutral-700">
									0{categoryIndex + 1}
								</span>
							</div>

							{/* SKILLS */}
							<div className="grid grid-cols-2 gap-3">
								{category.items.map((item) => {
									const Icon = item.icon;

									return (
										<div
											key={item.name}
											className="flex items-center gap-3 rounded-xl border border-neutral-800/80 px-4 py-3 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900"
										>
											<Icon className="text-2xl text-neutral-400 transition-colors duration-300 group-hover:text-neutral-200" />

											<span className="text-sm text-neutral-400">
												{item.name}
											</span>
										</div>
									);
								})}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
