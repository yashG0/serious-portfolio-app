import { motion } from "framer-motion";
import { EDUCATION, PROFILE } from "../../constants";

export const About = () => {
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
						01 / About
					</p>

					<h2 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
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
						className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8 lg:col-span-3"
					>
						<div className="mb-10">
							<div className="mb-5 flex items-center gap-3">
								<span className="h-2 w-2 rounded-full bg-green-400" />

								<span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
									Developer / Builder
								</span>
							</div>

							<h3 className="max-w-xl text-3xl font-light leading-tight text-neutral-100 sm:text-4xl">
								I build software that{" "}
								<span className="text-neutral-500">
									solves real problems.
								</span>
							</h3>

							<p className="mt-6 max-w-xl text-sm leading-7 text-neutral-500">
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
									className="grid grid-cols-[40px_1fr] gap-4 py-5 sm:grid-cols-[50px_160px_1fr]"
								>
									<span className="text-xs text-neutral-700">
										{item.label}
									</span>

									<h4 className="text-sm font-medium text-neutral-300">
										{item.title}
									</h4>

									<p className="col-span-2 text-sm leading-6 text-neutral-600 sm:col-span-1">
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
						className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8 lg:col-span-2"
					>
						<div className="mb-10">
							<p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
								Education
							</p>

							<h3 className="mt-2 text-2xl font-light text-neutral-200">
								Academic Background
							</h3>
						</div>

						<div className="space-y-8">
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
									className="relative border-l border-neutral-800 pl-6"
								>
									<div className="absolute -left-1.25 top-1 h-2 w-2 rounded-full bg-neutral-700" />

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
