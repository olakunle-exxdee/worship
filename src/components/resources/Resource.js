import React from "react";
import image from "../../image/man2.png";
import image1 from "../../image/Frame 1.svg";
import "./resource.css";

function Resource() {
  return (
    <section className="resource">
      <div className="resource-img">
        <img src={image} alt="man singing" />
      </div>
      <div className="resource-wrapper">
        <div className=" resource-content2 ">
          <h1 className="music-heading">Music Resources</h1>
          <h1 className="music-heading">Music Resources</h1>
        </div>
        <div className="resource-content">
          <h1 className="music-heading">Music Resources</h1>
          <div className="box-img3 ">
            <img src={image1} alt="arrow" />
          </div>
          <h1 className="music-heading">Music Resources</h1>
        </div>
      </div>
    </section>
  );
}

export default Resource;
