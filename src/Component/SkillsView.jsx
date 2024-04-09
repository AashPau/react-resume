import React from "react";
import React_logo from "../Image/react-logo.png";
import CSS_logo from "../Image/CSS3_logo.png";
import JS_logo from "../Image/JavaScript-logo.png";
import Bootstrap_logo from "../Image/Bootstrap_logo.png";
import HTML_logo from "../Image/HTML5_logo.png";
import "./Styles.css";

export const SkillsView = () => {
	return (
		<div className="text-center">
			<h4>Skills</h4>
			<hr />
			<div className="row">
				<div className="col">
					<img className="img" src={HTML_logo} alt="" />
				</div>
				<div className="col">
					<img className="img" src={CSS_logo} alt="" />
				</div>
				<div className="col">
					<img className="img" src={JS_logo} alt="" />
				</div>
				<div className="col">
					<img className="img" src={Bootstrap_logo} alt="" />
				</div>
				<div className="col">
					<img className="img" src={React_logo} alt="" />
				</div>
			</div>
		</div>
	);
};
