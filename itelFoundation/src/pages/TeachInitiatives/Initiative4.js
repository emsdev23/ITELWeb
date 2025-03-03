import React from "react";
import "./Initiatives.css";

function Initiative4() {
  return (
    <div>
      <div className="description">
        <p className="Heading">Flood Mitigation</p>
        <p>
          Flooding happens when rainwater exceeds the drainage system’s
          capacity, causing water to pool in streets, homes, and public spaces.
          The situation is getting worse because of climate change, rising
          global temperatures lead to more extreme rainfall, and overwhelming
          urban drainage. Cities are growing fast, but their drainage systems
          remain outdated, making them unable to handle heavy rains, leading to
          frequent urban flooding.
        </p>
        <p>Is this an unsolvable problem? </p>
        <br />
        <p className="subHeading">The Solution</p>
        <p>
          Smarter flood management systems using modern technology and design
          improvements can be engineered.{" "}
        </p>
        <ul>
          <li>
            <b>Automated underground drainage monitoring</b> using acoustic
            sensors and high-resolution underground cameras to detect blockages
            early
          </li>
          <li>
            <b>Self-operating cleaning robots</b> which can regularly clear out
            drains before the monsoon season, preventing clogged water flow
          </li>
          <li>
            <b>Drones with thermal and LiDAR mapping</b> can scan flood-prone
            areas and predict where water will accumulate, allowing for better
            emergency planning
          </li>
          <li>
            <b>Smart drainage systems</b> with real-time monitoring can use
            radar-based flood sensors and RTK positioning to detect rising water
            levels and automatically open or close drainage gates
          </li>
          <li>
            <b>Permeable road surfaces</b> and<b> flood storage basins </b> in
            cities can help absorb excess rainwater and reduce immediate
            drainage load
          </li>
        </ul>

        <p>
          Combining these technologies into an integrated flood prevention
          system can turn urban flooding from a disaster into a manageable
          challenge, ensuring cities stay dry even in extreme weather. By
          developing these solutions, with a proper mix of technology and
          management, any impossible task is possible.
        </p>
      </div>
    </div>
  );
}

export default Initiative4;
