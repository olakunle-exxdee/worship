import React from "react";

import box1 from "../../image/box.png";
import box2 from "../../image/Frame 2.svg";
import man from "../../image/man1.png";
import man1 from "../../image/man3.png";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="heading">Elevation Worship</h1>
      <div className="hero-wrapper">
        <div className="hero-items">
          <div className="items">
            <p className="text">New album: Old Church Basement</p>

            <div className="btn-wrapper">
              <button className="btn">Get The Album</button>
            </div>
            <div className="box-wrapper">
              <div className="box-img">
                <img className="box1" src={box1} alt="box" />
              </div>
              <div className="box-img box-img-2">
                <img src={box2} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wrapper2">
          <div className="hero-items ">
            <div className="box3">
              <img src={man} alt="man" />
            </div>
          </div>
          <div className="hero-items">
            <div className="sub-hero">
              <h2 className="sub-heading">&#169; 2021</h2>
              <p className="text-max">
                More than you ask, think or imagine According to His power
                working in us
              </p>
            </div>
            <img src={man1} className="box2" alt="man" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
