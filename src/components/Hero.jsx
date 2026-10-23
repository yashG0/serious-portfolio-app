import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiMail } from "react-icons/fi";
import resonancePreview from "../../assets/projects/resonance-pic-1.webp";

const fadeUp = (delay = 0) => ({
	hidden: { opacity: 0, y: 18 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, delay, ease: "easeOut" },
	},
});

export const Hero = () => {
	return (
		<section id="home" className="relative scroll-mt-20 border-b border-neutral-900">
			<div className="mx-auto grid min-h-[calc(100svh-64px)] max-w-6xl items-center gap-7 px-3 py-8 sm:min-h-[calc(100svh-88px)] sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.92fr] lg:gap-14 lg:px-8">
				<div className="relative max-w-xl">
					<motion.div
						variants={fadeUp(0.05)}
						initial="hidden"
						animate="visible"
						className="mb-7 flex items-center gap-3"
					>
						<span className="h-px w-8 bg-emerald-400/80" />
						<span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400 sm:text-[11px]">
							Full-stack developer · Backend
						</span>
					</motion.div>

					<motion.h1
						variants={fadeUp(0.12)}
						initial="hidden"
						animate="visible"
						className="text-[clamp(2.6rem,11vw,4rem)] font-light leading-none tracking-[-0.065em] text-neutral-100 sm:whitespace-nowrap sm:text-6xl lg:text-[3.65rem] xl:text-[4rem]"
					>
						Yash <span className="text-neutral-400">Gaurkar</span><span className="text-emerald-400">.</span>
					</motion.h1>

					<motion.h2
						variants={fadeUp(0.2)}
						initial="hidden"
						animate="visible"
						className="mt-6 max-w-md text-[1.35rem] font-normal leading-snug tracking-[-0.035em] text-neutral-100 sm:text-[1.65rem]"
					>
						I build developer tools and useful software.
					</motion.h2>

					<motion.p
						variants={fadeUp(0.28)}
						initial="hidden"
						animate="visible"
						className="mt-4 max-w-md text-[0.925rem] leading-7 text-neutral-400 sm:text-base"
					>
						From backend systems and APIs to desktop clients, I build software around practical problems.
					</motion.p>

					<motion.div
						variants={fadeUp(0.36)}
						initial="hidden"
						animate="visible"
						className="mt-8 flex flex-wrap items-center gap-3"
					>
						<a
							href="#projects"
							className="group inline-flex items-center gap-2 rounded-full bg-neutral-100 px-5 py-3 text-sm font-medium text-neutral-950 transition-colors hover:bg-white"
						>
							Explore selected work
							<FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
						</a>
						<a
							href="mailto:yashgaurkar0@gmail.com"
							className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-5 py-3 text-sm text-neutral-300 transition-colors hover:border-neutral-600 hover:bg-neutral-900"
						>
							<FiMail />
							Get in touch
						</a>
					</motion.div>

					<motion.div
						variants={fadeUp(0.44)}
						initial="hidden"
						animate="visible"
						className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-neutral-500"
					>
						<span>Nagpur, India</span>
						<span aria-hidden="true" className="text-neutral-700">/</span>
						<span>Backend systems</span>
						<span aria-hidden="true" className="text-neutral-700">/</span>
						<span>APIs &amp; developer tools</span>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, x: 18 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.65, delay: 0.18, ease: "easeOut" }}
					className="relative isolate mx-auto w-full max-w-lg lg:justify-self-end"
				>
					<div aria-hidden="true" className="pointer-events-none absolute -inset-5 z-0 rounded-[2rem] bg-emerald-400/[0.045] blur-2xl sm:-inset-8" />
					<a
						href="https://github.com/yashG0/resonance-api-testing-platform"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="View Resonance API testing platform on GitHub"
						className="group relative z-10 block overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0c0d0f]/95 shadow-[0_32px_100px_-48px_rgba(0,0,0,0.95)] ring-1 ring-white/[0.04] transition-all duration-300 hover:border-emerald-300/30 hover:shadow-[0_36px_110px_-48px_rgba(16,185,129,0.22)]"
					>
						<div className="hidden h-12 items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-4 sm:flex">
							<div className="flex items-center gap-1.5" aria-hidden="true">
								<span className="h-2 w-2 rounded-full bg-neutral-700" />
								<span className="h-2 w-2 rounded-full bg-neutral-700" />
								<span className="h-2 w-2 rounded-full bg-neutral-700" />
							</div>
							<span className="min-w-0 flex-1 truncate text-center font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400">
								Resonance <span className="text-neutral-700">/</span> Desktop client
							</span>
							<span className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/[0.04] px-2.5 py-1 text-[8px] font-medium uppercase tracking-[0.12em] text-emerald-300/80">
								<span className="h-1 w-1 rounded-full bg-emerald-400" />
								Offline-first
							</span>
						</div>
						<div className="bg-[#08090a] p-1.5 sm:p-2.5">
							<img
								src={resonancePreview}
								alt="Resonance desktop API testing client interface"
								width="1400"
								height="764"
								fetchPriority="high"
								decoding="async"
								className="aspect-[1.83/1] w-full rounded-lg border border-white/[0.06] object-contain object-center transition-transform duration-700 group-hover:scale-[1.005] sm:rounded-xl"
							/>
						</div>
						<div className="flex items-center justify-between gap-4 border-t border-white/[0.06] bg-linear-to-r from-white/[0.035] to-transparent px-4 py-3.5 sm:px-5">
							<div>
								<p className="text-sm font-medium tracking-[-0.02em] text-neutral-100">Resonance</p>
								<p className="mt-1 text-[11px] text-neutral-500 sm:text-xs">
									Rust · Slint · SQLite
								</p>
							</div>
							<span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-3 py-2 text-[11px] font-medium text-neutral-300 transition-all group-hover:border-emerald-300/25 group-hover:bg-emerald-300/[0.06] group-hover:text-white">
								Explore <FiArrowUpRight className="text-emerald-300" />
							</span>
						</div>
					</a>
					<p className="mt-2 flex items-center justify-end gap-2 text-[9px] uppercase tracking-[0.16em] text-neutral-600">
						<span className="h-1 w-1 rounded-full bg-emerald-400/70" />
						01 / Featured work
					</p>
				</motion.div>
			</div>
		</section>
	);
};
