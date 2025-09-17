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
            <p className="info">For Further Information</p>
            <div className="info">
              <a
                href="mailto:connect@itelfoundation.in"
                style={{
                  color: "blue",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                <IoMdMailOpen />
                connect@itelfoundation.in,
              </a>{" "}
            </div>
            <div className="info">
              {" "}
              <FaPhoneAlt />
              +91 44 66469815
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

          {/* iit madras address */}
          <div className="Address">
            {/* <div>Prof Ashok Jhunjhunwala,</div> */}
            <div className="info-itel"> &nbsp; ITEL Corporate Office,</div>
            <div className="info">
              <a
                href="https://www.google.com/maps?q=E3-02,+Third+Floor,+E-Block,+IIT+Madras+Research+Park,+MGR+Film+City+Road,+Kanagam,+Tharamani,+Chennai+–+600113"
                target="_blank"
                rel="noopener noreferrer"
                //className="info"
                // className="info"
              >
                <div className="info">
                  <FaLocationDot />
                  E3-02, Third Floor, E-Block,
                </div>
                <div className="info">IIT Madras Research Park,</div>
                <div className="info">MGR Film City Road, Kanagam,</div>

                <div className="info">Tharamani, Chennai – 600 113.</div>
              </a>{" "}
            </div>
          </div>

          <div>
            <div className="info-incubate">
              {" "}
              &nbsp; ITEL Incubation Center`s,
            </div>
            <div className="footer-incubation">
              {/* velechery Address */}
              <div className="Address">
                {/* <div>Prof Ashok Jhunjhunwala,</div> */}

                <div className="info">
                  <a
                    href="https://www.google.com/maps?q=No.22,+Swagatham+-+Sneham+Apartments,+Rajalakshmi+Nagar,+3rd+Main+Road,+Velachery,+Chennai+-+600042"
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="info"
                  >
                    <div className="info">
                      <FaLocationDot />
                      No.22, Swagatham - Sneham Apartments,
                    </div>
                    <div className="info">Rajalakshmi Nagar,</div>
                    <div className="info">3rd Main Road,</div>

                    <div className="info">Velachery, Chennai - 600042.</div>
                  </a>{" "}
                </div>
              </div>

              <div className="Address">
                <div className="info">
                  {" "}
                  <FaLocationDot />
                  D-3/3180 Vasant Kunj,
                </div>
                <div className="info">New Delhi 110070,</div>
                <div className="info">
                  (near church gate no 5 as a landmark)
                </div>
              </div>
            </div>
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
