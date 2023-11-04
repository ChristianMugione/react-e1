import React from 'react'
import logo from "../assets/img/ruta-camper-logo.png"
import "../styles/Footer.css"
import { BsGeoAltFill, BsWhatsapp, BsEnvelope, BsTelephoneFill } from "react-icons/bs"

export const Footer = () => (
  <div className="footer">
    <img src={logo} alt="" />
    <div className="contact">
        <p>
        <BsGeoAltFill /> Thompson 333, Bahía Blanca
        </p>
        <p>
        <BsWhatsapp /> +54 291 461-6130
        </p>
        <p>
        <BsEnvelope /> contacto@carpiana.com
        </p>
        <p>
        <BsTelephoneFill /> +54 291 461-6130
        </p>
    </div>
  </div>
);