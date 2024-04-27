import React from "react";
import "./Nav.css";

import logo from "../../Assets/logo.svg";

export const Nav = () => {
  return (
    <div className="navigation">
      <img src={logo} alt="" />

      <ul>
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect-button">Connect</div>
    </div>
  );
};
