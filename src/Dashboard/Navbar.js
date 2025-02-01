import React, { useState } from "react";
import "./Navbar.css";
import image from "../Dashboard/Images/ITEL_Logo.png"
import { Link } from 'react-router-dom';

function Navbar() {
  const [incubateesOpen, setIncubateesOpen] = useState(false);
  const [techLeadershipOpen, setTechLeadershipOpen] = useState(false);
  const [CommitteeMembers,setCommitteeMembers]=useState(false)

  return (
    <div>
      <div className="Header">
        <div >
          <img src={image} className="logo"/>
        </div>
        <div className="Header-nav">

        <Link to="/"  className="Link" >
          <div className="navtext" >Home</div>
        </Link>
       <Link to="/AboutUs"  className="Link" >
          <div className="navtext" >About Us</div>
        </Link>

          {/* Incubatees Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setIncubateesOpen(true)}
            onMouseLeave={() => setIncubateesOpen(false)}
            
          >
            Incubatees
            {incubateesOpen && (
              <div className="dropdown-content">
                <div>Incubatees 1</div>
                <div>Incubatees 2</div>
                <div>Incubatees 3</div>
              </div>
            )}
          </div>

          {/* Tech Leadership Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setTechLeadershipOpen(true)}
            onMouseLeave={() => setTechLeadershipOpen(false)}
          >
            Tech Leadership Initiatives
            {techLeadershipOpen && (
              <div className="dropdown-content">
                <div>Initiative 1</div>
                <div>Initiative 2</div>
                <div>Initiative 3</div>
              </div>
            )}
          </div>

          <div
           className="dropdown"
           onMouseEnter={() => setCommitteeMembers(true)}
           onMouseLeave={() => setCommitteeMembers(false)}
          >Committee  Members
          {CommitteeMembers && (
              <div className="dropdown-content">
                <div>Initiative 1</div>
                <div>Initiative 2</div>
                <div>Initiative 3</div>
              </div>
            )}


          </div>
          <div>Partnerships</div>
          <div>Careers</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
