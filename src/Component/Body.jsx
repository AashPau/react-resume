import React from "react";
import { Projects } from "./Projects";
// import { Skills } from "./Skills";
import { SkillsView } from "./SkillsView";

export const Body = () => {
	return (
		<div>
			<section>
				<h4 className="text-center">
					Hello, I am Aashish Paudel. I am a Junior Software Developer.
				</h4>
			</section>
			<br />
			<br />
			<section>
				{/* <Skills /> */}
				<SkillsView />
			</section>
			<div></div>
			<br />
			<br />
			<Projects />
		</div>
	);
};
