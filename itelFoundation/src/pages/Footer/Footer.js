import React from "react";
import "./Footer.css";
import ITEL_Logo from "../../Images/ITEL_Logo.png";
import { IoMdMailOpen } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-contantent">
          <div>
            <img src={ITEL_Logo} className="logo" />
            <p className="info">For Futhure Information</p>
            <div className="info">
              {" "}
              <IoMdMailOpen />
              iteldelhi@itelfoundation.in
            </div>
            <div className="info">
              {" "}
              <FaPhoneAlt />
              +91 98918 85660
            </div>
          </div>
          {/* <div className="Address">
            <p>Quick Links</p>
            <p>Home</p>
            <p>About</p>
            <p>Skills</p>
            <p>Projects</p>
            <p>Contact</p>
          </div> */}
          <div className="Address">
            {/* <div>Prof Ashok Jhunjhunwala,</div> */}
            <div>
              {" "}
              <FaLocationDot />
              E3-02, Third Floor, E-Block,
            </div>
            <div>IIT Madras Research Park,</div>
            <div>MGR Film City Road, Kanagam,</div>
            <div>Tharamani, Chennai – 600 113.</div>
          </div>
          <div className="Address">
            <div>ITEL Delhi Incubator,</div>
            <div>c/o Rajesh Sanghi,</div>
            <div>
              {" "}
              <FaLocationDot />
              D-3/3180 Vasant Kunj,
            </div>
            <div>New Delhi 110070,</div>
            <div>(near church gate no 5 as a landmark)</div>
          </div>
        </div>
        <div className="rights">
          <p className="info">
            © {new Date().getFullYear()}. ITEL . All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
