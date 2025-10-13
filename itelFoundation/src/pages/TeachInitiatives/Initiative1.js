import React from "react";
import "./Initiatives.css";
import HashticVideo from "../../Images/video.mp4";
function Initiative1() {
  return (
    <div>
      <div>
        <div className="description">
          <div className="Herosection">
            {/* <div className="herohead">
              Is it possible to travel 20 kms in 20 mins in metropolitan cities
              in India?
              <br />
            </div> */}

            <div>
              <p className="Heading">The Urban Commute Chaos:</p>
            </div>
          </div>
          {/* <p className="Heading">HASHTIC</p> */}
          <br />

          <div>
            <p>
              People commuting for work in most large cities of India face
              heavily congested roads. Even a 15 Km ride typically takes more
              than an hour. This means commuting to work and back consumes two
              to two and a half hours every day. For most people in the city
              this has become an extremely tiring everyday reality.
            </p>
            <p>
              Our team of Scientists, experts on road transportation & unit
              economics along with sustainability teams are working on a
              solution using deep tech that will work for the demands of the
              rapidly growing Indian economy.
            </p>
            <p>
              The worst part is that nobody seems to have a solution. All
              attempts made so far have only marginally improved the situation
              temporarily, only to deteriorate back in a short time.
            </p>
            <p>
              This seems like an impossible problem to solve, and that is
              precisely why ITEL’s team took up this challenge. Our goal is
              <b> simple and bold</b>.
            </p>

            <br />

            <div>
              {/* <p className="Heading">Our goal: </p> */}
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
                “Make the 15 km commute possible in 20 minutes, from anywhere to
                anywhere within the city. For a longer distance of 20 km, the
                commute time should be 24 – 25 minutes, and so on”
              </p>
            </div>
            <br />
            <div>
              <p className="Heading">The 20 Minute Commute Goal:</p>

              <p>
                At ITEL, we understood that to address this challenge, what is
                needed is not an alternate solution but alternate thinking.
                Public infrastructure must be built to last, so the design
                should be for a system for the next hundred years
              </p>
              <div>
                {" "}
                <p>Therefore, we set out to build a solution, that must</p>
                <ul>
                  <li>be absolutely green.</li>
                  <li>be highly energy efficient</li>
                  <li>be buildable in existing cities</li>
                  <li>be able to handle peak traffic of today and tomorrow</li>
                  <li>be comfortable</li>
                  <li>be affordable</li>
                </ul>
                <p>
                  <b>
                    This was clearly an impossible challenge and exactly the
                    kind ITEL was set up to solve .{" "}
                  </b>
                  Scientists from multiple institutes along with some start-ups
                  come together as a consortium to find a solution for such
                  impossible challenges.
                </p>
                <p>
                  The process began with conceptual brainstorming. The team
                  studied the cities closely, which led to the insight that most
                  traffic seemed to flow on four or five major north-south and
                  four to five major east-west roadsin the cities. This
                  convergence of significant amount of traffic in a few roads
                  led to congestion leading to long commute hours and making the
                  roads impossible to travel.
                </p>
                <p>
                  The study also led the team to realise that there are hundreds
                  of smaller roads, streets and lanes in the cities, and the
                  solution lies in leveraging them effectively.
                </p>
                <p>
                  This realisation led to the birth of{" "}
                  <b>
                    HASHTIC - High-Throughput Autonomous Sustainable Human
                    Transportation for India’s next Century.
                  </b>
                </p>
              </div>
            </div>
            <br />
            <div>
              <p className="subHeading">What is HASHTIC? </p>
              <p>
                HASHTIC is a breakthrough urban transport system designed to cut
                city commute times drastically.
              </p>
              <p>
                When the team decided to utilise narrow streets and lanes
                effectively, they realised that they had to come up with a
                solution that is elevated and narrow for easy navigation.
              </p>
              <p>
                This led to the concept of a solution that is both{" "}
                <b>elevated and narrow</b>, built on these smaller streets. The
                team designed <b>autonomous pods</b> just 0.8 meters wide,
                perfectly sized to carry two people, sitting back to back.
              </p>
              <p>
                Recognising that the intersections are the key cause for traffic
                congestions in city roads, the team created a solution entirely
                intersection-free by incorporating two levels of elevated
                tracks, with one set of parallel lines running at about 8 meters
                height from ground-level and another at about 11 meters. So,
                with no real intersections, no traffic-lights, and therefore no
                no stopping
              </p>
              <p>
                The HASHTIC network would be a dense 700 x 700-meter grid,
                mapping the entire city to provide efficient and accessible
                transportation for commuters.
              </p>
            </div>

            <br />
            <div>
              <p className="subHeading">How HASHTIC Works?</p>
              <p>
                HASHTIC combines autonomous pods, elevated tracks, and a
                centralised AI-powered control system to deliver seamless city
                commutes. The entire system is designed for speed, efficiency,
                accessibility and ease of use.
              </p>
              <p>
                To maximize the efficiency of this breakthrough solution, the
                pods are designed to
              </p>
              <ul>
                <li>
                  run on 100% <b>green electricity</b>
                </li>
                <li>
                  run on rails, since the friction losses with rails is
                  one-tenth that of roads
                </li>
                <li>
                  <b>platoon</b>, when they are moving in the same direction,
                  thus reducing the aerodynamic resistance and also reducing the
                  energy consumption per pod
                </li>
              </ul>
              <p>
                To avoid the signalling delays, congestion and risks created by
                track switching, HASHTIC uses an innovative design that
                incorporates a switching mechanism within the pods to
                track-switch without delays, while the tracks themselves remain
                passive.
              </p>
              <p>
                The design also includes two stations at every virtual crossing
                built into existing buildings of the grid allowing easy access
                to the commuters, thereby basically solving the first- and
                last-mile challenges of the traditional mass transit. With 8
                stations in every 700 x 700 metre square, commuters have access
                to stations within 300 to 400 meters of walking
              </p>
              <p>
                Ride booking is facilitated through a mobile app that directs
                commuters to one of the nearby station, where a pod will be
                waiting to board. The pods move continuously to reach their
                destination without any stops.
              </p>
              <p>
                The AI-powered centralised control system that assigns routes to
                every pod ensures that no route link exceeds 20% of its capacity
                to avoid congestion in any link of the vast grid.
              </p>
              <p>
                This allows the pods to move at an average speed of 80 kmph,
                ensuring that a 15 km trip is completed in 20 minutes, and a 20
                km trip in 24 minutes, 25 km trip in 27 minutes, and so on,
                including the 3 or 4-minute walk to and from origin and
                destination stations .
              </p>
              <p>
                The most important target, of course, is to get the person
                comfortably from home to office, so the pod is being designed
                with air-conditioning for human comfort. Another important
                target is affordability so HASHTIC system will be accessible for
                everyone. In a preliminary cost estimate, HASHTIC rides will
                cost about the price of riding a two-wheeler.
              </p>
            </div>
            <br />
            <div>
              <p className="subHeading">
                From Prototype to Trial – HASHTIC’s Journey So Far:
              </p>
              <p>
                The team carried out extensive simulations, which confirmed
                feasibility. Early cost estimates also indicate that HASHTIC can
                be built on low cost, making it feasible for large scale
                adoption.
              </p>
              <p>
                As the first step, the team built a small-scale prototype, which
                includes autonomous pods and two levels of tracks allowing the
                pod to turn without traditional track switching. This prototype
                was installed at the IIT Madras Research Park, where multiple
                versions of prototype pods were tested to validate the concept.
              </p>
              <p>
                As the next step, the full-scale pod design has begun and an
                expanded consortium of experts has been formed with 50 to 60
                engineers from ITEL, CEET IIT Madras, IIT Tirupati, IIT
                Hyderabad and Centre of Excellence Trivandrum. In addition, we
                have also collaborated with leading industry players like L&T
                and Bharat Forge. Detailed design and costing are currently in
                progress.
              </p>
              <p>
                Ground-level full-pod testing is expected to commence this year
                (2025). ITEL has entered into a partnership with Sri City, a
                special economic zone located near Chennai for full-scale pilot
                trials.
              </p>
              <p>
                During trials, the team will simulate all possible scenarios to
                test the durability, speed and safety to ensure long-lasting and
                reliable service.
              </p>
            </div>
            <br />
            <div>
              <p className="subHeading">The Road Ahead:</p>
              <p>
                While the team has achieved significant milestones so far, the
                next steps will focus on testing the safety and reliability of
                the system on full scale to ensure smooth integration into
                existing cities.
              </p>
              <p>
                For HASHTIC to succeed, the solution must not only deliver on
                time and cost but also be easily embraced by citizens as a
                transport option that makes a clear and positive difference in
                their lives.
              </p>
              <p>
                Once HASHTIC pilot runs succeed, this system will be deployed
                with assistance from build-and-operate partners across the
                nation.
              </p>
            </div>
            <br />
            <div>
              <video
                width="100%"
                controls
                controlsList="nodownload"
                disablePictureInPicture
              >
                <source src={HashticVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <br />
            <div>
              <p className="subHeading">Partner Institutions </p>
              <p>
                <b>Details of partner institutions for solving the problem</b>
              </p>
              <p>
                ITEL brings together a consortium of institutions who work
                alongside the ITEL team to enable a solution for complex
                challenges and deliver long-lasting solutions using Deep Tech.
              </p>
              <p>
                <b>The partner institutions for HASHTIC are:</b>
              </p>
              <p className="subHeading">Academic Partners:​ </p>
              <ul>
                <li>
                  <b>IIT Hyderabad​ </b>
                </li>
                <li>
                  <b>IIT Madras​ </b>
                </li>
                <li>
                  <b>IIT Tirupati​ ​​ </b>
                </li>
                <li>
                  <b>CoE Trivandrum</b>
                </li>
              </ul>

              <p className="subHeading">Industry Partners:​ </p>
              <ul>
                <li>
                  <b>L&T Construction Division​ ​ </b>
                </li>
                <li>
                  <b>L&T Railway Division​ ​ </b>
                </li>
                <li>
                  <b>​Triox Mobility​  ​​ </b>
                </li>
                <li>
                  <b>Uptycs​ </b>
                </li>
              </ul>
              <br />
              <p style={{ fontStyle: "italic" }}>
                We invite institutions to become a part of our consortia, where
                together we create scalable and sustainable solutions for the
                toughest and most impossible challenges, thus making India a
                Global Tech leader!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Initiative1;
