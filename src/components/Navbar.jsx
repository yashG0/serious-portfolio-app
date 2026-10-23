import { FaGithub, FaHackerrank, FaLinkedinIn } from "react-icons/fa";

const links = [
	{ label: "About", href: "#about" },
	{ label: "Projects", href: "#projects" },
];

export function Navbar() {
	return (
		<nav
			className="sticky top-2 z-50 mx-auto mb-6 flex w-full max-w-6xl items-center justify-between gap-1 rounded-full border border-neutral-800/90 bg-black/65 px-2 py-2 shadow-lg shadow-black/20 backdrop-blur-xl sm:top-4 sm:mb-8 sm:gap-2 sm:px-5 sm:py-2.5"
			aria-label="Main navigation"
		>
			<a href="#home" className="flex shrink-0 items-center gap-2.5" aria-label="Yash Gaurkar home">
				<img src="/favicon.svg" alt="" aria-hidden="true" className="h-9 w-9" />
				<span className="hidden text-sm font-medium tracking-wide text-neutral-200 sm:inline">Yash Gaurkar</span>
			</a>

			<div className="hidden items-center gap-1 rounded-full border border-neutral-800/70 bg-neutral-950/60 p-1 md:flex">
				{links.map((link) => (
					<a key={link.href} href={link.href} className="rounded-full px-4 py-2 text-xs text-neutral-400 transition-colors hover:bg-neutral-800/70 hover:text-white">
						{link.label}
					</a>
				))}
			</div>
			<div className="flex items-center gap-0.5 md:hidden">
				{links.map((link) => (
					<a key={link.href} href={link.href} className="rounded-full px-2.5 py-2 text-[11px] text-neutral-400 transition-colors hover:bg-neutral-800/70 hover:text-white sm:px-3 sm:text-xs">
						{link.label}
					</a>
				))}
			</div>

			<div className="flex items-center gap-1.5 sm:gap-2">
				<div className="hidden items-center gap-1 border-r border-neutral-800 pr-2 sm:flex lg:gap-1.5 lg:pr-3">
					<a href="https://www.linkedin.com/in/yash-gaurkar-a897b3228/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-800 hover:text-white">
						<FaLinkedinIn className="text-sm" />
					</a>
					<a href="https://github.com/yashG0" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-800 hover:text-white">
						<FaGithub className="text-sm" />
					</a>
					<a href="https://www.hackerrank.com/profile/yashgaurkar0" target="_blank" rel="noreferrer" aria-label="HackerRank" className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-800 hover:text-white">
						<FaHackerrank className="text-sm" />
					</a>
				</div>
				<a href="#contact" className="inline-flex shrink-0 items-center gap-1 rounded-full bg-neutral-100 px-3 py-2.5 text-[11px] font-medium text-neutral-950 transition-colors hover:bg-white sm:gap-2 sm:px-5 sm:text-xs">
					<span className="sm:hidden">Contact</span><span className="hidden sm:inline">Let&apos;s talk</span><span aria-hidden="true">↗</span>
				</a>
			</div>
		</nav>
	);
}
