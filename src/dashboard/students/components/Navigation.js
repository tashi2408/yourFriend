import Logo from './logo/logo.png';
import { Link } from 'react-router-dom';
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


const Navigation = ({ toggleMobileNav }) => {

  const handleLogout = () => {
    localStorage.removeItem('loginData');
  }
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
              <Link to="/dashboard/experts"><FontAwesomeIcon icon={faUsers} /><a style={{ marginLeft: '.5rem' }} >Experts</a></Link>
            </li>
            <li className="LinkItem">
              <Link to="/blog"><FontAwesomeIcon icon={faBookmark} /><a style={{ marginLeft: '.5rem' }} >Blog</a></Link>
            </li>
            <li className="LinkItem">
              <Link to="/chat"><FontAwesomeIcon icon={faComment} /><a style={{ marginLeft: '.5rem' }} >Chat</a></Link>
            </li>
            <li className="LinkItem">
              <Link><FontAwesomeIcon icon={faUser} /> <a style={{ marginLeft: '.25rem' }} >User-name</a></Link>
              <ul class="Dropdown">
                <li>
                  <Link to="/profile"><FontAwesomeIcon icon={faUser} /><a style={{ marginLeft: '.5rem' }} >Profile</a></Link>
                </li>
                <li>
                  <Link to="/sessions"><FontAwesomeIcon icon={faClockRotateLeft} /><a style={{ marginLeft: '.5rem' }} >Sessions</a></Link>
                </li>
                <li>
                  <Link to="/password"><FontAwesomeIcon icon={faLock} /><a style={{ marginLeft: '.5rem' }} >Password</a></Link>
                </li>
                <li>
                  <Link to="/" onClick={handleLogout}><FontAwesomeIcon icon={faSignOut} /><a style={{ marginLeft: '.5rem' }} >Logout</a></Link>
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