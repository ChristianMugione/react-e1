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
    <div className="contact">
      <p>
        <BsTwitter />
        <span>rutacamper</span>
      </p>
      <p>
        <BsInstagram />
        <span>rutacamper</span>
      </p>
      <p>
        <BsYoutube />
        <span>rutacamper</span>
      </p>
      <p>
        <BsFacebook />
        <span>rutacamper</span>
      </p>
    </div>
  </div>
);
