import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";
// import Resume from "../assets/images/resume.pdf";


import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>

        <p> Surfer girl turned full stack web developer with a passion for converting courage and creativity into code. Experience in
        Ruby on Rails and JavaScript based programming. I learned teamwork as Division 1 collegiate water polo player,
        and leadership as a surf instructor in Panama. I bring an extensive professional background in sales, specializing in fostering
        client relationships. 
        <br></br>
        <br></br>
        I believe that coding is the language of tomorrow. As a full-stack web developer, I am committed to designing and implementing
        the best user experience for your customers. Pragmatic, persistent, and passionate about usability,
        I'm constantly striving to perfect my craft by evolving with the ever-changing tech landscape and learning
        from more seasoned developers.
        </p>
      </div>
    </div>
  </section>
);

export default About;
