import {FaFacebook, FaGithub, FaHackerrank, FaLinkedinIn} from "react-icons/fa";

export function Navbar() {
	return (
		<>
			<nav className={"mb-20 flex items-center justify-between py-6"}>

				{/* PORTFOLIO TITLE */}
				<div className={"flex flex-shrink-0 items-center"}>
					<span className={"md:text-5xl text-3xl font-Nothing font-bold hover:text-white cursor-pointer"}>Yash Gaurkar</span>
				</div>

				{/*	PORTFOLIO SOCIAL ICONS */}
				<div className={"flex items-center justify-center gap-4 text-2xl"}>
					<FaLinkedinIn className={"cursor-pointer hover:text-white"}/>
					<FaGithub className={"cursor-pointer hover:text-white"}/>
					<FaFacebook className={"cursor-pointer hover:text-white"}/>
					<FaHackerrank className={"cursor-pointer hover:text-white"}/>
				</div>
			</nav>
		</>
	)
}