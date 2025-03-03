import React from "react";
import "./Initiatives.css";
function Initiative1() {
  return (
    <div>
      <div>
        <div className="description">
          {/* <p className="Heading">HASHTIC</p> */}
          <br />
          <p className="subHeading">Urban Mobility</p>
          <div>
            <p>
              {" "}
              In the congested cities of India (like Bangalore, Mumbai, and
              Chennai, among others), it currently takes over 2 hours of commute
              every day from home to office and back. As more and more migration
              take place from rural areas to these cities, the problem will only
              get worse, with about 350 million vehicles expected in Indian
              cities by 2050, as opposed to 101 million vehicles now.{" "}
            </p>
            <p>Two Important questions we need to ask: </p>
            <ol>
              <li>
                Is this the future of India, where many people spend such travel
                time everyday just commuting?{" "}
              </li>
              <li>
                What can be done to cut the current travel time of about 75
                minutes for a 15 km journey to just 20 minutes?
              </li>
            </ol>
            <br />
            <div>
              <p className="subHeading">The Solution</p>
              <p>
                At IIT Madras (IITM) Research Park, we have come out with a
                solution termed “
                <b>
                  High-throughput Autonomous Sustainable Human & Goods Transport
                  for India’s next century” (HASHTIC),
                </b>{" "}
                which could be the answer to these questions.{" "}
              </p>
              <p>
                HASHTIC involves personalized PODS that provide a transport
                which is:{" "}
              </p>
              <ul>
                <li>Comfortable</li>
                <li>Highly energy-efficient</li>
                <li>Affordable </li>
                <li>using only Green Electricity</li>
                <li>built on existing city infrastructure</li>
              </ul>
              <p>
                The autonomous PODS travel on a grid-like unidirectional rail
                network, on existing roads, with two separate lines, say
                North-South and East -West, at different heights, without any
                crossings.{" "}
              </p>
            </div>
            <br />
            <div>
              <p className="subHeading">Nation-wide Goods Transport </p>
              <p>
                As India moves towards a Thirty Trillion Dollar economy over the
                next twenty-five years, India's consumption would increase
                significantly. This would necessitate goods transport across the
                length and breadth of India to increase by at least ten times.
                Today, most goods are carried on trucks (Goods transport by
                Indian Railways is only about 18% of the total), and it takes
                four to five days when transported across India. It is believed
                that CO2 emissions from freight transport are likely to increase
                by 451% by 2050.
              </p>
              <ul>
                <li>How will we scale up? </li>
                <li>
                  The goal will be to transport ten times the goods in less than
                  24 hours. Will the long-distance trucks become electric?{" "}
                </li>
                <li>
                  The battery required would be too large. Will they be driven
                  by Green Hydrogen?{" "}
                </li>
                <li>The cost is likely to be very high. </li>
                <li>
                  At the same time, where will we build roads for such massive
                  transport increase?
                </li>
                <li>
                  Can the goods really be delivered across the country in 24
                  hours if electric trucks are used?
                </li>
              </ul>
            </div>

            <br />
            <div>
              <p className="subHeading">The Solution</p>
              <p>
                {" "}
                The HASHTIC concept discussed earlier could potentially be
                enhanced to a HASHTIC-GOODS transport system. This would involve
                autonomous Wagons instead of trucks, travelling at about 200
                kmph on special rails. The rail network could be built at a
                height on existing highways, driven by green electricity and
                consuming a minimum amount of energy, as the wagons would be
                cascaded to minimize aerodynamic resistance.
              </p>

              <p>
                The East-West and North-South lines will be at different heights
                and would not cross each other to ensure no stoppage and no
                congestion. The Network will be from a grid of 100 km×100 km
                with stations at each cross-point, from where the goods will be
                moved by electric trucks to their final destinations.
              </p>
              <p>
                This solution will be highly cost-effective, and its design,
                development, and implementation would propel India to technology
                Leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Initiative1;
