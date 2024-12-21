import ABOUT_IMG from "../../assets/about.jpg"
import {ABOUT_TEXT} from "../../constants/index.js"

export const About = () => {
	return (
		<>
			<div className={"border-b border-neutral-900 pb-4"}>

				{/*ABOUT TITLE*/}
				<h2 className={"my-20 text-center text-4xl"}>About <span className={"text-neutral-500 "}>Me</span></h2>
				<div className={"flex flex-wrap"}>
					<div className={"w-full lg:w-1/2 lg:p-8"}>

						{/* ABOUT IMAGE */}
						<div className={"flex items-center justify-center"}>
							<img className={"rounded-2xl"} src={ABOUT_IMG} alt="about image"/>
						</div>

					</div>
					{/* ABOUT PARAGRAPH */}
					<div className={"w-full lg:w-1/2"}>
						<div className={"flex items-center lg:justify-center"}>
							<p className={"my-2 max-w-xl py-6"}>{ABOUT_TEXT}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}