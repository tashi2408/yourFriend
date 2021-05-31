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
            <ul className="footer-list">
              <li className="footer-list-item">
                <a className="footer-list-link" href="#">
                  <FaFacebookF className="fab footer-icon" />{" "}
                </a>
              </li>
              <li className="footer-list-item">
                <a className="footer-list-link" href="#">
                  <FaTwitter className="fab footer-icon" />{" "}
                </a>
              </li>
              <li className="footer-list-item">
                <a className="footer-list-link" href="#">
                  <FaLinkedinIn className="fab footer-icon" />{" "}
                </a>
              </li>
              <li className="footer-list-item">
                <a className="footer-list-link" href="#">
                  <FaInstagram className="fab footer-icon" />{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="links-footer">
            <p className="link-item">Privacy Policy</p>
            <p className="link-item">|</p>
            <p className="link-item">Report a Problem</p>
            <p className="link-item">|</p>
            <p className="link-item">FAQ</p>
            <p className="link-item">|</p>
            <p className="link-item">Testimonials</p>
          </div>
        </div>

        <div className="legal">&copy; Youth India Foundation</div>
      </div>
    );
  }
}
