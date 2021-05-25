import React from "react";
import "./footer.css";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineInstagram, AiFillYoutube, AiFillApple } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";
import image from "../../image/Frame (1).svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={image} alt="arrow" />
      <div className="footer-wrapper">
        <p className="footer-heading">
          FOLLOW ELEVATION <br /> WORSHIP
        </p>
        <div className="social-media">
          <div className="social-box">
            <RiFacebookFill className="svg" />
          </div>
          <div className="social-box">
            <AiOutlineInstagram className="svg" />
          </div>
          <div className="social-box">
            <AiFillYoutube className="svg" />
          </div>
          <div className="social-box">
            <FaSpotify className="svg" />
          </div>
          <div className="social-box">
            <AiFillApple className="svg" />
          </div>
        </div>
        <p className="footer-text">2021 album - Old Church Basement</p>
      </div>
    </footer>
  );
};

export default Footer;
