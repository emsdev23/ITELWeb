import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

const NavItem = ({ item, onClick = () => {} }) => {
  // ✅ Default empty function to prevent errors
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown on click
  const toggleDropdown = (e) => {
    e.stopPropagation(); // ✅ Prevents event bubbling
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <li className="navbar-item" ref={dropdownRef}>
      {/* Main Heading (Click to toggle) */}
      {item.path ? (
        <Link to={item.path} className="navbar-link" onClick={onClick}>
          {item.icon}
          <span
            className="nav-text"
            style={{ fontSize: "1.8rem", fontWeight: 600, color: "#2b8a3e" }}
          >
            {item.title}
          </span>
        </Link>
      ) : (
        <div
          className="navbar-link"
          onClick={toggleDropdown}
          style={{
            fontSize: "1.8rem",
            fontWeight: 600,
            color: "#2b8a3e",
            whiteSpace: "pre",
          }}
        >
          {item.icon}
          <span className="nav-text">{item.title}</span>
          {item.subNav && (isOpen ? item.iconOpened : item.iconClosed)}
        </div>
      )}

      {/* Dropdown (Shows on click) */}
      {item.subNav && (
        <ul className={`dropdown-menu ${isOpen ? "active" : ""}`}>
          {item.subNav.map((subItem, subIndex) => (
            <li key={subIndex} className="dropdown-item">
              <Link
                to={subItem.path}
                className="dropdown-link"
                onClick={() => {
                  setIsOpen(false); // ✅ Close dropdown on sub-item click
                  if (typeof onClick === "function") onClick(); // ✅ Call only if onClick is a function
                }}
              >
                {subItem.icon}
                <span
                  className="subnav-text"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#2b8a3e",
                    whiteSpace: "pre",
                  }}
                >
                  {subItem.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
