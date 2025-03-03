import React, { useState } from "react";
import { SidebarData } from "./components/SidebarData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import NavItem from "./NavItem"; // Importing NavItem component
import logo from "./Images/ITEL_Logo.png";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <nav className="navbar">
        <img src={logo} style={{ width: "80px" }} />
        <ul className="navbar-menu">
          {SidebarData.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </div>
      </nav>

      {/* Overlay to Close Sidebar */}
      {isSidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Mobile Sidebar */}
      <motion.div
        className={`sidebar ${isSidebarOpen ? "active" : ""}`}
        initial={{ x: "-100%" }}
        animate={{ x: isSidebarOpen ? "0%" : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <div className="sidebar-header">
          <img src={logo} />
          <FaTimes
            className="close-icon"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
        <ul className="sidebar-menu">
          {SidebarData.map((item, index) => (
            <NavItem
              key={index}
              item={item}
              onClick={() => setSidebarOpen(false)}
            />
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default Navbar;
