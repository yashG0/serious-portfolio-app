import "./App.css";
import { MotionConfig } from "framer-motion";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Technologies } from "./components/Technologies.jsx";
import { Project } from "./components/Project.jsx";
import { Contact } from "./components/Contact.jsx";

function App() {
	return (
		<MotionConfig reducedMotion="user">
			<div
				className={
					"overflow-x-clip text-neutral-300 antialiased selection:bg-emerald-300 selection:text-emerald-950"
				}
			>
				<div className="fixed top-0 -z-10 h-full w-full">
					<div className="relative h-full w-full bg-black">
						<div className="relative h-full w-full bg-black">
							<div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]" />
							<div className="absolute left-0 right-0 top-[-10%] h-250 w-250 rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" />
						</div>
					</div>
				</div>

				<div className="container mx-auto w-full px-3 sm:px-5 lg:px-8">
					<Navbar />
					<Hero />
					<About />
					<Technologies />
					<Project />
					<Contact />
				</div>
			</div>
		</MotionConfig>
	);
}

export default App;
