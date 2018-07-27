import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand ruby" />
            <em>Ruby on Rails</em>
          </li>
          <li>
            <span className="bar-expand js" />
            <em>JavaScript</em>
          </li>
          <li>
            <span className="bar-expand react" />
            <em>React</em>
          </li>
          <li>
            <span className="bar-expand css" />
            <em>CSS</em>
          </li>
          <li>
            <span className="bar-expand html5" />
            <em>HTML5</em>
          </li>
          <li>
            <span className="bar-expand nodejs" />
            <em>SQL</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
