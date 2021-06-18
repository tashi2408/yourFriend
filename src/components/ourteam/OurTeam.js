import React from "react";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/Navbar/Nav";
import Member from "./user-2.jpg";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import "./our.css";

function OurTeam() {
  return (
    <div>
      <Nav />
      <header className="ourteam-header">
        <h1 className="heading-ourteam color-w">Our team</h1>
      </header>
      <div className="ourteam">
        <h2 className="secondary-heading">Board of Advisors</h2>
        <div className="members-container">
          <div className="member">
            <div className="member-image-container">
              <img src={Member} className="member-image" />
            </div>
            <div className="member-content">
              <h1 className="member-name">Shubham Gautam</h1>
              <h2 className="member-designation">Founder</h2>
              <p className="member-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <ul className="member-icons">
                <li>
                  <a>
                    <i>
                      <FaFacebookF className="single-icon-mem" />
                    </i>
                  </a>
                </li>
                <li>
                  <a>
                    <i>
                      <FaInstagram />
                    </i>
                  </a>
                </li>
                <li>
                  <a>
                    <i>
                      <FaLinkedinIn />
                    </i>
                  </a>
                </li>
                <li>
                  <a>
                    <i>
                      <FaTwitter />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OurTeam;
