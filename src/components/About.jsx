import ABOUT_IMG from "../../assets/Designer.jpeg"
import {ABOUT_TEXT} from "../../constants/index.js"
import {motion} from "framer-motion";

export const About = () => {
	return (
		<>
			<div className={"border-b border-neutral-900 pb-4"}>

				{/*ABOUT TITLE*/}
				<h2 className={"my-20 text-center text-4xl"}>About <span className={"text-neutral-500 "}>Me</span></h2>
				<div className={"flex flex-wrap"}>
					<motion.div
						whileInView={{x: 0, opacity: 1}}
						initial={{x: -100, opacity: 0}}
						transition={{duration: 0.5}}
						className={"w-full lg:w-1/2 lg:p-8"}
					>
						{/* ABOUT IMAGE */}
						<div className={"flex items-center justify-center"}>
							<img className={"rounded-2xl w-2/3"} src={ABOUT_IMG} alt="about image"/>
						</div>
					</motion.div>

					{/* ABOUT PARAGRAPH */}
					<motion.div
						whileInView={{opacity: 1, x: 0}}
						initial={{opacity: 0, x: 100}}
						transition={{duration: 0.5}}
						className={"w-full lg:w-1/2"}
					>
						<div className={"flex items-center lg:justify-center"}>
							<p className={"my-2 max-w-xl py-6"}>{ABOUT_TEXT}</p>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	)
}