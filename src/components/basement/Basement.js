import React from "react";
import "./basement.css";
import worship from "./../../image/man7.png";

const Basement = () => {
  return (
    <section className="basement">
      <div className="basement-wrapper">
        <div className="basement-content">
          <h3 className="basement-header">
            Old <br /> Church <br /> Basement
          </h3>
        </div>
        <div className="basement-img">
          <img src={worship} alt="worship" />
        </div>
      </div>
    </section>
  );
};

export default Basement;
