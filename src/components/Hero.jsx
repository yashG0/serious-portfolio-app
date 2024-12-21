import {HERO_CONTENT} from "../../constants/index.js";
import PROFILE_PIC from "../../assets/kevinRushProfile.jpg";
import {motion} from "framer-motion";

const container = (delay) => (
	{
		hidden: {x: -100, opacity: 0},
		visible: {
			x: 0,
			opacity: 1,
			transition: {duration: 0.5, delay: delay}
		}
	}
)

export const Hero = () => {
	return (
		<>
			<div className={"border-b border-neutral-900 pb-4 lg:mb-36"}>
				<div className={"flex flex-wrap"}>

					{/* HERO LEFT-HAND TEXT CONTAINER*/}
					<div className={"w-full lg:w-1/2"}>
						<div className={"flex flex-col items-center lg:items-start"}>

							{/* HERO TITLE */}
							<motion.h1 variants={container(0.75)}
							           initial="hidden"
							           animate="visible"
							           className={"pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"}>
								Yash Gaurkar
							</motion.h1>

							{/*	HERO S DESCRIPTION*/}
							<motion.span variants={container(1)}
							             initial="hidden"
							             animate="visible"
							             className={"bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"}>
								Full Stack Web Developer
							</motion.span>

							{/* HERO F DESCRIPTION*/}
							<motion.p variants={container(1.25)}
							          initial="hidden"
							          animate="visible"
							          className={"my-2 max-w-xl py-6 font-light"}>{HERO_CONTENT}</motion.p>
						</div>
					</div>

					{/* HERO RIGHT-HAND IMAGE CONTAINER	*/}
					<div className={"w-full lg:w-1/2 lg:p-8"}>
						<div className={"flex justify-center"}>
							<motion.img initial={{x: 100, opacity: 0}} animate={{x: 0, opacity: 1}}
							            transition={{duration: 1, delay: 1.25}}
							            src={PROFILE_PIC}
							            alt={"profile picture"}/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}