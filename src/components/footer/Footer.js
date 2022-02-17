import './FooterCSS.css';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

import Links from '../../socialLinks';

const Footer = () => {
  return (
    <footer className="footer">
      <div class="wrapper">
        <div className="footer-content wrapper">
          <div class="footer-left">
            <div class="about-yf">
              <h3>about your friend</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                eaque, vero itaque maiores vitae aliquid cupiditate sapiente
                adipisci nam ea inventore perferendis eligendi nulla quis,
                quidem numquam id rerum eius laborum commodi quo! Adipisci iste
                tempore soluta, laboriosam repudiandae vitae possimus quo
                eveniet voluptatibus neque magnam, voluptas placeat fugiat
                cumque?
              </p>
            </div>
          </div>
          <div className="bae">
            <h3>Become an Expert</h3>
            <p>Listen to others & be their friend in need</p>
            <a href="/" className="btn">
              Become an Expert
            </a>
          </div>
        </div>
        <div class="footer-bottom">
          <div className="social-medialinks">
            <ul className="footer-list">
              <li className="footer-list-item">
                <a className="footer-list-link" href={Links[0].url}>
                  <FaFacebookF className="fab footer-icon" />{' '}
                </a>
              </li>
              <li className="footer-list-item">
                <a className="footer-list-link" href={Links[0].url}>
                  <FaTwitter className="fab footer-icon" />{' '}
                </a>
              </li>
              <li className="footer-list-item">
                <a className="footer-list-link" href={Links[0].url}>
                  <FaLinkedinIn className="fab footer-icon" />{' '}
                </a>
              </li>
              <li className="footer-list-item">
                <a className="footer-list-link" href={Links[0].url}>
                  <FaInstagram className="fab footer-icon" />{' '}
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
          <div className="legal">&copy; Youth India Foundation</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
