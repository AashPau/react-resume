import React from "react";
import me from "../../Assets/me.jpg";

import "./Hero.css";

export const Hero = () => {
  return (
    <div className="hero">
      <img className="profile_pic" src={me} alt="profile_pic" width="180rem" />

      <p>Hello, I am Aashish Paudel. I am a Junior Software Developer.</p>
      <div className="hero-links">
        <div className="github-link">Github Link</div>
        <div className="resume">Resume</div>
      </div>

      {/* <div className="details">
        <h1>Aashish Paudel</h1>
        <p>Software Developer</p>
        <p>Phone: 04xxxxx | email: aashpau@gmail.com</p>
        <a href="" className="btn btn-primary">
          Download Resume
        </a>
        <br />
        <a
          href="https://github.com/AashPau"
          className="btn btn-secondary mt-2"
          target="_blank"
        >
          Github Profile
        </a>
      </div> */}
    </div>
  );
};
