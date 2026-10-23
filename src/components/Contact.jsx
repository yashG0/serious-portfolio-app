import { CONTACT } from "../../constants/index.js";
import { motion } from "framer-motion";
import {
	FiArrowUpRight,
	FiGithub,
	FiLinkedin,
	FiMail,
} from "react-icons/fi";

export const Contact = () => {
	return (
		<section id="contact" className="scroll-mt-24 border-b border-neutral-900 py-12 sm:py-24">
			<div className="mx-auto max-w-5xl px-1 sm:px-4">

				{/* HEADER */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-8 sm:mb-16"
				>
					<p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
						04 / Contact
					</p>

					<h2 className="max-w-3xl text-4xl font-light leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
						Let's build something{" "}
						<span className="text-neutral-500">useful.</span>
					</h2>

					<p className="mt-6 max-w-xl text-[0.95rem] leading-7 text-neutral-400">
						Have an idea, project, or opportunity worth discussing?
						Feel free to reach out. I'm always interested in building
						interesting software.
					</p>
				</motion.div>

				{/* CONTACT GRID */}
				<div className="grid gap-4 md:grid-cols-2">

					{/* EMAIL */}
					<motion.a
						href={`mailto:${CONTACT.email}`}
						initial={{ opacity: 0, y: 25 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="group rounded-3xl border border-neutral-800/80 bg-neutral-950/55 p-5 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 hover:bg-neutral-900/65 sm:p-7"
					>
						<div className="mb-6 flex items-center justify-between sm:mb-10">
							<div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800">
								<FiMail className="text-neutral-400" />
							</div>

							<FiArrowUpRight className="text-neutral-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neutral-300" />
						</div>

						<p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-600">
							Email
						</p>

						<p className="break-all text-sm text-neutral-300 sm:text-base">
							{CONTACT.email}
						</p>
					</motion.a>

					{/* LOCATION */}
					<motion.div
						initial={{ opacity: 0, y: 25 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="rounded-3xl border border-neutral-800/80 bg-neutral-950/55 p-5 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)] sm:p-7"
					>
						<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 sm:mb-10">
							<span className="h-2 w-2 rounded-full bg-emerald-400" />
						</div>

						<p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-600">
							Based in
						</p>

						<p className="text-base text-neutral-300">
							{CONTACT.address}
						</p>
					</motion.div>
				</div>

				{/* SOCIAL LINKS */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mt-7 flex flex-wrap items-center gap-5 sm:mt-10 sm:gap-6"
				>
					<a
						href="https://github.com/yashG0"
						target="_blank"
						rel="noopener noreferrer"
						className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-200"
					>
						<FiGithub />
						GitHub
						<FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
					</a>

					<a
						href="https://www.linkedin.com/in/yash-gaurkar-a897b3228/"
						target="_blank"
						rel="noopener noreferrer"
						className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-200"
					>
						<FiLinkedin />
						LinkedIn
						<FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
					</a>
				</motion.div>

				{/* FOOTER */}
				<div className="mt-10 flex flex-col gap-2 border-t border-neutral-900 pt-5 text-[11px] text-neutral-600 sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:pt-6">
					<span>© {new Date().getFullYear()} Yash Gaurkar</span>

					<span>Built with React, Tailwind CSS & Framer Motion</span>
				</div>
			</div>
		</section>
	);
};
