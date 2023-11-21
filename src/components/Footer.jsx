import React from "react";
import logo from "../assets/img/ruta-camper-logo.png";
import "../styles/Footer.css";
import {
  BsGeoAltFill,
  BsWhatsapp,
  BsEnvelope,
  BsTelephoneFill,
} from "react-icons/bs";

export const Footer = () => (
  <div className="footer">
    <img src={logo} alt="" />
    <div className="contact">
      <p>
        <BsGeoAltFill />
        <span>Thompson 333, Bahía Blanca</span>
      </p>
      <p>
        <BsWhatsapp />
        <span>+54 291 461-6130</span>
      </p>
      <p>
        <BsEnvelope />
        <span>contacto@carpiana.com</span>
      </p>
      <p>
        <BsTelephoneFill />
        <span>+54 291 461-6130</span>
      </p>
    </div>
  </div>
);
