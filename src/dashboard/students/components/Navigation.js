import Logo from './logo/logo.png';
import './Navigation.css';
import { useEffect } from 'react';
import Hamburger from 'hamburger-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navigation = ({ toggleMobileNav }) => {
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    window.dispatchEvent(new Event('logout'));
  };
  useEffect(() => {
    window.onscroll = () => {
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos !== 0) {
        document.querySelector('nav').classList.add('ColorBar');
      }
      if (currentScrollPos === 0) {
        document.querySelector('nav').classList.remove('ColorBar');
      }
    };
  }, []);
  return (
    <>
      <nav>
        <div className="wrapper">
          <Link to="/dashboard" className="Logo">
            <img
              className="Logo"
              alt="your friend logo"
              src={Logo}
              height={70}
              width={70}
            />
          </Link>
          <ul className="Links">
            <li className="LinkItem">
              <Link to="/dashboard/experts">
                <FontAwesomeIcon icon={faUsers} />
                <span style={{ marginLeft: '.5rem' }}>Experts</span>
              </Link>
            </li>
            <li className="LinkItem">
              <Link to="/blog">
                <FontAwesomeIcon icon={faBookmark} />
                <span style={{ marginLeft: '.5rem' }}>Blog</span>
              </Link>
            </li>
            <li className="LinkItem">
              <Link to="/chat">
                <FontAwesomeIcon icon={faComment} />
                <span style={{ marginLeft: '.5rem' }}>Chat</span>
              </Link>
            </li>
            <li className="LinkItem">
              <FontAwesomeIcon icon={faUser} /> User-Name
              <ul className="Dropdown">
                <li>
                  <Link to="/profile">
                    <FontAwesomeIcon icon={faUser} />
                    <span style={{ marginLeft: '.5rem' }}>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link to="/sessions">
                    <FontAwesomeIcon icon={faClockRotateLeft} />
                    <span style={{ marginLeft: '.5rem' }}>Sessions</span>
                  </Link>
                </li>
                <li>
                  <Link to="/password">
                    <FontAwesomeIcon icon={faLock} />
                    <span style={{ marginLeft: '.5rem' }}>Password</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOut} />
                    <span style={{ marginLeft: '.5rem' }}>Logout</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <span className="Hamburger">
            <Hamburger onToggle={toggleMobileNav} duration={0.3} />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
