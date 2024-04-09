import React from "react";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

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
				<Skills />
			</section>
			<br />
			<br />
			<Projects />
		</div>
	);
};
