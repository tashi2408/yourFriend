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
import { faMessage} from '@fortawesome/free-solid-svg-icons';


const Navigation = ({ toggleMobileNav }) => {
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
          <Link to="/dashboard" className="logo">
            <img
              className="logo"
              alt="your friend logo"
              src={Logo}
              height={70}
              width={100}
            />
          </Link>
          <ul className="links">
            <li className="linkItem">
              <Link to="/dashboard/experts">Experts</Link>
            </li>
            <li className="linkItem">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="linkItem">
              <Link to="/chat"><FontAwesomeIcon icon={faMessage}/></Link>
            </li>
            <li className="linkItem">
              <Link><FontAwesomeIcon icon={faUser} /> <a style={{ marginLeft: '.5rem' }} >User-name</a></Link>
              <ul class="dropdown">
                <li>
                  <Link to="/profile"><FontAwesomeIcon icon={faUser} /><a style={{ marginLeft: '.5rem' }} >Profile</a></Link>
                </li>
                <li>
                  <Link to="/sessions"><FontAwesomeIcon icon={faClockRotateLeft}/><a style={{ marginLeft: '.5rem' }} >Sessions</a></Link>
                </li>
                <li>
                  <Link to="/password"><FontAwesomeIcon icon={faLock}/><a style={{ marginLeft: '.5rem' }} >Password</a></Link>
                </li>
                <li>
                  <Link to="/"><FontAwesomeIcon icon={faSignOut}/><a style={{ marginLeft: '.5rem' }} >Logout</a></Link>
                </li>
              </ul>
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

export default Navigation;  