import {FaJs, FaNodeJs, FaPython, FaReact} from "react-icons/fa";
import {SiFastapi, SiMongodb, SiSqlite} from "react-icons/si";
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
	initial: {y: -10},
	animate: {
		y: [10, -10], transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
		}
	},
})

export const Technologies = () => {
	return (
		<>
			<div className={"border-b border-neutral-900 pb-4"}>
				<motion.h2 className={"my-20 text-center text-4xl"}
				           whileInView={{opacity: 1, y: 0}}
				           initial={{opacity: 0, y: -100}}
				           transition={{duration: 1.5}}
				>
					Technologies
				</motion.h2>
				<motion.div whileInView={{opacity: 1, x: 0}}
				            initial={{opacity: 0, x:-100}}
				            transition={{duration: 1.5}}
				            className={"flex flex-wrap items-center justify-center gap-4"}
				>
					<motion.div variants={iconVariants(2.5)}
					            initial={"initial"}
					            animate={"animate"}
					            className={"rounded-2xl border-4 border-neutral-700 p-4"}
					>
						<FaReact className={"text-7xl text-cyan-400"}/>
					</motion.div>
					<motion.div variants={iconVariants(3)}
					            initial={"initial"}
					            animate={"animate"}
					            className={"rounded-2xl border-4 border-neutral-700 p-4"}
					>
						<SiFastapi className={"text-7xl text-[#0D9A8E]"}/>
					</motion.div>
					<motion.div variants={iconVariants(3.5)}
					            initial={"initial"}
					            animate={"animate"}
					            className={"rounded-2xl border-4 border-neutral-700 p-4"}
					>
						<FaPython className={"text-7xl text-yellow-400"}/>
					</motion.div>
					<motion.div variants={iconVariants(4)}
					            initial={"initial"}
					            animate={"animate"}
					            className={"rounded-2xl border-4 border-neutral-700 p-4"}
					>
						<FaNodeJs className={"text-7xl text-green-400"}/>
					</motion.div>
					<motion.div variants={iconVariants(4.5)}
					            initial={"initial"}
					            animate={"animate"}
					            className={"rounded-2xl border-4 border-neutral-700 p-4"}
					>
						<FaJs className={"text-7xl text-yellow-500"}/>
					</motion.div>
					<motion.div variants={iconVariants(5)}
					            initial={"initial"}
					            animate={"animate"}
					            className={"rounded-2xl border-4 border-neutral-700 p-4"}
					>
						<SiSqlite className={"text-7xl text-cyan-400"}/>
					</motion.div>
					<motion.div variants={iconVariants(5.5)}
					            initial={"initial"}
					            animate={"animate"}
					            className={"rounded-2xl border-4 border-neutral-700 p-4"}
					>
						<SiMongodb className={"text-7xl text-green-500"}/>
					</motion.div>

				</motion.div>
			</div>
		</>
	)
}