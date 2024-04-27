import React from "react";
import React_logo from "../../Assets/react-logo.png";
import CSS_logo from "../../Assets/CSS3_logo.png";
import JS_logo from "../../Assets/JavaScript-logo.png";
import Bootstrap_logo from "../../Assets/Bootstrap_logo.png";
import HTML_logo from "../../Assets/HTML5_logo.png";
import "./Skills.css";
export const Skills = () => {
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
