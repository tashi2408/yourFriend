import React from "react";
import FooterCSS from "./FooterCSS.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="social-medialinks">
            <ul>
              <li>
                <a href="#">
                  <FaFacebookF className="fab icon" />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter className="fab icon" />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn className="fab icon" />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram className="fab icon" />{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="links-footer">
            <p className="link-item">Privacy Policy</p>
            <p className="link-item">|</p>
            <p className="link-item">Report a Problem</p>
            <p className="link-item">|</p>
            <p className="link-item">Become a Representative</p>
          </div>
        </div>

        <div className="legal">&copy; Youth India Foundation</div>
      </div>
    );
  }
}
