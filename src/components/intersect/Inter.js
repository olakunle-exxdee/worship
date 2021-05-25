import React from "react";
import "./inter.css";
import cross from "../../image/cross.svg";
import bird from "../../image/bird.svg";

const Inter = () => {
  return (
    <section className="inter">
      <div className="inter-wrapper">
        <div className="inter-box inter-box1">
          <p className="text-bold">
            The new album from Elevation Worship & Maverick City
          </p>
        </div>
        <div className="inter-box">
          <img src={cross} alt="cross" />
          <p>You would cross an ocean so I wouldn’t drown</p>
        </div>
        <div className="inter-box">
          <img src={bird} alt="bird" />
          <p>You’ve never been closer than You are right now</p>
        </div>
      </div>
    </section>
  );
};

export default Inter;
