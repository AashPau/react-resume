import React from "react";

const projects = [
  {
    title: "Portfolio",
    techUsed: "react, bootstrap",
    description: "Portfolio for Myself",
    siteLink: "",
    gitHubLink: "",
  },
  {
    title: "Portfolio",
    techUsed: "react, bootstrap",
    description: "Portfolio for Myself",
    siteLink: "",
    gitHubLink: "",
  },
  {
    title: "Portfolio",
    techUsed: "react, bootstrap",
    description: "Portfolio for Myself",
    siteLink: "",
    gitHubLink: "",
  },
  {
    title: "Portfolio",
    techUsed: "react, bootstrap",
    description: "Portfolio for Myself",
    siteLink: "",
    gitHubLink: "",
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
            <tr>
              <th scope="row">1</th>
              <td>Portfolio</td>
              <td>html, css, react, bootstrap</td>
              <td>Portfolio for myself</td>
              <td>
                <a href="https://github.com/AashPau/Portfolio" target="_blank">
                  Github
                </a>{" "}
                <a href="aashishpaudel.com" target="_blank">
                  Live
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>BG Color Changer</td>
              <td>html, css, javascript</td>
              <td>
                It will allow to change background color with a click of a
                button and display the color codes in Hex and RGB.
              </td>
              <td>
                <a
                  href="https://github.com/AashPau/react-bg-color-changer"
                  target="_blank"
                >
                  Github
                </a>{" "}
                <a
                  href="https://react-bg-color-changer-indol.vercel.app"
                  target="_blank"
                >
                  Live
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Counter</td>
              <td>html, javascript, bootstrap</td>
              <td>
                Counter with a slight twist of number chaning color if positivve
                or negative.
              </td>
              <td>
                <a href="https://github.com/AashPau/counter" target="_blank">
                  Github
                </a>{" "}
                <a href="https://counter-plum-rho.vercel.app/" target="_blank">
                  Live
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Name List</td>
              <td>React, Jsx, bootstrap</td>
              <td>Display the entered name and enter it to a list.</td>
              <td>
                <a href="https://github.com/AashPau/namelist" target="_blank">
                  Github
                </a>{" "}
                <a href="https://namelist-pied.vercel.app/" target="_blank">
                  Live
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};
