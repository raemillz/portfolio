import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Rachel Miller</h1>
      <h3>
      Surfer Girl turned Full Stack Web Developer
      <p>Soft-skill cool with hard-skill tools.</p>
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
