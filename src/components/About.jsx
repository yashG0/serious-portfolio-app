import { motion } from "framer-motion";
import { EDUCATION, PROFILE } from "../../constants";
import PROFILE_PIC from "../../assets/picture/mypic.webp";

export const About = () => {
	return (
		<section id="about" className="scroll-mt-24 border-b border-neutral-900 py-10 sm:py-20">
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
						01 / About
					</p>

					<h2 className="text-4xl font-light leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
						A little about{" "}
						<span className="text-neutral-500">me.</span>
					</h2>
				</motion.div>

				{/* MAIN GRID */}
				<div className="grid gap-6 lg:grid-cols-5">
					{/* PROFILE */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="group relative rounded-3xl border border-neutral-800/80 bg-neutral-950/55 p-5 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)] transition-colors duration-300 hover:border-neutral-700 sm:p-7 lg:col-span-3 lg:p-8"
					>
						<div className="mb-10">
							<div className="mb-6 flex items-center justify-between gap-4">
								<div className="flex items-center gap-3">
									<span className="h-2 w-2 rounded-full bg-emerald-400" />

									<span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
										Developer / Builder
									</span>
								</div>

								<img
									src={PROFILE_PIC}
									alt="Yash Gaurkar"
									width="320"
									height="320"
									loading="lazy"
									decoding="async"
									className="h-12 w-12 rounded-full border border-neutral-700 object-cover object-[center_32%] opacity-90 ring-4 ring-neutral-900/70"
								/>
							</div>

							<h3 className="max-w-xl text-[1.75rem] font-light leading-[1.12] tracking-[-0.04em] text-neutral-100 sm:text-[2.15rem]">
								I build software that{" "}
								<span className="text-neutral-500">
									solves real problems.
								</span>
							</h3>

							<p className="mt-6 max-w-xl text-[0.95rem] leading-7 text-neutral-400">
								I&apos;m a developer focused on backend and
								full-stack development, with a strong interest
								in APIs, databases, developer tools, and
								practical software.
							</p>
						</div>

						{/* PROFILE POINTS */}
						<div className="divide-y divide-neutral-900 border-t border-neutral-900">
							{PROFILE.map((item, index) => (
								<motion.div
									key={item.label}
									initial={{ opacity: 0, y: 15 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.4,
										delay: index * 0.1,
									}}
									className="grid grid-cols-[30px_1fr] gap-x-3 gap-y-1 py-3 sm:grid-cols-[50px_160px_1fr] sm:gap-4 sm:py-5"
								>
									<span className="text-xs text-neutral-700">
										{item.label}
									</span>

									<h4 className="text-sm font-medium text-neutral-300">
										{item.title}
									</h4>

									<p className="col-span-2 text-[0.825rem] leading-5 text-neutral-400 sm:col-span-1 sm:text-[0.875rem] sm:leading-6">
										{item.description}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* EDUCATION */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="relative overflow-hidden rounded-3xl border border-neutral-800/80 bg-neutral-950/55 p-5 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)] sm:p-7 lg:col-span-2 lg:p-8"
					>
						<div className="mb-10">
							<p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
								Education
							</p>

							<h3 className="mt-2 text-2xl font-light leading-tight tracking-[-0.03em] text-neutral-100">
								Academic Background
							</h3>
						</div>

						<div className="space-y-6 sm:space-y-8">
							{EDUCATION.map((item, index) => (
								<motion.div
									key={item.degree}
									initial={{ opacity: 0, y: 15 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.4,
										delay: index * 0.15,
									}}
									className="group relative border-l border-neutral-800 pl-6"
								>
									<div className="absolute -left-1.25 top-1 h-2 w-2 rounded-full bg-neutral-700 ring-4 ring-neutral-950 transition-colors group-hover:bg-emerald-400" />

									<p className="mb-2 text-xs uppercase tracking-wider text-neutral-600">
										{item.period}
									</p>

									<h4 className="text-base font-medium text-neutral-200">
										{item.degree}
									</h4>

									<p className="mt-1 text-sm text-neutral-500">
										{item.institution}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
