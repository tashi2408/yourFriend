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
        // document.querySelector('.logo img').classList.remove('bigLogo');
      }
      if (currentScrollPos === 0) {
        document.querySelector('nav').classList.remove('colorBar');
        // document.querySelector('.logo img').classList.add('bigLogo');
      }
    };
  }, []);
  return (
    <>
      <nav>
        <div className="wrapper">
          <Link to="/" className="logo">
            <img alt="your friend logo" src={Logo} />
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
              <ul className="dropdown">
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
            <li>
              <Link className="btn" to="/Login">
                Login
              </Link>
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
