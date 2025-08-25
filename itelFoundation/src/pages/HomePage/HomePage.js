import React from "react";
import Image1 from "../../Images/edge2edge-media-x21KgBfOd_4-unsplash.jpg";
import Image2 from "../../Images/kvalifik-5Q07sS54D0Q-unsplash.jpg";
import Image3 from "../../Images/pexels-thisisengineering-3862623.jpg";
import styles from "./HomePage.module.css";

import Image4 from "../../Images/heating-cooling-stark.jpg";
import Image5 from "../../Images/GPT_Image_1_change_the_color_of_the_pod_to_light_blue_0.png";
import Image6 from "../../Images/natural-disaster-landscape.jpg";

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

import { Link } from "react-router-dom";
import { header } from "framer-motion/client";
import { color } from "framer-motion";
function HomePage() {
  return (
    <div className="home-page">
      <div className={styles.description}>
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
            <div className={styles.homeheading}>
              When the world says impossible, we say let’s do it!
            </div>
            <p className={styles.titile}>
              Immersive Technology and Entrepreneurship Labs (ITEL) aims to make
              India a technology leader in the world, in certain focus areas
              over the next few years.
            </p>
            <p>
              ITEL is a convergence point of ideas and expertise, where
              scientists, start-ups, innovators and passionate youngsters come
              together from all over India to work together and develop
              technology to tackle problems that are seemingly impossible and
              create eco-friendly and scalable solutions that can last for
              another 100 years!
            </p>
            <p>
              India is historically known to have always solved its problems,
              both big and small in its own unique way – the Indian way. We
              strongly believe that by combining our distinctive approach with
              technology, we can solve complex challenges and deliver long-last
              solutions that are suitable for our country and at the same time
              inspire the world.
            </p>
            <p>
              We are energized by our shared belief, and our collective energy
              turns bold vision into reality!
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
              At ITEL, our teams dream big to create a better world – and we
              work hard to make it real. Our tech initiatives are borne out of
              the toughest day‑to‑day challenges faced by millions of Indians,
              with a bold belief that solutions must be purpose‑built to
              transform lives and inspire the world.
            </p>
          </div>
          <br />
          <div className={styles.container}>
            <div class={styles.imagecontainer}>
              <img src={Image4} className={styles.headerimage} />
              <div>
                <div>
                  <img src={Image5} className={styles.headerimage} />
                </div>
                <div>
                  <img src={Image6} className={styles.headerimage} />
                </div>
              </div>
            </div>

            <div>
              <div className={styles.projectname}>HASHTIC – City Transport</div>
              <p>
                HASHTIC is a green, autonomous pod system built on lightweight
                elevated tracks. Designed for comfort and energy efficiency, it
                reduces a 20 km commute from 75 minutes to just 20 minutes while
                ensuring last-mile connectivity.
              </p>
              <br />
              <div className={styles.projectname}>
                Urban Water Logging Mitigation
              </div>
              <p>
                Developing technology-driven solutions to make drainage systems
                smarter through early blockage detection, real-time monitoring,
                and design improvements that enhance rainwater absorption.
              </p>
              <br />
              <div className={styles.projectname}>
                Heating & Cooling Solutions
              </div>
              <p>
                A Sustainable Heating & Cooling Solution that recaptures waste
                heat and cooling, stores it for later use, increasing energy
                efficiency multi-fold while reducing greenhouse gas emissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* panesl4 incubations */}

      <section className={styles.incubations}>
        <div className={styles.description}>
          <div>
            <div className={styles.homeheading}>Incubations</div>
            <div className={styles.projectname}>
              Nurturing Breakthrough Solutions
            </div>
            <p className={styles.techinitiative}>
              Indian youngsters are highly talented and if nurtured will produce
              innovative technologies to take India higher on the global stage.
              Many deep tech startups are already being led by passionate
              youngsters.
            </p>
            <p className={styles.techinitiative}>
              At ITEL, we collaborate with such young and talented individuals
              from across the country. These youngsters are working to create
              high-impact solutions to solve a multitude of big challenges
              facing India, across diverse domains, and we support their
              initiatives.
            </p>
            <p className={styles.techinitiative}>
              We nurture these deep-tech start-ups founded students from
              educational institutions and labs across India and provide them
              with the necessary resources and support them to succeed in their
              mission.
            </p>
          </div>
        </div>
      </section>

      {/* panel 5 incubatees */}
      <section>
        <div className={styles.description}>
          <div className={styles.homeheading}>Incubatees</div>
          <Link to="http://localhost:3000/incubatees">
            <div className={styles.projectswrapper}>
              <div class={styles.projectstrack}>
                <img className={styles.projectcard} src={company2} />
                <img className={styles.projectcard} src={company3} />
                <img className={styles.projectcard} src={company4} />
                <img className={styles.projectcard} src={company5} />
                <img className={styles.projectcard} src={company7} />
                <img className={styles.projectcard} src={thrshullogo} />
                <img className={styles.projectcard} src={kreynAI} />
                <img className={styles.projectcard} src={AIRESQLogo} />
                <img className={styles.projectcard} src={Alphamers} />
                <img className={styles.projectcard} src={ABSIX} />
                <img className={styles.projectcard} src={Vicharak} />
                <img className={styles.projectcard} src={Swappdesign} />
                <img className={styles.projectcard} src={Farmland} />
              </div>
            </div>
          </Link>
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
              If you are a scientist, technologist or an innovator who believes
              in changing the world, partner with us. Join our consortia and
              co‑create scalable, sustainable solutions for the toughest
              challenges — and make our country a leader!
            </p>
            <p className={styles.partnerbody}>
              Write to us at{" "}
              <span style={{ color: "blue", cursor: "pointer" }}>
                connect@itelfoundation.in
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
