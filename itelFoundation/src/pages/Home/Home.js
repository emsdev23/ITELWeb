import React from "react";
import VectorImage from "../../Images/tech.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <div className="aboutUs">
          <div>
            <p className="aboutus-description">
              When the world says impossible, we say let’s do it!
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
    </div>
  );
};

export default Home;
