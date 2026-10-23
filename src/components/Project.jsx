import { PROJECTS } from "../../constants/index.js";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";

export const Project = () => {
	return (
		<section id="projects" className="scroll-mt-24 border-b border-neutral-900 py-10 sm:py-20">
			<div className="mx-auto max-w-5xl px-1 sm:px-4">
				{/* HEADER */}
				<motion.div
					initial={{ opacity: 0, y: 25 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-8 sm:mb-14"
				>
					<p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
						03 / Projects
					</p>

					<h2 className="text-4xl font-light leading-[1.08] tracking-[-0.045em] sm:text-5xl">
						Things I've{" "}
						<span className="text-neutral-500">built.</span>
					</h2>

					<p className="mt-4 max-w-xl text-[0.95rem] leading-7 text-neutral-400">
						A selection of applications and tools I&apos;ve built
						while exploring backend systems, web development, and
						automation.
					</p>
				</motion.div>

				{/* PROJECT LIST */}
				<div className="grid gap-3 sm:gap-4">
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
							className="group rounded-2xl border border-neutral-800/80 bg-neutral-950/50 p-3.5 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-950/75 sm:rounded-3xl sm:p-5 lg:p-6"
						>
							<div className="grid grid-cols-[minmax(0,1fr)_76px] items-start gap-x-3 gap-y-4 min-[380px]:grid-cols-[minmax(0,1fr)_92px] sm:grid-cols-1 sm:gap-7 md:grid-cols-[48px_1fr_240px] lg:grid-cols-[80px_1fr_280px] md:items-center">
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

											<h3 className="min-w-0 text-lg font-medium leading-tight tracking-[-0.035em] text-neutral-100 transition-colors duration-300 group-hover:text-white sm:text-[1.4rem]">
											{project.title}
										</h3>

									</div>

									<p className="mb-3 max-w-2xl text-[0.875rem] leading-6 text-neutral-400 sm:mb-4 sm:text-[0.925rem] sm:leading-7">
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

									{/* PROJECT LINKS */}
									<div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-5">
										{project.live && (
											<a
												href={project.live}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={`Visit the live ${project.title} website`}
												className="inline-flex items-center gap-2 text-xs font-medium text-neutral-300 transition-colors hover:text-white"
											>
												<FiExternalLink className="text-neutral-500" />
												Live site
											</a>
										)}
										{project.github && (
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={`View ${project.title} source code on GitHub`}
												className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 transition-colors hover:text-white"
											>
												<FiGithub className="text-neutral-500" />
												Source
											</a>
										)}
									</div>
								</div>

								{/* COMPACT IMAGE */}
								<div className="relative col-start-2 row-start-1 h-24 w-[76px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 min-[380px]:w-[92px] sm:col-auto sm:row-auto sm:h-52 sm:w-full sm:rounded-2xl md:h-40 lg:h-44">
									{project.image ? (
										<img
											src={project.image}
											alt={`${project.title} project preview`}
											loading="lazy"
											decoding="async"
											className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
										/>
									) : (
										<div
											aria-label={`${project.title} preview`}
											className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-black"
										>
											<span className="font-mono text-6xl font-light tracking-[-0.12em] text-neutral-600 transition-colors duration-500 group-hover:text-neutral-300">
												{project.monogram}
											</span>
										</div>
									)}

									<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

									<div className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-black/50 text-neutral-300 opacity-100 backdrop-blur-sm transition-all duration-300 sm:bottom-3 sm:right-3 sm:h-8 sm:w-8 sm:opacity-0 sm:group-hover:opacity-100">
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
