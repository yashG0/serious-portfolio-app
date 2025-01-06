import { PROJECTS } from "../../constants/index.js";
import { motion } from "framer-motion";


export const Project = () => {
	return (
		<>
			<div className="border-b border-neutral-900 pb-4">
				<motion.h2 className={"my-20 text-center text-4xl"}
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: -100 }}
					transition={{ duration: 0.5 }}
				>
					My Projects
				</motion.h2>
				<div>
					{PROJECTS.map((project, index) => (
						<div className={"mb-8 flex flex-wrap lg:justify-center"} key={index}>

							{/* IMAGE CONTAINER LEFT SIDE */}
							<motion.div className={"w-full lg:w-1/4 flex justify-center lg:justify-start"}
								whileInView={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: -100 }}
								transition={{ duration: 0.5 }}
							>
								{/* PROJECT IMAGEs */}
								<img
									src={project.image}
									width={150}
									height={150}
									alt={project.title}
									className={"mb-6 rounded"}
								/>
							</motion.div>

							{/* TEXT CONTAINER RIGHT SIDE */}
							<motion.div className={"w-full text-center md:text-left max-w-xl lg:w-3/4"}
								whileInView={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: 100 }}
								transition={{ duration: 1 }}
							>
								{/* Project TITLE and Description */}
								<h6 className={"mb-2 font-semibold"}>{project.title}</h6>
								<p className={"mb-4 text-neutral-400"}>{project.description}</p>

								{/* PROJECT TECHNOLOGY LISTING */}
								{project.technologies.map((technology, index) => (
									<span
										key={index}
										className={
											"mr-2 rounded capitalize border border-gray-800 bg-neutral-950 px-2 py-1 text-sm font-medium text-purple-100"
										}
									>
										{technology}
									</span>
								))}
							</motion.div>
						</div>
					))}
				</div>

			</div>
		</>
	)
}