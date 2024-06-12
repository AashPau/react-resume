import React from "react";

const projects = [
  {
    title: "Portfolio",
    techUsed: "react, bootstrap",
    description: "Portfolio for Myself",
    siteLink: "https://www.aashishpaudel.com",
    gitHubLink: "https://github.com/AashPau/react-resume",
  },
  {
    title: "Notes App",
    techUsed: "react, bootstrap, express, mongoDB, JWT, react-router",
    description: "A simple app to keep notes",
    siteLink: "https://note-app-mu-beryl.vercel.app",
    gitHubLink: "https://github.com/AashPau/Note-app",
  },
  {
    title: "Book Reader",
    techUsed: "react, bootstrap, api",
    description: "A web-app to search books through API",
    siteLink: "https://book-reader-ten.vercel.app",
    gitHubLink: "https://github.com/AashPau/book-reader",
  },
  {
    title: "Calculator",
    techUsed: "react, bootstrap",
    description: "Simple classic calculator",
    siteLink: "https://calculator-sandy-nine-18.vercel.app",
    gitHubLink: "https://github.com/AashPau/calculator",
  },
];
export const Projects = () => {
  return (
    <div>
      <section>
        <h3>Projects</h3>
        <hr />
        <table border="1" className="table table-info">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Tech Used</th>
              <th scope="col">Description</th>
              <th scope="col">Links</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{project.title}</td>
                <td>{project.techUsed}</td>
                <td>{project.description}</td>
                <td>
                  <a href={project.gitHubLink} target="_blank">
                    Github
                  </a>{" "}
                  <a href={project.siteLink} target="_blank">
                    Live
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};
