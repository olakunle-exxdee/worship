import React, { useState } from "react";
import Logo from "../../image/Frame.svg";
import appleLogo from "../../image/Group 7.svg";
import { Squash as Hamburger } from "hamburger-react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleCLick = function () {
    setOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="navbar-one">
        <div className="logo">
          <img className="logo-img" src={Logo} alt="logo" />
        </div>
        <div className={`${isOpen ? "toggle open2" : "toggle"} `}>
          <Hamburger
            size={24}
            color="#B798C1"
            toggled={isOpen}
            toggle={handleCLick}
          />
        </div>
      </div>
      <div className={`${isOpen ? "navbar-two open" : "navbar-two"} `}>
        <div className="navbar-wrapper">
          <ul className="list">
            <li className="item">music</li>
            <li className="item">tour</li>
            <li className="item">resources</li>
            <li className="item">store</li>
            <li className="item">contact</li>
          </ul>
        </div>
      </div>
      <div className="album">
        <li className="item item2 ">get the album</li>
        <img src={appleLogo} width="24px" alt="logo" />
      </div>
    </header>
  );
};

export default Navbar;
