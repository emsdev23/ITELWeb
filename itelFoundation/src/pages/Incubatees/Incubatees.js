import React from "react";
import "./Incubatees.css";
import company1 from "../../Images/company1.png";
import company2 from "../../Images/company2.png";
import company3 from "../../Images/company3.png";
import company4 from "../../Images/company4.png";
import company5 from "../../Images/company5.png";
import company6 from "../../Images/company6.png";
import company7 from "../../Images/company7 .png";

import kreynAI from "../../Images/Kreyn AI Logo File.PNG";
import AIRESQLogo from "../../Images/AIRESQ_LOGO.png";
import Alphamers from "../../Images/Alphamers TM logo black (1).png";
import ABSIX from "../../Images/ABsixLogo.png";
import Vicharak from "../../Images/Vicharak Logo.jpg";
import Swappdesign from "../../Images/Swapp Designs Logo.png";
import Farmland from "../../Images/Farmland Logo.jpeg";

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
            <p className="company-name">Panoculon Labs</p>
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

        {/* company 8 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={kreynAI} alt="company" />
          </div>
          <div className="company-description">
            <p className="company-name">Kreyn.ai</p>
            <p className="company-desc">
              Kreyn.ai develops both Digital Agents and Physical Agents to
              address industry-specific use cases. Digital Agents include
              avatars, voice bots, and vision bots designed for various industry
              applications. Physical Agents are embodied AI systems that
              integrate with robotics hardware, enabling them to perform
              real-world tasks efficiently.
            </p>
            <div className="company-website">
              <div>
                <a href="https://kreyn.ai/" target="_blank">
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

        {/* company 9 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={AIRESQLogo} alt="company" />
          </div>
          <div className="company-description">
            <p className="company-name">AIRESQ CLIMSOLS PRIVATE LIMITED </p>
            <p className="company-desc">
              At AIRESQ CLIMSOLS Private Limited, we specialize in AI-driven
              risk management, integrating AI, physics, and advanced engineering
              to deliver precision-driven, actionable solutions beyond
              traditional risk mapping. Our proprietary technologies transform
              passive risk assessments into proactive strategies, safeguarding
              critical infrastructure and enhancing resilience across diverse
              sectors. Through strategic partnerships, we empower clients to
              navigate uncertainties, mitigate complex risks, and drive
              sustainable growth.
            </p>
            <div className="company-website">
              <div>
                <a href="https://airesqclimsols.com/" target="_blank">
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

        {/* company 10 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={Alphamers} alt="company" />
          </div>
          <div className="company-description">
            <p className="company-name">AlphaMERS Limited </p>
            <p className="company-desc">
              AlphaMERS develops and implements new technologies for river and
              lake cleaning, oil spill response, prototyping and testing new
              technologies for harvesting ocean wave energy and robots for
              municipal applications.
            </p>
            <div className="company-website">
              <div>
                <a href="https://alphamers.com/" target="_blank">
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

        {/* company 11 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={company6} alt="company" />
          </div>
          <div className="company-description">
            <p className="company-name">Vaayuneer Sciences Pvt Ltd </p>
            <p className="company-desc">
              We generate green hydrogen in the form of hydroquinones from
              microalgae. Our current cost of production per Kg of green
              hydrogen is in the range of INR 87-130.5/Kg (USD 1-1.5/Kg).
            </p>
            <div className="company-website">
              <div>
                <a href="https://vaayuneer.com/" target="_blank">
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

        {/* company 12 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={ABSIX} alt="company" />
          </div>
          <div className="company-description">
            <p className="company-name">ABSIX ROBOTICS PRIVATE LIMITED</p>
            <p className="company-desc">
              ABSIX Robotics is a single-stop platform to provide skilling and
              training in hands-on fields without the need of costly
              infrastructure or extensive training of faculty. We are doing this
              through innovative challenge-driven curriculum on custom-designed
              robots that is affordable and accessible to all. Our revolutionary
              approach is designed to unlock the enormous potential in Indian
              youth to make them drive impact in deep-tech domains.
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

        {/* company 13 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={Vicharak} alt="company" />
          </div>
          <div className="company-description">
            <p className="company-name">Vicharak Computers Private Limited </p>
            <p className="company-desc">
              A deeptech computer hardware company, specialising in
              Reconfigurable Computing Architectures, Compilers, Tools and
              systems to enable next wave of faster and efficient computing.
            </p>
            <div className="company-website">
              <div>
                <a href="https://vicharak.in/" target="_blank">
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

        {/* company 14 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={company6} alt="company" />
          </div>
          <div className="company-description">
            <p className="company-name">SemiLit Private Limited </p>
            <p className="company-desc">
              SemiLit is a startup focused on manufacturing DUV lithography
              machines. We are currently focused on working towards a mid-market
              machine capable of manufacturing 28nm to 180nm silicon wafer
              chips. We are innovating with the cost of the machines by
              manufacturing our own light sources and other essential equipment
              in-house.
            </p>
            <div className="company-website">
              <div>
                <a href="https://semilit.in/" target="_blank">
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

        {/* company 15 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={Swappdesign} alt="company" />
          </div>
          <div className="company-description">
            <p className="company-name">Swapp Designs </p>
            <p className="company-desc">
              Swapp Design, founded develops autonomous battery-swapping
              solutions for electric four-wheelers. Their technology enables
              rapid battery exchanges in 3–5 minutes, eliminating range anxiety
              and long charging times. Swapp offers a pay-as-you-go system,
              making EV adoption more convenient and cost-effective.
            </p>
            <div className="company-website">
              <div>
                <a href="https://www.swapp.design/" target="_blank">
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

        {/* company 16 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={Farmland} alt="company" />
          </div>
          <div className="company-description">
            <p className="company-name">Farmland Industries</p>
            <p className="company-desc">
              Farmland Industries India Private Limited specializes in
              manufacturing four-wheel quad bikes designed to navigate
              plantation crops efficiently and perform various farming
              activities. These quad bikes can be equipped with attachments such
              as a 500kg-capacity trolley, weed-cutting tools, shredders,
              sprayers, and diggers, all operable by unskilled labor, thereby
              reducing dependency and facilitating timely farm operations.
            </p>
            <div className="company-website">
              <div>
                <a href="https://farmlandindustries.in/" target="_blank">
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
