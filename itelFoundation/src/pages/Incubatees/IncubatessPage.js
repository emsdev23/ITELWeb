import React from "react";
import Incubatees from "./Incubatees";

function IncubatessPage() {
  return (
    <div>
      <div
        style={{
          marginTop: "15rem",

          marginLeft: "6rem",
          marginRight: "6rem",
          fontSize: "2rem",
          fontFamily: "serif",
          lineHeight: "3.2rem",
        }}
      >
        <div className="herohead">
          Can start-ups help in solving India’s complex and toughest national
          challenges?
          <br />
        </div>
        <p>Yes. At ITEL, we believe that is possible.</p>
        <p>
          That’s why we nurture vibrant young innovators with mentorship and
          resources - helping them transform their innovative ideas to impactful
          businesses. Our Incubatees are passionate deep-tech start-ups,
          converting bold ideas into affordable, scalable and sustainable
          solutions.
        </p>
        <br />
        <div>
          <p className="Heading">Nurturing deep-tech start-ups!</p>
          <p>
            At ITEL, we collaborate with young and talented individuals from
            across the country. These youngsters are working to create
            high-impact solutions to solve a multitude of big challenges facing
            India.
          </p>
          <p>
            We nurture these deep-tech start-ups founded by students from
            educational institutions across India and help them succeed in their
            mission.
          </p>
          <p>
            ITEL’s Incubation Program not only provides these start-ups with
            easy access to industry stalwarts, collaboration with scholars from
            premium educational institutions, and advanced R&D facilities from
            across the country, but also helps create and nurture an
            entrepreneurial mindset and imparts the necessary training and
            discipline through the program to grow them from ideas to successful
            business ventures.
          </p>
          <p>
            We help young innovators to accelerate their journey from a bright
            idea to a business delivering impact to society and the country at
            large
          </p>
          <br />
          <p className="Heading">Our Incubation Process!</p>
          <p>
            ITEL’s Incubatees Enrolment process is simple and transparent and
            designed to onboard talented young innovators swiftly and
            efficiently.
          </p>
          <p>
            We accept applications on a rolling basis through email.
            Applications received are screened by the ITEL’s technical team, and
            based on their feedback, a meeting is scheduled with the Chair. Once
            the start-ups are chosen by ITEL for incubation, their ideas are
            presented to the incubation committee for a critical evaluation, and
            final selection.
          </p>
          <p>
            Chosen start-ups are onboarded and supported through ITEL’s in-house
            grant (where applicable) and a well-structured incubation program
            that encompasses mentoring, nurturing and monitoring
          </p>
          <p>
            This unique approach built by ITEL ensures that every start-up is
            provided the much-needed technical strength, financial assistance
            and the right resource capabilities to build their innovative ideas
            into viable and scalable solutions.
          </p>
          <p>
            At ITEL, we are incubating a diverse set of deep-tech start-ups to
            address toughest large-scale challenges. Our incubation pool has a
            diverse set of talented youngsters working fields such as space,
            healthcare, semiconductors, clean energy, robotics, language
            technologies etc.
          </p>
        </div>
      </div>
      <Incubatees />
      <br />
      <div
        style={{
          marginTop: "5rem",

          marginLeft: "6rem",
          marginRight: "6rem",
          fontSize: "2rem",
          fontFamily: "serif",
          lineHeight: "3.2rem",
        }}
      >
        <p className="Heading">How to join ITEL’s Incubation Program?</p>
        <p>
          If you are a deep-tech start-up working in addressing a large-scale
          complex challenge, then we welcome you to be a part of ITEL’s
          incubation program. To apply write to us at{" "}
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
        </p>
      </div>
    </div>
  );
}

export default IncubatessPage;
