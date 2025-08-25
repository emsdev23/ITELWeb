import React from "react";
import "./AboutUs.css";
import { NavLink } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

function AboutUs() {
  return (
    <div>
      <div className="description">
        <div className="content">
          {/* <h1>Home</h1> */}
          <h3 className="Heading">
            From labs to life-changing impact, we build solutions for India’s
            toughest problems!
          </h3>

          <div>
            At ITEL, we converge to tackle impossible challenges and create
            breakthrough innovations — and we support them to transform their
            bold ideas into scalable solutions that impact lives!
          </div>
          <br />

          {/* Legacy */}
          <br />
          <div>
            <p className="Heading">Who we are: </p>
            <p>
              <b>Immersive Technology and Entrepreneurship Labs</b> (ITEL) is a
              not-for-profit organization founded by industry leaders with an
              aim to nurture research and innovations. We bring together
              scientists, start‑ups, and passionate young innovators to create
              bold, innovative, tech-led, frugal and planet-friendly solutions
              to address impossible, large-scale challenges with a goal to
              transform lives.
              <br />
              Our goal is to support talented individuals with breakthrough
              ideas and help them foster successful collaborations and find
              long-lasting solutions for complex large-scale challenges.
            </p>
            <br />
            <p>
              <b>Our Purpose:</b> At ITEL, our purpose is to position India as a
              global technology leader within the next decade, by harnessing the
              innovative spirit, rich talent pool and a thriving R&D system that
              is available in the country.
            </p>
            <br />
            <p>
              <b>Why ITEL Exists?</b> ITEL exists to bridge the existing gaps in
              the Indian innovation ecosystem, such as weak industry-academia
              connect, incompletion of project due to lack of industry
              engagement, importing advanced technologies and attracting
              investments. We aim to create a robust partnership model with all
              key stakeholders and turn innovations with highest potential into
              scalable, real-world solutions.
            </p>
            <br />
            <p>
              <b>Future Focus:</b> ITEL plans to address multiple high-impact
              large scale challenges and develop impactful solutions to reduce
              India’s external dependence and provide global technology
              leadership, in the next ten years.
            </p>
          </div>
          {/* join us */}
          <br />
          <div>
            <p className="Heading">What we do : </p>
            <p>
              ITEL’s two impact pillars of operations are “Technology
              Initiatives” and “Nurturing Start-ups”. These complimentary yet
              powerful pillars enable ITEL’s purpose of building India as a
              technology leader within the next decade by delivering
              breakthrough solutions for impossible challenges and building a
              deep-tech innovation ecosystem.
            </p>
            <p>
              In the following links, we share our thought process in more
              detail, including the background of technology commercialisation
              in India, lessons from successful experiences and ideas for the
              future. Please feel free to explore them. If you have any
              questions or suggestions, please do not to hesitate to reach out
              to us. Our contact information is below. We are happy to engage
              with your dreams and endeavour in shaping India’s future! 
            </p>
          </div>
          <br />
          <div>
            <div class="accordion" id="accordionExample">
              <div
                class="accordion-item"
                style={{
                  borderTop: "1px solid #FFF",
                  borderLeft: "1px solid #FFF",
                  borderRight: "1px solid #FFF",
                }}
              >
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                    style={{ fontSize: "3rem", color: "#087f5b" }}
                  >
                    <p className="Heading">Technology Initiatives:</p>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    {/* <p id="background" className="Heading">
                    Background and Rationale
                  </p> */}
                    {/* content for Background and Rationale */}
                    <div>
                      <p>
                        ITEL has initiated goal-oriented large-scale research
                        and development programs to tackle challenges with a
                        wide societal and ecosystem impact. These initiatives
                        are supported by a purpose-built consortium of
                        scientists, technologists, designers and industry
                        experts, making them outcome-oriented mandates that can
                        build and craft and deliver high-impact solutions.
                      </p>
                      <p>
                        ITEL focusses specifically on areas, where the
                        challenges are complex and plaguing – from urban
                        mobility, flooding, climate resilience to clean energy,
                        advanced manufacturing and assistive technologies.
                      </p>
                      <p>
                        At ITEL, we thrive not to just innovate, but to engineer
                        and deploy workable and scalable solutions for the real
                        world!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="accordion-item"
                style={{
                  borderTop: "1px solid #FFF",
                  borderLeft: "1px solid #FFF",
                  borderRight: "1px solid #FFF",
                }}
              >
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style={{ fontSize: "3rem", color: "#087f5b" }}
                  >
                    <p className="Heading">Nurturing Start-ups :</p>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    {/* <p id="experiences" className="Heading">
                    Experiences
                  </p> */}
                    <div>
                      <div>
                        <p>
                          ITEL aims to be a breeding ground for deep-tech
                          start-ups with an ambition and capability to solve
                          high impact challenges. The organization provides
                          these ambitious innovators with access to advanced R&D
                          facilities, top scientists, resources for prototyping,
                          mentorship and industry connect to realise their
                          dreams.
                        </p>
                        <p>
                          We strongly believe that this hands-on collaborative
                          model will not only provide rich nurturing to these
                          start-ups but will also help them accelerate their
                          journey to convert their promising idea to a
                          fully-deployable innovation, ensuring that impact
                          reaches people sooner.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          {/* How we do: */}
          <br />
          <div>
            <p className="Heading">How we do: </p>
            <p>
              To develop technologies that address each complex challenge, we
              build a consortia from across the country. We focus on bringing
              together the right expertise - from agile start-ups, scientists
              from leading R&D labs to visionary industry leaders, who can
              motivate and inspire driven youngsters to “WIN”.
            </p>

            <p>
              Specifically, the consortia is led by a team that comprises of
              <ul>
                <li> Strong Technologists,</li>
                <li>
                  An expert who understands unit economics of a product or
                  technology
                </li>
                <li>a business and operations expert.</li>
              </ul>
            </p>

            <p>
              Through this multidisciplinary approach, we are able to ensure
              that every project is well equipped with the right skillsets and
              resources to succeed.
            </p>

            <p>
              We <b>consciously choose to address challenges</b> that are highly
              complex with deep societal & economic impact and considered
              impossible to solve, unless addressed through a high-powered
              consortium that we meticulously curate.
            </p>
            <p>
              ITEL’s working model is specifically focussed on creating bold and
              powerful ideas that can transform into an impactful solution.
              Therefore, unlike many innovations that halt at the prototype
              stage, we consciously ensure that promising ideas progress into
              deployable and scalable solutions. To take the innovation from the
              <b>lab to life changing impact</b>, we partner with existing R&D
              labs (rather than duplicating efforts) and ensure that their
              break-throughs are converted rapidly and ready for implementation
            </p>
            <p>
              At ITEL, <b>mentoring and talent development</b> is in our DNA. We
              identify high-potential talent actively and support by providing
              them with the right infrastructure, technology resources, training
              and mentoring to succeed. Working closely with industry leaders,
              and seasoned researchers enables them to push boundaries and
              accelerate their efforts to create possible solutions for
              seemingly impossible challenges.
            </p>
            <p>
              At ITEL, we foster multiple individual and independent efforts to
              solve a common challenge in parallel. Since the perfect path for
              finding a scalable solution is not easy, this approach of working
              concurrently with more than one team allows for more than one team
              to succeed and at the same time increases the chances of
              breakthrough outcomes.
            </p>
          </div>

          <br />
          <div>
            <div>
              <NavLink to="/AdvisoryCommitteeMembers" className="navlink">
                <p>
                  <FaArrowRight size="15px" color="#282c34" />
                </p>
                <p style={{ color: "#282c34" }}>Advisory Committee</p>
                <sup>
                  <FaArrowUpRightFromSquare
                    size="8px"
                    style={{ marginLeft: "-0.8rem", marginTop: "-0.5rem" }}
                  />
                </sup>
              </NavLink>
            </div>
            <div>
              <NavLink to="/TechnicalAdvisoryCommittee" className="navlink">
                <p>
                  <FaArrowRight size="15px" color="#282c34" />
                </p>
                <p style={{ color: "#282c34" }}>
                  Technology Advisory Committee
                </p>
                <sup>
                  <FaArrowUpRightFromSquare
                    size="8px"
                    style={{ marginLeft: "-0.8rem", marginTop: "-0.5rem" }}
                  />
                </sup>
              </NavLink>
            </div>

            <div>
              <NavLink to="/ITELIncubationCommittee" className="navlink">
                <p>
                  <FaArrowRight size="15px" color="#282c34" />
                </p>
                <p style={{ color: "#282c34" }}>ITEL Incubation Committee </p>{" "}
                <sup>
                  <FaArrowUpRightFromSquare
                    size="8px"
                    style={{ marginLeft: "-0.8rem", marginTop: "-0.5rem" }}
                  />
                </sup>
              </NavLink>
            </div>
          </div>

          <br />
          <div>
            <p className="Heading">Our Vision & Mission: </p>
            <p
              style={{
                fontStyle: "italic",
                backgroundColor: "#ffffffff",
                borderLeft: "10px solid  #ffec99",
                borderBottom: "2px solid  #ffec99",
                padding: "2rem",
                borderRadius: "10px",
              }}
            >
              “We endeavour to make India a tech leader by leveraging
              scientists, start-ups, and youngsters to take on challenging
              problems facing the country—problems that seemingly are impossible
              to solve—and enable tech-led solutions.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
