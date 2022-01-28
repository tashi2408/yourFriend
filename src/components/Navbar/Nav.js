import Logo from './Images/Title logo.png';
import './Nav.css';

const Nav = () => {
  return (
    <>
      <nav>
        <div className="wrapper">
          <img
            className="logo"
            alt="your friend logo"
            src={Logo}
            height={70}
            width={70}
          />
          <ul className="links">
            <li className="linkItem">
              <a href="/#">About</a>
            </li>
            <li className="linkItem">
              <a href="/#">Team</a>
            </li>
            <li className="linkItem">
              <a href="/#">Events</a>
            </li>
            <li className="linkItem">
              <a href="/#">Chat</a>
            </li>
            <li className="btn">
              <a href="/#">Join Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
