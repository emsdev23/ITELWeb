import { Link } from "react-router-dom";
import React, { useState } from "react";

const NavItem = ({ item, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent parent click handlers from closing it
    setIsOpen(!isOpen);
  };

  return (
    <li className="navbar-item">
      {/* Use Link only if item.path exists */}
      {item.path ? (
        <Link to={item.path} className="navbar-link" onClick={onClick}>
          {item.icon}
          <span
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
          <span>{item.title}</span>
          {item.subNav && (isOpen ? item.iconOpened : item.iconClosed)}
        </div>
      )}

      {item.subNav && (
        <ul className={`dropdown-menu ${isOpen ? "active" : ""}`}>
          {item.subNav.map((subItem, subIndex) => (
            <li key={subIndex} className="dropdown-item">
              <Link
                to={subItem.path}
                className="dropdown-link"
                onClick={onClick}
              >
                {subItem.icon}
                <span
                  style={{
                    fontSize: "1.5rem",
                    borderBottom: "1px solid #e9ecef",
                    width: "100%",
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
