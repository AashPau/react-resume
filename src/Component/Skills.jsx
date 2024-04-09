import React, { useState } from "react";

export const Skills = () => {
	const [idx, setIdx] = useState("btn1");
	const handleOnClick = (e) => {
		console.log(e.target.id);
		setIdx(e.target.id);
	};
	console.log(idx);
	return (
		<div className="text-center">
			<h2>Skills</h2>
			<hr />
			<div>
				{/* btn group */}
				<div className="btn-group" role="group">
					<button
						id="btn1"
						onClick={handleOnClick}
						type="button"
						className="btn btn-primary"
					>
						Html
					</button>
					<button
						onClick={handleOnClick}
						id="btn2"
						type="button"
						className="btn btn-info"
					>
						Css
					</button>
					<button
						onClick={handleOnClick}
						id="btn3"
						type="button"
						className="btn btn-danger"
					>
						JavaScript
					</button>
				</div>
				<div>
					{idx === "btn3" && <div id="div3">Javascript</div>}
					{idx === "btn2" && <div id="div2">CSS</div>}
					{idx === "btn1" && <div id="div1">HTML</div>}
				</div>
			</div>
		</div>
	);
};
