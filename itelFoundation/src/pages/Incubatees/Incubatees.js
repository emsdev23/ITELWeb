import React from "react";
import "./Incubatees.css";
import company1 from "../../Images/company1.png";
import company2 from "../../Images/company2.png";
import company3 from "../../Images/company3.png";
import company4 from "../../Images/company4.png";
import company5 from "../../Images/company5.png";
import company6 from "../../Images/company6.png";
import company7 from "../../Images/company7 .png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

function Incubatees() {
  return (
    <div>
      <div className="companies">
        {/* company 1  */}
        <div className="compnaies-list">
          <div className="company-logo">
            <img src={company1} />
          </div>
          <div className="company-description">
            <p className="company-name">xTerra Robotics Pvt Ltd</p>
            <p className="company-desc">
              We aim to become global leader in autonomous robotics. We develop
              rugged, autonomous quadruped robots with advanced AI, that go
              beyond conventional limitations, offering robust, dynamic, and
              adaptable solutions for a variety of applications.
            </p>
            <div className="company-website">
              <a href="https://xterrarobotics.com/" target="_blank">
                More
              </a>
              <sup>
                <FaArrowUpRightFromSquare
                  size="8px"
                  color="#087f5b"
                  style={{ marginBottom: "-2rem" }}
                />
              </sup>
            </div>
          </div>
        </div>

        <br />
        {/* company 2 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={company2} />
          </div>
          <div className="company-description">
            <p className="company-name">Zealev DC-Tech Private Limited</p>
            <p className="company-desc">
              DC based next generation energy distribution solutions
            </p>
            <div className="company-website">
              <div>
                <a href="https://www.zealev.com/" target="_blank">
                  More
                </a>
              </div>
              <sup>
                <FaArrowUpRightFromSquare
                  size="8px"
                  color="#087f5b"
                  style={{ marginBottom: "-2rem" }}
                />
              </sup>
            </div>
          </div>
        </div>

        <br />

        {/* company 3 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={company3} />
          </div>
          <div className="company-description">
            <p className="company-name">Shabd Intelligence Pvt. Ltd.</p>
            <p className="company-desc">
              Shabd is a company focused on research and deployment of language
              solutions. Our goal is to help people across India overcome
              language challenges using AI for Speech and Text. They use Compute
              power of handset for speech-to-text and text-to-speech conversion
              for Indian languages, rather than using GPUs on Cloud , saving
              costs and power.
            </p>
            <div className="company-website">
              <div>
                <a href="https://shabd.technology/" target="_blank">
                  More
                </a>
              </div>
              <sup>
                <FaArrowUpRightFromSquare
                  size="8px"
                  color="#087f5b"
                  style={{ marginBottom: "-2rem" }}
                />
              </sup>
            </div>
          </div>
        </div>

        <br />
        {/* company 4 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={company4} />
          </div>
          <div className="company-description">
            <p className="company-name">
              Inter-Cosmos Space Exploration Technologies Pvt. Ltd.
            </p>
            <p className="company-desc">
              We design and build advanced, non-toxic green hypergolic thrusters
              for satellites, delivering reliable, eco-friendly propulsion to
              support the next generation of sustainable space exploration.
            </p>
            <div className="company-website">
              <div>
                <a href="https://www.intercosmos.co/" target="_blank">
                  More
                </a>
              </div>
              <sup>
                <FaArrowUpRightFromSquare
                  size="8px"
                  color="#087f5b"
                  style={{ marginBottom: "-2rem" }}
                />
              </sup>
            </div>
          </div>
        </div>

        {/* company 5 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={company5} />
          </div>
          <div className="company-description">
            <p className="company-name">AIPsychi Pvt. Ltd. </p>
            <p className="company-desc">
              At Aipsychi, we are dedicated to revolutionizing mental health
              assessment and support through cutting-edge technology. Our
              mission is to provide accessible, convenient, and effective
              solutions that empower individuals on their mental wellness
              journey.
            </p>
            <div className="company-website">
              <div>
                <a href="https://aipsychi.org/" target="_blank">
                  More
                </a>
              </div>
              <sup>
                <FaArrowUpRightFromSquare
                  size="8px"
                  color="#087f5b"
                  style={{ marginBottom: "-2rem" }}
                />
              </sup>
            </div>
          </div>
        </div>

        {/* company 6 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={company6} alt="company" />
          </div>
          <div className="company-description">
            <p className="company-name">Trishulopulsion Technology Pvt. Ltd.</p>
            <p className="company-desc">
              Team Trishul is focussed on the development of indigenous liquid
              rocket engines. 500N thrust tested in Feb 2023, and a 5000N thrust
              tested in Aug 2023. There is a need for reliable cost-effective
              propulsion solutions to enhance scalability.
            </p>
            <div className="company-website">
              <div>
                <a href="#">More</a>
              </div>
              <sup>
                <FaArrowUpRightFromSquare
                  size="8px"
                  color="#087f5b"
                  style={{ marginBottom: "-2rem" }}
                />
              </sup>
            </div>
          </div>
        </div>

        {/* company 7 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={company7} />
          </div>
          <div className="company-description">
            <p className="company-name">Panoculan Labs</p>
            <p className="company-desc">
              The Panocle (Panoculon Spectacle) is an inclusive AI-powered smart
              spectacle. Think an extension to your smartphone which can see and
              hear and help you with contextual intelligence.
            </p>
            <div className="company-website">
              <div>
                <a href="https://www.panoculonlabs.com/" target="_blank">
                  More
                </a>
              </div>
              <sup>
                <FaArrowUpRightFromSquare
                  size="8px"
                  color="#087f5b"
                  style={{ marginBottom: "-2rem" }}
                />
              </sup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Incubatees;
