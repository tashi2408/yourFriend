import Logo from './Images/Title logo.png';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useEffect } from 'react';
import Hamburger from 'hamburger-react';

export const joinURL = 'https://www.youthindiafoundation.com/join/';

const Nav = ({ toggleMobileNav }) => {
  useEffect(() => {
    window.onscroll = () => {
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos !== 0) {
        document.querySelector('nav').classList.add('colorBar');
      }
      if (currentScrollPos === 0) {
        document.querySelector('nav').classList.remove('colorBar');
      }
    };
  }, []);
  return (
    <>
      <nav>
        <div className="wrapper">
          <Link to="/" className="logo">
            <img
              className="logo"
              alt="your friend logo"
              src={Logo}
              height={70}
              width={70}
            />
          </Link>
          <ul className="links">
            <li className="linkItem">
              <Link to="/about">About</Link>
            </li>
            <li className="linkItem">
              <Link to="/team">Team</Link>
            </li>
            <li className="linkItem">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="linkItem">
              <Link>Events</Link>
              <ul class="dropdown">
                <li>
                  <Link to="/internships">Internships</Link>
                </li>
                <li>
                  <Link to="/campaigns">Campaigns</Link>
                </li>
                <li>
                  <Link to="/webinars">Webinars</Link>
                </li>
              </ul>
            </li>
            <li className="linkItem">
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <a
                className="btn"
                href={joinURL}
                target="_blank"
                rel="noreferrer"
              >
                Join Us
              </a>
            </li>
          </ul>
          <span className="hamburger">
            <Hamburger onToggle={toggleMobileNav} duration={0.3} />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Nav;
