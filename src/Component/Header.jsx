import React from "react";
import me from "../Image/me.jpg";

export const Header = () => {
  return (
    <div>
      <div className="text-center mb-5">
        <div className="row">
          <div className="col-md-2">
            <img
              className="rounded"
              src={me}
              alt="profile_pic"
              width="180rem"
            />
          </div>
          <div className="col-md-10">
            <h1>Aashish Paudel</h1>
            <p>Software Developer</p>
            <p>Phone: 04xxxxx | email: aashpau@gmail.com</p>
            <a
              href="https://1drv.ms/w/s!AkrM3vJXJiv3lPwh1Py4Igzf-DEjDw?e=UyJpZq"
              className="btn btn-primary"
            >
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
          </div>
        </div>
      </div>
    </div>
  );
};
