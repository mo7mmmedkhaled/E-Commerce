import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaPinterest,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-footer">
        <img src={logo} alt="" />
        <div className="list-footer">
          <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Officers</li>
            <li>About US</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="left-icon">
          <a
            href="https://www.facebook.com/mo7mmmedkhaled/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/mo7mmmed_khaled/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.pinterest.com/mo7mmmed_khaled/"
            target="_blank"
            rel="noreferrer"
          >
            <FaPinterest />
          </a>
          <a
            href="https://wsend.co/201004838415"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
        <div className="copy-right">
          <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
