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
          <p>
            ITEL is committed to transforming India into a{" "}
            <b>global technology leader </b> in at least 10 areas over the next
            decade, by harnessing its rich talent pool, innovative spirit, and
            its vast R&D ecosystem.{" "}
          </p>
          <p>We aim to: </p>
          <ul>
            <li>
              Support research and innovation across R&D labs, educational
              institutions, and startups.
            </li>
            <li>
              Foster industry-academia collaborations for the commercialization
              of breakthrough technologies.{" "}
            </li>
            <li>
              Build a sustainable ecosystem where Indian talent and businesses
              thrive globally.{" "}
            </li>
          </ul>
          <div>
            ITEL is a section 8 (not for profit) company started by a group of
            leaders and founders of some IT companies.
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
          {/* Legacy */}
          <br />
          <div>
            <p className="Heading">Legacy </p>
            <p>
              Inspired by early efforts in technology commercialization at IIT
              Madras, ITEL builds upon the success of initiatives like the IITM
              Research Park and its affiliated startups. From enabling
              affordable telephony to revolutionizing digital payments, these
              initiatives showcase the transformative impact of
              industry-academia collaboration and bold innovation.{" "}
            </p>
          </div>
          {/* join us */}
          <br />
          <div>
            <p className="Heading">Join Us </p>
            <p>
              The ITEL effort is urgently needed in India. We believe we can
              leverage the strengths of India: its scientists in public
              institutions, its large number of youngsters and its highly
              motivated start-ups to create solutions to uniquely Indian
              challenges as well as make significant advancements in global
              technology. By partnering with the industry and utilizing
              government and private efforts, we can, build India and achieve
              technology leadership in multiple areas. However, ITEL is only a
              vehicle and an enabler; we need like-minded leaders and
              persevering entrepreneurs to join us in this journey. Come work
              with us!
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
                    <p className="Heading">Background and Rationale</p>
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
                        Over the last four decades, India has emerged as an
                        economic powerhouse with an average GDP growth rate of
                        7%. Our large, youthful population and vast market at
                        affordable prices provide a strong foundation for
                        innovation. India’s contributions to IT services, space
                        technology, and digital public goods like Aadhaar and
                        UPI showcase the nation’s potential to lead globally.{" "}
                      </p>
                      <p>
                        However, despite these successes, India remains heavily
                        dependent on imported technology and components for its
                        manufacturing and innovation needs. ITEL is founded to
                        leverage India's talent, resources, and creativity to
                        drive indigenous technological advancements.
                      </p>
                      <br />
                      <div>
                        <p className="Heading">
                          Current State of India’s Research and Development{" "}
                        </p>
                        <p>
                          India has a large number of government-funded R&D
                          institutions. Educational institutes like the Indian
                          Institutes of Technology (IITs), the Indian Institute
                          of Science (IISc), the Indian Institutes of Science
                          Education and Research (IISERs), the National
                          Institutes of Science Education and Research (NISERs),
                          the Indian Institutes of Information Technology
                          (IIITs), and the National Institutes of Technology
                          (NITs), as well as several reputed state government
                          institutions, have driven R&D efforts over the years.
                          Some state government institutions, like the Institute
                          of Chemical Technology, Mumbai (ICT), would compete
                          with the best. Several private educational
                          institutions have also established R&D facilities, and
                          some of them, like the Birla Institute of Technology
                          and Science (BITS) and a few IIITs (setup in
                          public-private partnership mode), have strong R&D. The
                          government-funded Council of Scientific and Industrial
                          Research (CSIR) labs conduct significant R&D and host
                          a large number of scientists. Several ministries, such
                          as the Department of Science and Technology (DST), the
                          Department of Biotechnology (DBT), the Department of
                          Earth Sciences, and the Ministry of Agriculture, have
                          established multiple R&D centers across the country.
                          The Defence Research and Development Organisation
                          (DRDO) also has several R&D labs. The Department of
                          Space and the Department of Atomic Energy are
                          particularly strong, with multiple R&D labs and have
                          made quite a significant impact in translating
                          technologies. The Department of Atomic Energy also has
                          R&D centres, such as the Tata Institute of Fundamental
                          Research (TIFR) and National Centre for Biological
                          Sciences (NCBS), Bangalore. There are other
                          departments that have one or two R&D institutions
                          under their fold. In total, there may be more than
                          50,000 scientists working in these institutions across
                          India. Many of these institutions have performed well
                          and have supported the industry over the years.
                        </p>
                        <p>
                          However, these R&D institutions have so far not been
                          able to build a comprehensive framework that enables
                          India to fully control its destiny—except, perhaps, in
                          the fields of space and atomic energy, where
                          technology denial has driven the country to develop
                          its own technologies. Indian industry still imports
                          most of its technology, as well as components and
                          subsystems used for manufacturing. Over the years,
                          there have been occasional serious efforts to
                          indigenize the required components, particularly to
                          reduce costs. However, when it comes to adopting the
                          next generation of technology, India has remained
                          dependent on imports. The R&D labs mentioned above do
                          not contribute significantly to India's manufacturing
                          sector, especially in high-tech areas.
                        </p>
                        <p>
                          Over the last thirty-five years, many industries in
                          India have also invested in R&D. However, as mentioned
                          earlier, the bulk of their effort is in adapting
                          imported technologies. They do not engage in
                          significant R&D collaborations with educational
                          institutions and government labs. This lack of
                          collaboration hinders the translation of research into
                          commercial products and solutions. There are a few
                          exceptions in the areas of technology denial and
                          restricted access, where, Indian R&D has indeed
                          performed significantly better. In these cases, the
                          need to develop indigenous solutions has driven more
                          effective collaboration between the industry and the
                          country's R&D ecosystem.
                        </p>
                        <p>
                          In recent times, multinational companies have been
                          setting up large R&D labs in India. They employ a
                          significant number of R&D personnel, especially in the
                          software sector. However, these labs primarily
                          function as service centers for global R&D. Some of
                          them work on breakthrough technologies, but product
                          definition and management remain under the leadership
                          abroad.
                        </p>
                      </div>
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
                    <p className="Heading">Experiences</p>
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
                      <p className="Heading">
                        Early efforts towards Technology Commercialisation{" "}
                      </p>

                      <div>
                        <p>
                          In the 1980s, a group of young faculty at the Indian
                          Institute of Technology Madras (IIT Madras) was
                          troubled by the state of India's R&D efforts and the
                          lack of industry-academia collaboration in developing
                          new technologies. They noted that India was merely
                          importing all its technology and stamping out products
                          for the Indian market, with many of these products
                          being affordable only to a small section of the Indian
                          population. As a result, the market was small, and
                          most people were denied the fruits of modern
                          technology.
                        </p>
                        <p>
                          For instance, in the 1980s and 1990s, one had to wait
                          for eight years to get a telephone. The reason was
                          that the cost of adding a line was ₹40,000 at the
                          time. With an interest rate of 15%, a depreciation
                          rate of 12%, and an operation and maintenance cost of
                          8%, a telephone bill had to be at least ₹1,200 per
                          month to provide a positive return on investment. Less
                          than 4% of Indian households could afford such bills
                          in the 1980s. Therefore, the telephone had to be
                          heavily subsidized by the government, leading to the
                          long waiting list of 8 years. The IIT Madras faculty
                          worked out that the cost of a telephone line needed to
                          be brought down to ₹10,000 per line, so that a monthly
                          revenue of even ₹250 would make the investment
                          break-even. The only way to achieve this was to use
                          Wireless in the Local Loop (WiLL), as the copper-based
                          local loop was costing about ₹25,000 per line. IIT
                          Madras and its incubated company Midas Communication
                          Technologies, created the corDECT WiLL technology,
                          which brought the cost per line down to the target
                          number. By 2001, India had ten million telephone lines
                          (primarily wireless), up from about 5 million a decade
                          earlier. The cost of the telephone infrastructure was
                          further brought down to about ₹2,000 per line,
                          allowing India to reach 1.2 billion phones. IIT Madras
                          created a consortium of wireless faculty in various
                          IITs, and led the development of wireless telephony,
                          getting their patents into the international
                          standards. It helped Tejas Networks, a company
                          promoted by its faculty and alumni, to develop and
                          deploy 4G/5G infrastructure technology. Tejas Networks
                          today is one of the six companies in the world (along
                          with Nokia, Ericsson, Huawei, ZTE, and Samsung) that
                          own 5G infrastructure technology.
                        </p>
                        <p>
                          Similarly, in the early 2000s, IIT Madras-incubated
                          company, Vortex Engineering, took an initiative to
                          bring down the cost of an ATM from ₹800,000 to about
                          ₹150,000, making its deployment even in small towns
                          and villages financially viable. IIT Madras also
                          contributed significantly to the digitalization of
                          banking and financial infrastructure. Noting that the
                          cost of withdrawal of ₹5,000 from a bank teller was
                          ₹70 in 2005, while the cost from an ATM was ₹12 and
                          the cost of a credit card transaction was only ₹2 for
                          the bank, IIT Madras faculty proposed that the card
                          infrastructure be expanded. To prevent credit card
                          fraud prevalent worldwide, they suggested the use of
                          an SMS for transaction confirmation, leading to the
                          birth of the One-Time Password (OTP) to secure
                          transactions. Their next proposal was to introduce
                          mobile payments for values as small as ₹10. IIT Madras
                          faculty created and led the Mobile Payment Forum of
                          India (MPFI)[1], a partnership between young
                          technologists, banks, and mobile operators, and roped
                          in the Reserve Bank of India (RBI) to turn this dream
                          into reality. After some twists and turns, the Unified
                          Payments Interface (UPI) was born, and it is now the
                          largest and finest digital financial transaction
                          infrastructure in the world.
                        </p>
                      </div>
                    </div>
                    <br />
                    <div>
                      <p className="Heading">IITM Research Park Initiative </p>
                      <p>
                        All the efforts to drive technology development and
                        industry-academia collaboration at IIT Madras (IITM)
                        were the result of a concerted focus on bridging the gap
                        between research and commercialisation. Recognizing
                        this, IITM took the initiative of setting up the IITM
                        Research Park (IITMRP) and the IITM Incubation Cell
                        (IITMIC) in 2008 and 2011 respectively. These
                        organizations were created like startups, with seed
                        money as grants, similar to any new venture. IITMRP also
                        borrowed up to ₹400 crores from banks and repaid it with
                        interest over ten years. Today, IITMRP generates an
                        annual cash profit of ₹60 crores and has facilitated
                        many successful industry-academia collaborations. IITMRP
                        has linked many of its deep-tech startups to the R&D
                        work of its faculty members, with about ten faculty
                        members founding 350 startups incubated by IITMIC, with
                        about 80% surviving over the years. The current value of
                        these incubated companies is estimated at ₹45,000
                        crores. IITMIC owns 0.5% to 1% equity in these companies
                        (after dilution) and periodically cashes out on these
                        holdings
                      </p>
                    </div>

                    <br />
                    <div>
                      <p className="Heading">Success Formula:</p>
                      <p>
                        This combination of the faculty's research expertise and
                        the startups' practical, market-oriented approach has
                        been key to the success. IITMRP also connects its
                        startups with established companies, who, while not
                        taking the same high risks as the startups, are willing
                        to help, partner, and even acquire the successful
                        startups. Examples include Tata's investment in Tejas
                        Networks and HCL's investment in GUVI. This has helped
                        scale the products emerging from Indian R&D efforts.{" "}
                      </p>
                      <p>
                        In contrast to the established R&D efforts in academic
                        institutions and companies, deep-tech startups in India
                        have done particularly well in technology and product
                        development during the recent years. For these startups,
                        R&D is invariably linked to translation and
                        commercialisation. Startups are not constrained by
                        government funding procedures and audit requirements.
                        They are funded by venture capitalists who benefit only
                        when the startup scales its business and becomes
                        profitable. The founders of these startups often work
                        long hours, with a "do or die" attitude, willing to
                        learn from failure, reposition their technology and
                        strategies, and get going again.
                      </p>
                      <p>
                        Immersive Technology and Entrepreneurship Labs (ITEL)
                        has adopted this success formula of the IITM Research
                        Park (IITMRP) and is driven to scale these efforts
                        across{" "}
                        <b>
                          India The objective is for India to achieve technology
                          leadership in at least ten areas over the next ten
                          years.
                        </b>
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
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{ fontSize: "3rem", color: "#087f5b" }}
                  >
                    <p className="Heading">Key Insights</p>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    {/* <p id="insights" className="Heading">
                    Key Insights
                  </p> */}
                    <div>
                      <p className="Heading">
                        Directed research and Problem-solving:{" "}
                      </p>
                      <p>
                        To achieve the goal of technology leadership in at least
                        ten areas over the next ten years, ITEL has identified a
                        few deep-tech opportunities and continues to explore
                        several others. ITEL leverages India's existing R&D
                        labs, and partners with industries eager to reduce their
                        dependence on imported technology{" "}
                      </p>
                      <p>
                        ITEL also recognizes that many of the young researchers
                        in R&D labs and institutes are exceptionally talented.
                        They just need the right motivation and support to
                        translate their research into tangible products and
                        solutions. Hence, it supports and nurtures young
                        entrepreneurs with a "do or die" attitude through
                        incubations/co-incubations and mentoring.
                      </p>
                    </div>
                    <br />
                    <div>
                      <p className="Heading">Empowering Talent: </p>
                      <p>
                        ITEL also recognizes the immense potential within the
                        pool of nearly 1 million engineering graduates that
                        India produces every year. While the quality of
                        education may be uneven, ITEL estimates that around 30%
                        of these graduates are highly capable and driven. With a
                        little bit of support, motivation, and training in the
                        right ecosystem, these young engineers can flourish and
                        become high-quality technical resources. These young
                        graduates can then work alongside established R&D
                        personnel and startups to tackle seemingly impossible
                        challenges and create breakthrough technologies.{" "}
                      </p>
                    </div>
                    <br />
                    <div>
                      <p className="Heading">Partnering with Industry: </p>
                      <p>
                        ITEL also recognizes the immense potential within the
                        pool of nearly 1 million engineering graduates that
                        India produces every year. While the quality of
                        education may be uneven, ITEL estimates that around 30%
                        of these graduates are highly capable and driven. With a
                        little bit of support, motivation, and training in the
                        right ecosystem, these young engineers can flourish and
                        become high-quality technical resources. These young
                        graduates can then work alongside established R&D
                        personnel and startups to tackle seemingly impossible
                        challenges and create breakthrough technologies.{" "}
                      </p>
                    </div>
                    <br />
                    <div>
                      <p className="Heading">Partnering with Industry: </p>
                      <p>
                        ITEL also acknowledges that the founders of startups in
                        India are eager to take on leadership roles in
                        technology and business, not just within the country but
                        globally. Furthermore, ITEL recognizes that many
                        industries in India want to reduce their dependence on
                        imported technology and develop indigenous capabilities.
                        However, they lack the knowledge and expertise to create
                        an ecosystem conducive to technological development and
                        innovation on their own. ITEL aims to{" "}
                        <b>leverage this existing pool</b> of talented
                        researchers, young graduates, and ambitious startups to
                        co-create breakthrough technologies. By partnering with
                        these stakeholders and industries, ITEL seeks to{" "}
                        <b>
                          help India achieve global leadership in these
                          technological domains.
                        </b>
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
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                    style={{ fontSize: "3rem", color: "#087f5b" }}
                  >
                    <p className="Heading">Future</p>
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    {/* <p id="future" className="Heading">
                    Future
                  </p> */}
                    <div>
                      <p>
                        With its endeavour to help India achieve global
                        technological leadership, ITEL will choose around 25
                        problems or areas to work on. It will specifically focus
                        on the big challenges facing India and identify
                        technologies that could potentially solve these
                        problems. India's high population density and low-income
                        demographics require unique approaches and solutions,
                        not perceived, or developed elsewhere in the world. By
                        solving these quintessentially Indian problems, ITEL
                        aims to help the country attain technology leadership.{" "}
                      </p>
                      <p>
                        ITEL will also work in other areas that are well-known
                        globally, such as developing technologies to combat
                        climate change. Even in these cases, India's unique
                        circumstances may lead to different starting points and
                        solutions compared to the rest of the world.
                        Additionally, ITEL will encourage Indian researchers to
                        directly compete with the best global talent in select
                        technology domains.
                      </p>
                      <p>
                        ITEL will choose its focus areas over time. In each
                        case, it will assess the existing strengths and
                        capabilities that India already has in that domain. It
                        will look for bright young minds ready to take
                        leadership in each area. It is important to note that
                        for some of the focus areas, multiple and independent
                        efforts may be required. The exact sources of success
                        and the pathways to scalable solutions cannot be
                        predetermined. Therefore, ITEL may enable, support, and
                        work with multiple independent groups concurrently in
                        the same area, to increase the chances of breakthrough
                        innovations.
                      </p>

                      <ol>
                        <li>
                          UPI - The Untold Story | Full Movie (2024) -
                          <a
                            href="https://www.youtube.com/watch?v=xLw-YaYAhPU"
                            style={{ paddingLeft: "1.2rem" }}
                          >
                            Watch Here
                          </a>
                        </li>
                      </ol>
                    </div>
                    <br />
                    <div>
                      <p className="Heading">Potential Focus Areas </p>
                      <p>
                        While our areas of focus evolve, we are exploring the
                        following high-impact domains:{" "}
                      </p>
                      <ul>
                        <li>
                          <b>Transportation Technologies:</b> Urban mobility
                          that is autonomous, fast, affordable and green.
                        </li>
                        <li>
                          <b>Sustainable Technologies: </b>Heating, cooling, and
                          green construction solutions.
                        </li>
                        <li>
                          <b>Advanced Manufacturing:</b> Electric motors, energy
                          storage, and next-gen materials.
                        </li>
                        <li>
                          <b>Climate Change Solutions:</b> Affordable and
                          scalable renewable energy innovations.
                        </li>
                        <li>
                          <b>Fintech for Inclusion:</b> AI-driven solutions to
                          enhance access to financial resources for underserved
                          communities.
                        </li>
                        <li>
                          <b>Assistive Technologies:</b> Affordable solutions
                          for geriatrics and people with disabilities.
                        </li>
                        <li>
                          <b>Cutting-Edge Research:</b> Brain mapping,
                          micro-nuclear reactors, and quantum computing.
                        </li>
                      </ul>
                      <br />
                      <p>
                        The leadership would be comprehensive, such that India
                        designs, develops, and owns these technologies and
                        manufactures them. These will be the technologies of the
                        future and would drive the world towards sustainability.
                        By focusing on these areas, India has the potential to
                        not only address its own challenges but also play a
                        leadership role in shaping the global technological
                        landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div style={{ marginTop: "50px" }}>
              {/* content for Background and Rationale */}

              {/*  Experiences content */}

              {/*   Key Insights */}
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
