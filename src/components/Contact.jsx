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
		<section className="border-b border-neutral-900 py-24">
			<div className="mx-auto max-w-5xl px-4">

				{/* HEADER */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16"
				>
					<p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
						04 / Contact
					</p>

					<h2 className="max-w-3xl text-5xl font-light leading-tight tracking-tight sm:text-6xl lg:text-7xl">
						Let's build something{" "}
						<span className="text-neutral-500">useful.</span>
					</h2>

					<p className="mt-6 max-w-xl text-base leading-7 text-neutral-500">
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
						className="group rounded-2xl border border-neutral-800 bg-neutral-950/40 p-7 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/40"
					>
						<div className="mb-10 flex items-center justify-between">
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
						className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-7"
					>
						<div className="mb-10 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800">
							<span className="h-2 w-2 rounded-full bg-green-400" />
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
					className="mt-10 flex flex-wrap items-center gap-6"
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
				<div className="mt-20 flex flex-col gap-3 border-t border-neutral-900 pt-6 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
					<span>© {new Date().getFullYear()} Yash Gaurkar</span>

					<span>Built with React, Tailwind CSS & Framer Motion</span>
				</div>
			</div>
		</section>
	);
};