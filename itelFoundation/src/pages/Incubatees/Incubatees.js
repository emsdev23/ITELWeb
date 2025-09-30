import React from "react";
import "./Incubatees.css";
import company1 from "../../Images/company1.png";
import company2 from "../../Images/company2.png";
import company3 from "../../Images/company3.png";
import company4 from "../../Images/company4.png";
import company5 from "../../Images/company5.png";
import company6 from "../../Images/company6.png";
import company7 from "../../Images/company7 .png";
import thrshullogo from "../../Images/Trishul Logo.png";

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
              Xterra aims to advance humanity by creating robots that seamlessly
              integrate into our world, enhancing our ability to interact with
              and navigate our environment.
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
              Zealev designs and builds next-generation converters that fuel the
              future of green energy — from Battery Energy Storage Systems
              (BESS) and DC fast charging to microgrids and beyond.
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
              Shabd AI Voice Engine gets real-time speech and text translations
              for Indian Languages, enabling communication beyond language
              barriers
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
              InterCosmos designs and builds advanced, non-toxic green
              hypergolic thrusters that provide reliable, eco-friendly
              propulsion for satellites supporting the next generation of
              sustainable space exploration.​
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
              Aipsychi is a next-generation modular SaaS platform purpose-built
              for mental health services. Their dynamic platform fuses AI-driven
              assessments, voice-enabled diagnostics, customizable chatbots, and
              personalized content delivery. Whether you're a clinic,
              university, or corporation, Aipsychi enables you to design your
              own service journeys while ensuring full compliance and data
              protection.
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
            <img src={thrshullogo} alt="company" />
          </div>
          <div className="company-description">
            <p className="company-name">Trishulopulsion Technology Pvt. Ltd.</p>
            <p className="company-desc">
              Team Trishul, has a dedicated group of passionate engineers
              focused on the development of liquid rocket engines. They have
              successfully completed two liquid rocket static tests: a 500N
              thrust test on February and a 5000N thrust test on August of 2023.
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
              Panoculon aims to enhance human capabilities through cutting-edge
              technology. They are at at the forefront of innovation in smart
              eyewear and AI-powered conversation analysis.
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
              Kreyn.ai develops Digital Agents and Physical Agents to address
              industry-specific use cases. Digital Agents include avatars, voice
              bots, and vision bots designed for various industry applications.
              Physical Agents are embodied AI systems that integrate with
              robotics hardware, enabling them to perform real-world tasks
              efficiently.
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
              AIRESQ CLIMSOLS specializes in AI-driven risk management,
              integrating AI, physics, and advanced engineering to deliver
              precision-driven, actionable solutions beyond traditional risk
              mapping of floods.
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
              Vaayuneer has developed a novel process to generate renewable
              energy from microalgae via Liquid Hydrogen Carriers (LHCs). Unlike
              hydrogen, they are easy to store and can be converted into solid
              fuels while retaining the calorific value of hydrogen
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
              ABSIX is passionate about revolutionizing robotics hands-on
              learning. Their core mission is to propel enthusiastic engineering
              students to become future deep-tech leaders, by providing
              immersive, high-quality, and hyper-connected, robotics education
              to all.
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
              Vicharak aims to break free the shackles of traditional CPU
              platforms by introducing Reconfigurable Computing to consumers.
              Their approach involves a complete redefinition of computing
              architectures, software paradigms, and hardware capabilities.
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
              Semilit is focused on building the next generation of DUV
              lithography machines. Lithography machines are expensive. But
              their goal is to reduce the costs of it while maintaining the
              precision and accuracy of the machines.
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
              Swapp Design, develops autonomous battery-swapping solutions for
              electric four-wheelers. Their technology enables rapid battery
              exchanges in 3–5 minutes, eliminating range anxiety and long
              charging times.
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
              Farmland manufacture a Four-Wheel Quad Bike that can move inside
              most of the plantation crops with ease and carry out most of the
              farming activities that are necessary. All of the accessories can
              be operated by any unskilled labour. Thus reducing the dependency
              and making the product handy for timely farm operations
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

        {/* company 17 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={company6} alt="company" />
          </div>
          <div className="company-description">
            <p className="company-name">VLSI System Design (VSD)</p>
            <p className="company-desc">
              VSD is an Indian semiconductor skilling & IP firm. They want to
              build India's own RISC-V hardware ecosystem and reduce dependence
              on foreign chips.
            </p>
            <div className="company-website">
              <div>
                <a href="https://www.vlsisystemdesign.com/" target="_blank">
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

        {/* company 18 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={company6} alt="company" />
          </div>
          <div className="company-description">
            <p className="company-name">Aortic Labs</p>
            <p className="company-desc">
              Aortic Labs is revolutionizing AI data centers with next-gen
              optical interconnects that doubles speed, cuts cost, and boosts
              efficiency
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

        {/* company 19 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={company6} alt="company" />
          </div>
          <div className="company-description">
            <p className="company-name">Asphear Technology Solutions</p>
            <p className="company-desc">
              Asphear aims to decentralize hearing and speech healthcare by
              making it affordable, accessible, and sustainable.They help
              address delayed detection, poor rural access, specialist
              dependency and high screening costs amongst others of the existing
              systems.
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

        {/* company 20 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={company6} alt="company" />
          </div>
          <div className="company-description">
            <p className="company-name">Sudoyantra Pvt. Ltd.</p>
            <p className="company-desc">
              Sudoyantra's robots harness the power of AI to clean solar panels,
              maintain dashboard among many other things. They also custom
              create robots from scratch. Their advanced customization services
              include enhancing and upgrading existing robots.
            </p>
            <div className="company-website">
              <div>
                <a href="https://www.sudoyantra.com/" target="_blank">
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

        {/* company 21 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={company6} alt="company" />
          </div>
          <div className="company-description">
            <p className="company-name">Arcishmaan Elements Pvt Ltd</p>
            <p className="company-desc">
              A cleantech company revolutionizing road construction with
              patented bitumen pellets that enable low-carbon, energy-efficient,
              and safe infrastructure solutions
            </p>
            <div className="company-website">
              <div>
                <a href="https://arciselements.com/" target="_blank">
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

        {/* company 22 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={company6} alt="company" />
          </div>
          <div className="company-description">
            <p className="company-name">Quant Solar Technologies Pvt Ltd</p>
            <p className="company-desc">
              QS provides patented floating solar PV systems that generate clean
              energy without using land. Their platforms are lightweight,
              modular ideal for quick deployment and scalability. They also
              customize it for diverse water bodies like dams, canals, and
              ponds.
            </p>
            <div className="company-website">
              <div>
                <a href="https://www.quantsolar.com/" target="_blank">
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

        {/* company 23 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={company6} alt="company" />
          </div>
          <div className="company-description">
            <p className="company-name">DexSent Robotics (IITGn)</p>
            <p className="company-desc">
              Dexsent builds robots with human-like dexterity and intelligence —
              capable of sensing, deciding, and acting meaningfully in the world
              around them.
            </p>
            <div className="company-website">
              <div>
                <a href="https://dexsentrobotics.com/" target="_blank">
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

        {/* company 24 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={company6} alt="company" />
          </div>
          <div className="company-description">
            <p className="company-name">Galanto Innovations </p>
            <p className="company-desc">
              Galanto's innovative rehabilitation solutions make recovery
              accessible, reliable, and affordable. They aim to transform the
              way people recover from injuries and disabilities through
              wearables designed by them.
            </p>
            <div className="company-website">
              <div>
                <a href="https://www.galantoindia.com/" target="_blank">
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

        {/* company 25 */}

        <div className="compnaies-list">
          <div className="company-logo">
            <img src={company6} alt="company" />
          </div>
          <div className="company-description">
            <p className="company-name">Admeca Composites Pvt. Ltd.</p>
            <p className="company-desc">
              Admeca aims to lead the development and adoption of bamboo epoxy
              composites, promoting sustainable and eco-friendly materials
              across civil, automobile, and aerospace industries. Their goal is
              to revolutionize structural materials with the power of nature.
            </p>
            <div className="company-website">
              <div>
                <a href="http://admecacomposites.in/" target="_blank">
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
