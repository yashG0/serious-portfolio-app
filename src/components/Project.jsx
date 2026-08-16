import { PROJECTS } from "../../constants/index.js";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

export const Project = () => {
	return (
		<section className="border-b border-neutral-900 py-20">
			<div className="mx-auto max-w-5xl px-4">
				{/* HEADER */}
				<motion.div
					initial={{ opacity: 0, y: 25 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-14"
				>
					<p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
						03 / Projects
					</p>

					<h2 className="text-4xl font-light tracking-tight sm:text-5xl">
						Things I've{" "}
						<span className="text-neutral-500">built.</span>
					</h2>

					<p className="mt-4 max-w-xl text-sm leading-6 text-neutral-500">
						A selection of applications and tools I&apos;ve built
						while exploring backend systems, web development, and
						automation.
					</p>
				</motion.div>

				{/* PROJECT LIST */}
				<div className="divide-y divide-neutral-900">
					{PROJECTS.map((project, index) => (
						<motion.article
							key={project.title}
							initial={{ opacity: 0, y: 25 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: index * 0.08,
							}}
							className="group py-8 first:pt-0 last:pb-0"
						>
							<div className="grid gap-7 md:grid-cols-[80px_1fr_280px] md:items-center">
								{/* NUMBER */}
								<div className="hidden md:block">
									<span className="text-sm tracking-widest text-neutral-600">
										{String(index + 1).padStart(2, "0")}
									</span>
								</div>

								{/* PROJECT INFO */}
								<div>
									<div className="mb-2 flex items-center gap-3">
										<span className="text-xs text-neutral-600 md:hidden">
											{String(index + 1).padStart(2, "0")}
										</span>

										<h3 className="text-xl font-medium tracking-tight text-neutral-200 transition-colors duration-300 group-hover:text-white sm:text-2xl">
											{project.title}
										</h3>

										{project.github && (
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={`View ${project.title} on GitHub`}
												className="text-neutral-600 transition-colors hover:text-neutral-200"
											>
												<FiGithub />
											</a>
										)}
									</div>

									<p className="mb-4 max-w-2xl text-sm leading-6 text-neutral-500">
										{project.description}
									</p>

									{/* TECHNOLOGIES */}
									<div className="flex flex-wrap gap-2">
										{project.technologies.map(
											(technology) => (
												<span
													key={technology}
													className="rounded-full border border-neutral-800 px-2.5 py-1 text-[11px] text-neutral-500 transition-colors duration-300 group-hover:border-neutral-700 group-hover:text-neutral-400"
												>
													{technology}
												</span>
											),
										)}
									</div>

									{/* LIVE LINK */}
									{project.live && (
										<a
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
											className="mt-4 inline-flex items-center gap-1 text-xs text-neutral-500 transition-colors hover:text-white"
										>
											View project
											<FiArrowUpRight />
										</a>
									)}
								</div>

								{/* COMPACT IMAGE */}
								<div className="relative h-44 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
									<img
										src={project.image}
										alt={`${project.title} project preview`}
										className="h-full w-full object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
									/>

									<div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

									<div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 text-neutral-300 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
										<FiArrowUpRight />
									</div>
								</div>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
};
