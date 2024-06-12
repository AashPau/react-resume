import React from "react";
import { Projects } from "./Projects";
// import { Skills } from "./Skills";
import { SkillsView } from "./SkillsView";
import { Form } from "./Form";

export const Body = () => {
  return (
    <div>
      <section>
        <h4 className="text-center">
          Hello, I am Aashish Paudel. I am MERN full-stack developer.
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
      <Form />
    </div>
  );
};
