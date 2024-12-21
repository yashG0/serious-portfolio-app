import {FaFacebook, FaGithub, FaHackerrank, FaLinkedinIn} from "react-icons/fa";

export function Navbar() {
	return (
		<>
			<nav className={"mb-20 flex items-center justify-between py-6"}>

				{/* PORTFOLIO TITLE */}
				<div className={"flex flex-shrink-0 items-center"}>
					<span
						className={"lg:text-5xl md:text-3xl text-2xl font-Nothing font-bold hover:text-white cursor-pointer"}>Yash Gaurkar</span>
				</div>

				{/*	PORTFOLIO SOCIAL ICONS */}
				<div className={"flex items-center justify-center gap-4 md:text-3xl text-2xl"}>
					<a href="https://www.linkedin.com/in/yash-gaurkar-a897b3228/" target="_blank" rel="noreferrer">
						<FaLinkedinIn className={"cursor-pointer hover:text-white"}/>
					</a>
					<a href="https://github.com/yashG0" target="_blank" rel="noreferrer">
						<FaGithub className={"cursor-pointer hover:text-white"}/>
					</a>
					<a href="#">
						<FaFacebook className={"cursor-pointer hover:text-white"}/>
					</a>
					<a href="https://www.hackerrank.com/profile/yashgaurkar0" target="_blank" rel="noreferrer">
						<FaHackerrank className={"cursor-pointer hover:text-white"}/>
					</a>
				</div>
			</nav>
		</>
	)
}