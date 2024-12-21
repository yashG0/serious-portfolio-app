import {FaJs, FaNodeJs, FaPython, FaReact} from "react-icons/fa";
import {SiFastapi, SiMongodb, SiSqlite} from "react-icons/si";

export const Technologies = () => {
	return (
		<>
			<div className={"border-b border-neutral-900 pb-4"}>
				<h2 className={"my-20 text-center text-4xl"}>Technologies</h2>
				<div className={"flex flex-wrap items-center justify-center gap-4"}>
					<div className={"rounded-2xl border-4 border-neutral-700 p-4"}>
						<FaReact className={"text-7xl text-cyan-400"}/>
					</div>
					<div className={"rounded-2xl border-4 border-neutral-700 p-4"}>
						<SiFastapi className={"text-7xl text-[#0D9A8E]"}/>
					</div>
					<div className={"rounded-2xl border-4 border-neutral-700 p-4"}>
						<FaPython className={"text-7xl text-yellow-400"}/>
					</div>
					<div className={"rounded-2xl border-4 border-neutral-700 p-4"}>
						<FaNodeJs className={"text-7xl text-green-400"}/>
					</div>
					<div className={"rounded-2xl border-4 border-neutral-700 p-4"}>
						<FaJs className={"text-7xl text-yellow-500"}/>
					</div>
					<div className={"rounded-2xl border-4 border-neutral-700 p-4"}>
						<SiSqlite className={"text-7xl text-cyan-400"}/>
					</div>
					<div className={"rounded-2xl border-4 border-neutral-700 p-4"}>
						<SiMongodb className={"text-7xl text-green-500"}/>
					</div>

				</div>
			</div>
		</>
	)
}