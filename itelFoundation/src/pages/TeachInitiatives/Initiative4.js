import React from "react";
import "./Initiatives.css";

function Initiative4() {
  return (
    <div>
      <div className="description">
        <p className="Heading">Flood Mitigation</p>
        <p>
          Increasing GHG emissions are accelerating changes in weather patterns,
          causing erratic and more frequent rainfall. This affects almost all
          cities in India. Waterlogging, loss of life, and infrastructure damage
          have become a recurring problem. This situation is expected to worsen
          further in the future.
        </p>
        <br />
        <p style={{ fontSize: "2.3rem", fontWeight: "bold" }}>
          How do we address this challenge and solve the problem?{" "}
        </p>
        <p>
          Fortunately, there are scientists and start-ups across the country who
          can address various aspects of this growing challenge. However, they
          need to work together to take up the challenging task of eliminating
          waterlogging. Not much can be done about erratic rainfall, but
          certainly ensure that streets are not filled with water.{" "}
        </p>
        <br />
        <p className="subHeading">Our Goal: </p>
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
          ITEL, through its Urban Waterlogging Mitigation Forum has brought
          together scientists, start-ups, and industry players from across the
          country and has formed a consortium to address the problem. The goal
          is to develop and implement a solution in various towns and cities to
          eliminate waterlogging through a systematic approach.
        </p>
        <br />
        <p style={{ fontSize: "2.3rem", fontWeight: "bold" }}>
          How do we do this?{" "}
        </p>

        <p>
          To attain this goal, the forum has devised a structured and
          comprehensive approach to address various aspects of this challenge.
        </p>
        <ol>
          <li>
            <b>Choose the site and connect with the authorities </b>
            <p>
              As the first step, the forum will identify a suitable township or
              zone in the city to kick-start the waterlogging mitigation
              process. The team engages with the city authorities to discuss and
              finalise the details, and procures the necessary permissions to
              begin work.{" "}
            </p>
          </li>
          <li>
            <b>Detailed mapping of the valleys and the slopes </b>
            <p>
              The team maps the zone or the township using data obtained from
              high-resolution satellite and drone images to identify natural
              valleys. This in-depth mapping ensures the area is mapped
              accurately up to 1 meter resolution. These valleys are the areas
              where rainwater will naturally accumulate if not evacuated.{" "}
            </p>
          </li>
          <li>
            <b>Get a detailed drain map with capacity details </b>
            <p>
              Obtain and digitize the full drain map, including the location,
              size, and capacity of the drains. This will help create a baseline
              for assessing the quantity of water that can be evacuated at any
              given time, and mainly during peak rainfall.{" "}
            </p>
          </li>
          <li>
            <b>
              Simulation of water collected and evacuation to create a water
              flow and draining model
            </b>
            <p>
              Build a simulator that will take the data from previous two steps,
              and compute how much water gets evacuated every minute from each
              valley. This will help calculate the excess water that cannot be
              drained off in real-time, leading to waterlogging. Also, estimate
              the extent of groundwater absorption in the area and build it in
              the simulator.{" "}
            </p>
          </li>
          <li>
            <b>Detect and remove blockages </b>
            <p>
              Build, develop, and deploy technology to measure the extent of
              blockages in all drains. Build robotic systems that can enter
              drains and clean up the blockages. Once the drains are clean, the
              actual drainage must match the simulation results described in the
              earlier step, whenever rainfall happens. If that is not the case,
              something is still missing - perhaps the drain is still blocked
              or, the groundwater absorption estimate is inaccurate. Carry out
              required corrections accordingly.{" "}
            </p>
          </li>
          <li>
            <b>Assess the existing groundwater absorption system </b>
            <p>
              Study the current groundwater absorption structures and natural
              points in the chosen area. Identify faulty and broken structures
              that need repair, and rectify them to maximize their
              effectiveness. Also, identify additional ground-water absorption
              structures that can be added.
            </p>
          </li>
          <li>
            <b>Collate recent rainfall and waterlogging data </b>
            <p>
              Collate the rainfall and waterlogging data from the last few
              years, and determine from simulations the extent of drain
              blockages that have led to waterlogging, with the help of advanced
              technologies such as IoT and sensors. Comparing these measurements
              with simulation results obtained earlier will indicate blockages
              in the drains{" "}
            </p>
          </li>
          <li>
            <b>
              Collating historical heavy and abnormal rainfall data for the past
              50 years
            </b>
            <p>
              Collate data and identify the worst-case rainfall events from the
              past 50 years. Simulate scenarios of varied rainfall intensities
              ranging from 30 to 50 percent hike and assess rainfall peak
              durations for two, six, and twenty-four hours, and up to three
              days. Figure out whether all water can be evacuated, assuming
              there is no blockage in the drains
            </p>
          </li>
          <li>
            <b>Enhance water absorption capacity </b>
            <p>
              Plan and build improved water absorption structures to supplement
              the existing man-made and natural absorption systems. Estimate how
              much additional capacity can be absorbed, and confirm these
              estimates with simulations.{" "}
            </p>
          </li>
          <li>
            <b>Plan and build additional drains </b>
            <p>
              If both simulations and real-world data show that water during
              peak rainfall cannot be drained, even after restoring drains and
              groundwater absorption systems, then additional measures such as
              the creation of new drains and/or absorption points must be
              constructed. The simulator will provide prior estimates of
              water-drainage during heavy rainfall for each additional drain.
              This will help plan the location and capacity of new drains{" "}
            </p>
            <p>
              Post implementation, both rainfall and waterlogging require
              continuous monitoring to ensure complete waterlogging mitigation.{" "}
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Initiative4;
