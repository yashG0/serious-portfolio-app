import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiMail } from "react-icons/fi";
import PROFILE_PIC from "../../assets/Designer (1).jpeg";

const fadeUp = (delay = 0) => ({
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			delay,
			ease: "easeOut",
		},
	},
});

export const Hero = () => {
	return (
		<section className="relative overflow-hidden border-b border-neutral-900">
			<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">

				{/* HERO */}
				<div className="grid min-h-[calc(100svh-80px)] items-start gap-14 pb-16 pt-16 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pt-20">

					{/* LEFT */}
					<div className="lg:pt-6">

						{/* LABEL */}
						<motion.div
							variants={fadeUp(0.1)}
							initial="hidden"
							animate="visible"
							className="mb-6 flex items-center gap-3"
						>
							<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />

							<span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 sm:text-[11px] sm:tracking-[0.3em]">
								Full-Stack Developer · Backend
							</span>
						</motion.div>

						{/* NAME */}
						<motion.h1
							variants={fadeUp(0.2)}
							initial="hidden"
							animate="visible"
							className="text-5xl font-light leading-[0.95] tracking-[-0.045em] text-neutral-100 sm:text-6xl md:text-7xl lg:text-[6rem]"
						>
							Yash{" "}
							<span className="text-neutral-500">
								Gaurkar.
							</span>
						</motion.h1>

						{/* SUBTITLE */}
						<motion.h2
							variants={fadeUp(0.32)}
							initial="hidden"
							animate="visible"
							className="mt-6 max-w-xl bg-linear-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text text-xl font-light leading-snug tracking-tight text-transparent sm:mt-7 sm:text-2xl lg:text-3xl"
						>
							Building reliable software for the modern web.
						</motion.h2>

						{/* DESCRIPTION */}
						<motion.p
							variants={fadeUp(0.44)}
							initial="hidden"
							animate="visible"
							className="mt-5 max-w-lg text-sm leading-6 text-neutral-500 sm:text-base sm:leading-7"
						>
							I build APIs, backend systems, developer tools,
							and modern web applications with a focus on
							practical engineering and clean software.
						</motion.p>

						{/* ACTIONS */}
						<motion.div
							variants={fadeUp(0.56)}
							initial="hidden"
							animate="visible"
							className="mt-7 flex flex-wrap gap-3"
						>
							<a
								href="https://github.com/yashG0"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-5 py-2.5 text-sm text-neutral-300 transition-all duration-300 hover:border-neutral-500 hover:bg-neutral-900 hover:text-white"
							>
								<FiGithub />
								GitHub
							</a>

							<a
								href="mailto:yashgaurkar0@gmail.com"
								className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-5 py-2.5 text-sm text-neutral-900 transition-all duration-300 hover:bg-white"
							>
								<FiMail />
								Get in touch
							</a>
						</motion.div>

						{/* STACK */}
						<motion.div
							variants={fadeUp(0.68)}
							initial="hidden"
							animate="visible"
							className="mt-8 flex max-w-xl flex-wrap gap-x-5 gap-y-3 border-t border-neutral-900 pt-5 text-[9px] uppercase tracking-[0.2em] text-neutral-600 sm:text-[10px]"
						>
							<span>Python</span>
							<span>Go</span>
							<span>FastAPI</span>
							<span>React</span>
							<span>PostgreSQL</span>
						</motion.div>
					</div>

					{/* RIGHT / IMAGE */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.35,
							ease: "easeOut",
						}}
						className="flex justify-center lg:justify-end"
					>
						<div className="relative w-full max-w-[330px] sm:max-w-[360px] lg:max-w-[390px]">

							{/* GLOW */}
							<div className="absolute -inset-10 rounded-full bg-purple-500/[0.06] blur-3xl" />

							{/* IMAGE */}
							<div className="relative overflow-hidden rounded-[1.75rem] border border-neutral-800 bg-neutral-950">
								<img
									src={PROFILE_PIC}
									alt="Portrait of Yash Gaurkar"
									className="relative z-10 aspect-[4/5] w-full object-cover grayscale-[15%] opacity-90 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
								/>

								<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
							</div>

							{/* LOCATION */}
							<div className="absolute -bottom-4 -left-3 z-30 rounded-xl border border-neutral-800 bg-neutral-950/95 px-4 py-3 shadow-xl sm:-left-4">
								<p className="text-[8px] uppercase tracking-[0.2em] text-neutral-600">
									Based in
								</p>

								<p className="mt-1 text-xs text-neutral-300">
									Nagpur, India
								</p>
							</div>
						</div>
					</motion.div>
				</div>

				{/* SCROLL INDICATOR */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.3, duration: 0.7 }}
					className="hidden items-center gap-3 pb-6 text-[10px] uppercase tracking-[0.25em] text-neutral-700 lg:flex"
				>
					<FiArrowDown className="animate-bounce" />
					<span>Scroll to explore</span>
				</motion.div>
			</div>
		</section>
	);
};