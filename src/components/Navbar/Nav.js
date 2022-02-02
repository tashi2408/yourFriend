import Logo from './Images/Title logo.png';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
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
            <li className="btn">
              <Link to="/join">Join Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
