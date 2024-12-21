import {HERO_CONTENT} from "../../constants/index.js";
import PROFILE_PIC from "../../assets/kevinRushProfile.jpg";

export const Hero = () => {
	return (
		<>
			<div className={"border-b border-neutral-900 pb-4 lg:mb-36"}>
				<div className={"flex flex-wrap"}>

					{/* HERO LEFT-HAND TEXT CONTAINER*/}
					<div className={"w-full lg:w-1/2"}>
						<div className={"flex flex-col items-center lg:items-start"}>

							{/* HERO TITLE */}
							<h1 className={"pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"}>Yash Gaurkar</h1>

							{/*	HERO S DESCRIPTION*/}
							<span
								className={"bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"}>
								Full Stack Web Developer
							</span>

							{/* HERO F DESCRIPTION*/}
							<p className={"my-2 max-w-xl py-6 font-light"}>{HERO_CONTENT}</p>
						</div>
					</div>

					{/* HERO RIGHT-HAND IMAGE CONTAINER	*/}
					<div className={"w-full lg:w-1/2 lg:p-8"}>
						<div className={"flex justify-center"}>
							<img src={PROFILE_PIC} alt={"profile picture"}/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}