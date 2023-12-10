import React from "react";
import logo from "../assets/img/ruta-camper-logo.png";
import "../styles/Footer.css";
import {
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsFacebook,
} from "react-icons/bs";

export const Footer = () => (
  <div className="footer">
    <img src={logo} alt="" />
    <ul className="contact">
      <li>
        <BsTwitter />
        <span>rutacamper</span>
      </li>
      <li>
        <BsInstagram />
        <span>rutacamper</span>
      </li>
      <li>
        <BsYoutube />
        <span>rutacamper</span>
      </li>
      <li>
        <BsFacebook />
        <span>rutacamper</span>
      </li>
    </ul>
  </div>
);
