import React, { useState } from "react";
import "./Navbar.css";
import image from "../Dashboard/Images/ITEL_Logo.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Toggle for mobile menu

  return (
    <div>
      <div className="Header">
        <div>
          <img src={image} className="logo" alt="ITEL Logo" />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div
          className="mobile-menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {/* Navbar Links */}
        <div className={`Header-nav ${menuOpen ? "mobile-active" : ""}`}>
          <NavLink
            to="/"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/AboutUs"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </NavLink>

          {/* Incubatees Dropdown */}
          <NavLink
            to="/IncubatedCompanies"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Incubatees
          </NavLink>

          {/* Tech Leadership Dropdown */}
          <div className="dropdown">
            Tech Leadership Initiatives
            <RiArrowDropDownLine size="35px" />
            <div className="dropdown-content">
              <div>
                <NavLink to="/Transportation" className="link">
                  Transportation
                </NavLink>
              </div>
              <div>
                <NavLink to="/Heating&Cooling" className="link">
                  Heating & Cooling
                </NavLink>
              </div>
              <div>
                <NavLink to="/FintechforInclusion" className="link">
                  Fintech for Inclusion
                </NavLink>
              </div>
              <div>
                <NavLink to="/FloodMitigation" className="link">
                  Flood Mitigation
                </NavLink>
              </div>
              <div>
                <NavLink to="/CleanEnergy" className="link">
                  Clean Energy
                </NavLink>
              </div>
              <div>
                <NavLink to="/AssistiveTechnology" className="link">
                  Assistive Technology
                </NavLink>
              </div>
              <div>
                <NavLink to="/RISCV" className="link">
                  RISC V
                </NavLink>
              </div>
              <div>
                <NavLink to="/CyberSecurity" className="link">
                  Cyber Security
                </NavLink>
              </div>
            </div>
          </div>

          {/* Committee Members Dropdown */}
          <div className="dropdown">
            Committee Members
            <RiArrowDropDownLine size="35px" />
            <div className="dropdown-content">
              <div>
                <NavLink to="/AdvisorBoard" className="link">
                  Advisory Board Committee{" "}
                </NavLink>
              </div>
              <div>
                <NavLink to="/TechAdvisor" className="link">
                  Technical Advisory Committee
                </NavLink>
              </div>
              <div>
                <NavLink to="/incubationItel" className="link">
                  ITEL Incubation Committee
                </NavLink>
              </div>
            </div>
          </div>

          <NavLink
            to="/partnerships"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Partnerships
          </NavLink>
          <NavLink
            to="/careers"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Careers
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
