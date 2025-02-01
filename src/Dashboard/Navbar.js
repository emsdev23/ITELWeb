import React, { useState } from "react";
import "./Navbar.css";
import image from "../Dashboard/Images/ITEL_Logo.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Toggle for mobile menu

  return (
    <div>
      <div className="Header">
        <div>
          <img src={image} className="logo" alt="ITEL Logo" />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {/* Navbar Links */}
        <div className={`Header-nav ${menuOpen ? "mobile-active" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/AboutUs" className="nav-link" onClick={() => setMenuOpen(false)}>About Us</NavLink>

          {/* Incubatees Dropdown */}
          <div className="dropdown">
            Incubatees
            <div className="dropdown-content">
              <div>Incubatees 1</div>
              <div>Incubatees 2</div>
              <div>Incubatees 3</div>
            </div>
          </div>

          {/* Tech Leadership Dropdown */}
          <div className="dropdown">
            Tech Leadership Initiatives
            <div className="dropdown-content">
              <div>Initiative 1</div>
              <div>Initiative 2</div>
              <div>Initiative 3</div>
            </div>
          </div>

          {/* Committee Members Dropdown */}
          <div className="dropdown">
            Committee Members
            <div className="dropdown-content">
              <div>Member 1</div>
              <div>Member 2</div>
              <div>Member 3</div>
            </div>
          </div>

          <NavLink to="/partnerships" className="nav-link" onClick={() => setMenuOpen(false)}>Partnerships</NavLink>
          <NavLink to="/careers" className="nav-link" onClick={() => setMenuOpen(false)}>Careers</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
