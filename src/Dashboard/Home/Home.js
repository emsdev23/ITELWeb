import React from "react";
import "./Home.css";
import VectorImage from "../Images/tech.png";

function Aboutus() {
  return (
    <div className="about">
      <div className="aboutUs">
        <div>
          <p className="aboutus-description">
            Immersive Technology and Entrepreneurship Labs{" "}
            <span style={{ color: "#2b8a3e" }}>ITEL :</span>{" "}
            <p className="text">
              Empowering India Through Technology Leadership
            </p>
          </p>
        </div>
        <div>
          <img src={VectorImage} alt="img" className="image" />
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Aboutus;
