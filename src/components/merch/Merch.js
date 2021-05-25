import React from "react";
import slant from "../../image/Vector 9 (Stroke).svg";
import main from "../../image/man.png";
import aux1 from "../../image/man4.png";
import aux2 from "../../image/man6.png";
import "./merch.css";

const Merch = () => {
  return (
    <section className="merch">
      <div className="merch-wrapper">
        <div className="merch-content">
          <div className="heading-group">
            <div className="heading-box">
              <h3 className="heading-sub">Shop Merch</h3>
            </div>
            <img src={slant} className="slant" alt="slant" />
          </div>

          <div className="merch-category">
            <p className="merch-text">Sort by Category</p>
            <div className="category">
              <div className="category-box category-box1">
                <h5>01</h5>
                <p>all</p>
              </div>
              <div className="category-box">
                <h5>02</h5>
                <p>shirts</p>
              </div>
              <div className="category-box">
                <h5>03</h5>
                <p>hats</p>
              </div>
              <div className="category-box">
                <h5>04</h5>
                <p>music</p>
              </div>
              <div className="category-box">
                <h5>05</h5>
                <p>signs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="merch-img">
          <div className="main-img">
            <img src={main} alt="main-merch-img" />
          </div>
          <div className="aux-img1">
            <img src={aux1} alt="other-merch-img" />
          </div>
          <div className="aux-img2">
            <img src={aux2} alt="other-merch-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merch;
