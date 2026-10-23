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
		<section className="scroll-mt-24 border-b border-neutral-900 py-10 sm:py-20">
			<div className="mx-auto max-w-6xl px-1 sm:px-4">
				{/* HEADER */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-8 sm:mb-14"
				>
					<p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
						02 / Skills
					</p>

					<h2 className="text-4xl font-light leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
						Tools I use to{" "}
						<span className="text-neutral-500">build.</span>
					</h2>

					<p className="mt-5 max-w-2xl text-[0.95rem] leading-7 text-neutral-400">
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
							className="group rounded-3xl border border-neutral-800/80 bg-neutral-950/55 p-4 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 hover:bg-neutral-900/65 sm:p-7"
						>
							{/* CATEGORY HEADER */}
							<div className="mb-7 flex items-start justify-between">
								<div>
										<h3 className="text-lg font-medium tracking-[-0.02em] text-neutral-100">
										{category.title}
									</h3>

									<p className="mt-2 text-[0.875rem] leading-6 text-neutral-400">
										{category.description}
									</p>
								</div>

								<span className="text-sm text-neutral-700">
									0{categoryIndex + 1}
								</span>
							</div>

							{/* SKILLS */}
							<div className="grid grid-cols-2 gap-2 sm:gap-3">
								{category.items.map((item) => {
									const Icon = item.icon;

									return (
										<div
											key={item.name}
											className="flex min-w-0 items-center gap-2 rounded-xl border border-neutral-800/70 bg-black/20 px-2.5 py-2.5 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/[0.04] sm:gap-3 sm:px-4 sm:py-3"
										>
											<Icon className="shrink-0 text-xl text-neutral-400 transition-colors duration-300 group-hover:text-neutral-200 sm:text-2xl" />

											<span className="truncate text-[12px] text-neutral-400 sm:text-sm">
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
