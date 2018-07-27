import React from "react";
import { Container, Grid, Icon } from 'semantic-ui-react'
import Heroku from "../assets/images/languages/heroku.jpg";
import Yarn from "../assets/images/languages/yarn.jpg";
import Mocha from "../assets/images/languages/mocha.jpg";


const Technologies = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col portfolio">
      <p>
        My experience and personal passions have led me to an understanding of:
      </p>
      <div className="">
        <h1> Ruby, Ruby on Rails, JS, HTML5, CSS, SQL, PostreSQL, React, Redux, Git, Bootstrap, Heroku, Mocha, Yarn</h1>


      </div>
    </div>
  </div>
);

export default Technologies;
