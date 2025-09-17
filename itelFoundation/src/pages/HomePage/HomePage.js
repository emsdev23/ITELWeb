import React from "react";
import Image1 from "../../Images/edge2edge-media-x21KgBfOd_4-unsplash.jpg";
import Image2 from "../../Images/kvalifik-5Q07sS54D0Q-unsplash.jpg";
import Image3 from "../../Images/pexels-thisisengineering-3862623.jpg";
import styles from "./HomePage.module.css";

import Image4 from "../../Images/heating-cooling-stark.jpg";
import Image5 from "../../Images/GPT_Image_1_change_the_color_of_the_pod_to_light_blue_0.png";
import Image6 from "../../Images/natural-disaster-landscape.jpg";

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
import { Link, NavLink } from "react-router-dom";

import ITELLogo from "../../Images/ITEL-Logo.jpg";

import { header } from "framer-motion/client";
import { color } from "framer-motion";
function HomePage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.description}>
        {/* <div className={styles.logosection}>
          <img src={ITELLogo} class={styles.itelLogo} />
          <p>Immersive Technology and Entrepreneurship Labs</p>
        </div> */}
        {/* <img src={ITELLogo} style={{ width: "50%" }} /> */}
        <div className={styles.container}>
          <div>
            <div className={styles.imagecontainer}>
              <img src={Image1} className={styles.headerimage} />
              <div>
                <div>
                  <img src={Image2} className={styles.headerimage} />
                </div>
                <div>
                  <img src={Image3} className={styles.headerimage} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.homecontent}>
            {/* <div className={styles.homeheading}>
              Towards India acquiring Technology Leadership India
            </div> */}
            {/* <p className={styles.titile}>
              Immersive Technology and Entrepreneurship Labs (ITEL) aims to make
              India a technology leader in the world, in certain focus areas
              over the next few years.
            </p> */}
            <p>
              <b>Towards India acquiring Technology Leadership </b> India with
              the largest population and high population-density cannot afford
              to just import technology. India needs to be a technology leader
              in at least some areas.
            </p>
            <p>
              <b>Immersive Technology and Entrepreneurship Labs (ITEL)</b>, a
              non-profit company, is created with this aim, to make India a
              technology leader in the world, in select areas over the next few
              years. The question is how do we achieve this?
            </p>
            <p>
              The best way to use technology to solve our own challenges. High
              population-density and low-incomes for most households create
              unique problems, unsolved for years. The world appears not to have
              solutions to such complex problems. ITEL will take up these
              “seemingly - impossible” problems and use technology and
              innovation to come up with solutions. By successfully deploying
              these at scale in our country and extending them to other nations
              with similar challenges, India can acquire technology leadership.
            </p>
            <p>
              India is historically known to have always solved its problems,
              both big and small in its own unique way – the Indian way. We
              strongly believe that by combining our distinctive approach with
              technology, we can solve complex challenges and deliver
              long-lasting solutions that are suitable for our country, and at
              the same time inspire our people and the world. We are energized
              by our shared belief, and our collective energy turns bold vision
              into reality!
            </p>
            <p>
              With a deep commitment to improving the ease of life for people,
              we thrive every day to find solutions that not only transform
              India but also societies across the world.
            </p>
          </div>
        </div>
        {/* className="Heading" */}
      </div>

      {/* <!-- Panel 2: QUOTE --> */}
      <section class={styles.quote}>
        <div class={styles.quotacontainer}>
          <div class={styles.hi}>जब किसी चीज़ को शिद्दत से चाहो,</div>
          <div class={styles.hi}>
            तो पूरी कायनात उसे तुमसे मिलाने की साज़िश में लग जाती है।
          </div>
          <h3>
            “When you truly desire something, the universe conspires to make it
            happen!”
          </h3>
        </div>
      </section>

      {/* panel3 TeachInitiatives */}
      <section className="initiatives">
        <div className={styles.description}>
          <div>
            <div className={styles.homeheading}>Technology Initiatives</div>
            <p className={styles.techinitiative}>
              ITEL is a convergence point of ideas and expertise, where
              scientists, start-ups, innovators and passionate youngsters from
              across India come and work together to develop technology that
              tackles problems that are seemingly impossible and create
              eco-friendly and scalable solutions that can last for another 100
              years!
            </p>
            <p>
              At ITEL, our teams dream big to create a better world – and we
              work hard to make it real. Our tech initiatives are borne out of
              our deep understanding of the toughest day-to-day challenges faced
              by millions of Indians, and a bold belief that solutions must be
              purpose-built not only to transform lives, but also to lead the
              way for the world to adapt and transform.
            </p>
            <p>
              Whether it is everyday traffic congestion in cities, urban
              flooding, rising heat levels or cyber vulnerabilities in a rapidly
              digitising world, we are committed to solving these complex and
              large-scale challenges in the Indian way – bold and rooted in
              practicality, affordability, scalability and sustainability!
            </p>
            <br />
            <p className={styles.titile}>ITEL leverages India’s Strengths!</p>
            <p>
              India has a large number of high-quality scientists spread across
              educational institutions, and government labs. They publish
              primarily, and patent their work occasionally, but rarely
              transition it into technology or commercialisation. Many private
              companies too have quality scientists, but their efforts are
              primarily focused on indigenising imported technology or carrying
              out services for international companies. Inspired to do more,
              they can be a big asset.
            </p>
            <p>
              India has a vast pool of youngsters, many from engineering
              colleges. Given the right environment and inspiration, they can do
              wonders. The growth of the deep-tech start-up ecosystem in India
              over the last few years has proved this.
            </p>
            <p>
              ITEL brings these strengths together to help India acquire
              technology leadership. It creates consortiums of multiple
              scientists (working in different institutions), youngsters and
              start-ups to take up India Challenges. Each consortium is led by a
              technologist, a professional who understands unit economics of
              products and technology, and an operations expert to drive these
              scientists and start-ups to translate their ideas to commercial
              products.
            </p>
          </div>
          <br />
          <div className={styles.container}>
            {/* <div class={styles.imagecontainer}>
              <img src={Image4} className={styles.headerimage} />
              <div>
                <div>
                  <img src={Image5} className={styles.headerimage} />
                </div>
                <div>
                  <img src={Image6} className={styles.headerimage} />
                </div>
              </div>
            </div> */}

            <div>
              <div className={styles.homeheading}>
                ITEL’s Key Innovation Tracks:
              </div>
              <div className={styles.projectname}>HASHTIC – City Transport</div>
              <div>
                <p>
                  Traffic congestion is a major challenge faced by Indian
                  cities, making commute difficult for office goers and general
                  public. On an average, a 15-kilometre ride on road takes
                  nearly 75 minutes in major cities, leading to huge
                  productivity losses, wasted fuel and increased vehicle
                  operating costs.
                </p>
                <p>
                  India urgently needs a fresh approach to tackle this challenge
                  and find a solution that reduces commute duration, save fuel
                  costs, and bring down emission levels.
                </p>
                <p>
                  At ITEL, we have developed HASHTIC (High-Throughput Autonomous
                  Sustainable Human Transportation for India’s Next Century), an
                  innovative solution using advanced technologies, to
                  specifically address this crisis plaguing Indian cities, and
                  create an efficient transport system that massively reduces
                  the journey times for the commuters.
                </p>
                <p>
                  HASHTIC is built as a comfortable, green electricity-driven,
                  cost-effective, energy-efficient mode of transport, which can
                  scale to the peak-traffic requirement of a city and still
                  provide a commute of 15 kilometres in 20 minutes. In addition,
                  it also addresses the last-mile connectivity need of the
                  commuter efficiently.
                </p>
                <p>
                  An autonomous pod system built on light-weight elevated
                  tracks, this tech-led solution is developed keeping in mind
                  evolution of India’s cities over the next 100 years. The
                  development team involves scientists from multiple
                  institutions, start-ups and established industry to achieve
                  this impossible goal.. &nbsp;
                  <NavLink
                    to="./Initiavites/Transportation"
                    className="navlink"
                  >
                    <p style={{ color: "#0c8599" }}>Know More... </p>
                    <sup>
                      <FaArrowUpRightFromSquare
                        size="8px"
                        style={{ marginLeft: "-0.8rem", marginTop: "-0.5rem" }}
                      />
                    </sup>
                  </NavLink>
                </p>
              </div>
              <br />
              <div className={styles.projectname}>
                Urban Water Logging Mitigation
              </div>
              <div>
                <p>
                  With increasing and erratic rainfall, aggravated by climate
                  change, most of our cities face frequent water-logging,
                  bringing the life to a stand-still. ITEL strives to develop
                  and use technology to eliminate Urban water logging.
                </p>
                <p>
                  It has created an Urban Water Logging Mitigation Forum,
                  consisting of scientists across the country and the start-ups
                  and is working with the local governments to address the
                  urgent and growing flooding and water logging crisis faced by
                  Indian cities. This crisis damages infrastructure and causes
                  large-scale economic losses and creates havoc in the lives of
                  ordinary people.
                </p>

                <p>
                  Our solution will make city drainage systems smarter by using
                  technology for early detection and removal of blockages,
                  real-time monitoring and suggesting design improvements to
                  ensure that rainwater is absorbed by the ground rather than
                  choking the drainage systems. It will also recommend optimal
                  additions of drains to cater to increasing rainfall. With our
                  unique innovative approach, we aim to eliminate urban
                  waterlogging.&nbsp;
                  <NavLink
                    to="./Initiavites/FloodMitigation"
                    className="navlink"
                  >
                    <p style={{ color: "#0c8599" }}>Know More... </p>
                    <sup>
                      <FaArrowUpRightFromSquare
                        size="8px"
                        style={{ marginLeft: "-0.8rem", marginTop: "-0.5rem" }}
                      />
                    </sup>
                  </NavLink>
                </p>
              </div>
              <br />
              <div className={styles.projectname}>
                Heating & Cooling Solutions
              </div>
              <div>
                <p>
                  Heating and Cooling consume almost 50% of the world’s energy
                  and mostly use fossil fuels today. Further, the low cost of
                  fossil fuels historically, has led humans to use energy for
                  heating and cooling in highly inefficient manner. There is a
                  twin task now; one of replacing the fossil-fuels with green
                  energy and the other to make the heating and cooling far more
                  energy-efficient.
                </p>

                <p>
                  At ITEL, we have put together a consortium of scientists and
                  start-ups to come up with innovative and Sustainable Heating &
                  Cooling Solutions, driven entirely by green electricity. These
                  solutions use Carnot-cycle in heat-pumps and chillers to
                  simultaneously carry out heating and cooling for different
                  applications, making it far more energy efficient than is done
                  today. The challenge is to design and develop a whole variety
                  of products and solutions, such that this green solution is
                  not just energy-efficient, but also no more expensive than the
                  fossil-fuel driven products currently being used. &nbsp;
                  <NavLink
                    to="./Initiavites/Heating&Cooling"
                    className="navlink"
                  >
                    <p style={{ color: "#0c8599" }}>Know More... </p>
                    <sup>
                      <FaArrowUpRightFromSquare
                        size="8px"
                        style={{ marginLeft: "-0.8rem", marginTop: "-0.5rem" }}
                      />
                    </sup>
                  </NavLink>
                </p>
              </div>

              <br />
              {/* <div className={styles.projectname}>Cybersecurity</div>
              <h1>Securing India’s Digital Destiny</h1>
              <div>
                <p>
                  Data is today’s power and as every digital step leaves a
                  digital footprint, cybersecurity has become the unseen armour
                  of modern civilization and encryption has become a silent
                  guardian of daily digital life protecting everything from
                  personal messages to national infrastructure. With
                  cyber-attacks being real, recurring, and increasingly
                  sophisticated. India as the rising digital giant needs to
                  brace itself from the cyberthreats. To secure India from cyber
                  threats, we cannot rely on external solutions but need to
                  develop our own cybersecurity products – made in India
                  deployed globally.
                </p>
                <p>
                  In recognition of this critical moment, an initiative named
                  ‘Indian Cybersecurity Academic Network (ICAN)’ originated.
                  ICAN represents a groundbreaking collaboration of academics
                  from India’s prestigious institutions including IITs, IISc,
                  and IIITs. The core mission of ICAN is to build a
                  collaborative, research-driven ecosystem in partnership with
                  Industry that strengthens India’s position in cybersecurity
                  and encryption technology. &nbsp;
                  <NavLink to="" className="navlink">
                    <p style={{ color: "#0c8599" }}>Know More... </p>
                    <sup>
                      <FaArrowUpRightFromSquare
                        size="8px"
                        style={{ marginLeft: "-0.8rem", marginTop: "-0.5rem" }}
                      />
                    </sup>
                  </NavLink>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* panesl4 incubations */}

      <section className={styles.incubations}>
        <div>
          <div className={styles.homeheading}>Incubations</div>
          <div className={styles.projectname}>
            Nurturing Breakthrough Solutions
          </div>
          <p className={styles.techinitiative}>
            Indian youngsters are highly talented and if nurtured well, can
            produce innovative technologies for global leadership. Many deep
            tech start-ups today are being led by such passionate youngsters.
          </p>
          <p className={styles.techinitiative}>
            At ITEL, we collaborate with such young and talented individuals
            from across the country. These youngsters are working to create
            high-impact solutions for a multitude of big challenges facing India
            across diverse domains, and we support their initiatives.
          </p>
          <p className={styles.techinitiative}>
            We nurture these deep-tech start-ups founded by such youngsters, in
            institutions and labs across India, providing them with the
            necessary inspiration, mentorship, resources and supporting them to
            succeed in their mission.
          </p>
        </div>
      </section>

      {/* panel 5 incubatees */}
      <section>
        <div className={styles.description}>
          <div className={styles.homeheading}>Current Start-ups</div>
          {/* <NavLink to="./incubatees"> </NavLink> */}
          <div className={styles.projectswrapper}>
            <div class={styles.projectstrack}>
              <Link to="https://xterrarobotics.com/" target="blank">
                <img className={styles.projectcard} src={company1} />
              </Link>
              <Link to="https://www.zealev.com/" target="blank">
                <img className={styles.projectcard} src={company2} />
              </Link>
              <Link to="https://shabd.technology/" target="blank">
                <img className={styles.projectcard} src={company3} />
              </Link>
              <Link to="https://www.intercosmos.co/" target="blank">
                <img className={styles.projectcard} src={company4} />
              </Link>
              <Link to="https://aipsychi.org/" target="blank">
                <img className={styles.projectcard} src={company5} />
              </Link>
              <Link to="https://www.panoculonlabs.com/" target="blank">
                <img className={styles.projectcard} src={company7} />
              </Link>
              <Link to="#">
                <img className={styles.projectcard} src={thrshullogo} />
              </Link>

              <Link to="https://kreyn.ai/" target="blank">
                <img className={styles.projectcard} src={kreynAI} />
              </Link>
              <Link to="https://airesqclimsols.com/" target="blank">
                <img className={styles.projectcard} src={AIRESQLogo} />
              </Link>
              <Link to="https://alphamers.com/" target="blank">
                <img className={styles.projectcard} src={Alphamers} />
              </Link>
              <Link to="#">
                <img className={styles.projectcard} src={ABSIX} />
              </Link>
              <Link to="https://vicharak.in/" target="blank">
                <img className={styles.projectcard} src={Vicharak} />
              </Link>
              <Link to="https://www.swapp.design/" target="blank">
                <img className={styles.projectcard} src={Swappdesign} />
              </Link>
              <Link to=" https://farmlandindustries.in/" target="blank">
                <img className={styles.projectcard} src={Farmland} />
              </Link>
              {/* Second set of logos (duplicate for smooth loop) */}
            </div>
          </div>
        </div>
      </section>

      {/* panel 6 parterner with us */}
      <section className={styles.description}>
        <div className={styles.partner}>
          <div>
            <div className={styles.partnerheader}>
              We welcome you to partner our journey!
            </div>
            <p className={styles.partnerbody}>
              If you are a scientist, technologist, or an innovator, who
              believes in changing the world, then connect with us. If you are
              an investor or a passionate individual in any field, who wishes to
              see India take technology leadership, connect with us.
            </p>
            <p className={styles.partnerbody}>
              We invite you to become a part of our consortia and let us
              together think and create scalable and sustainable solutions for
              the most complex, toughest and impossible challenges and make our
              country a technology leader!
            </p>
            <p className={styles.partnerbody}>
              Write to us at{" "}
              <a
                href="mailto:connect@itelfoundation.in"
                style={{
                  color: "blue",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                connect@itelfoundation.in
              </a>
              {/* <span style={{ color: "blue", cursor: "pointer" }}>
                connect@itelfoundation.in
              </span> */}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
