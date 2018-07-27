import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaPencil,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.facebook.com/rachelmiller5">
        <FaFacebook />
      </a>
    </li>

    <li>
      <a href="http://rachelannemiller.com/">
        <FaPencil />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/rae.millz/">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="https://github.com/raemillz">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/rachel-anne-miller/">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="mailto:raeanne1991@gmail.com">
        <FaEnvelope />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
