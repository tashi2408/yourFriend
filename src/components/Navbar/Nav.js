import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Dropdown from "./Dropdown";
import logo from "./Images/Title logo.png";
import "./Nav.css";

function Nav() {
  const [click, onClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => onClick(!click);
  const closeMobileMenu = () => onClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const extendElement = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };

  return (
    <>
      <nav className="navbarcss">
        <Link to="/" className="navbar-logocss">
          <img src={logo} className="logocss"></img>
        </Link>

        <div className="menu-iconcss" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menucss active" : "nav-menucss"}>
          <li className="nav-itemcss">
            <Link
              to="/about-us"
              className="nav-linkscss"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li className="nav-itemcss">
            <Link
              to="/ourteam"
              className="nav-linkscss"
              onClick={closeMobileMenu}
            >
              Our Team
            </Link>
          </li>
          {/* <li className="nav-itemcss">
            <Link
              to="/self-test"
              className="nav-linkscss"
              onClick={closeMobileMenu}
            >
              Self test
            </Link>
          </li> */}
          <li
            className="nav-itemcss"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={extendElement}
          >
            <Link to="/" className="nav-linkscss">
              Events <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown onCloseMobileMenu={closeMobileMenu} />}
          </li>

          <li className="nav-itemcss">
            <a href="https://www.youthindiafoundation.com/join/">Join Us</a>
          </li>
          <li className="nav-itemcss">
            <Link
              to="/join-us"
              className="nav-linkscss"
              onClick={closeMobileMenu}
            >
              Chat
            </Link>
          </li>
          <li className="nav-itemcss">
            <Link
              to="/login"
              className="nav-links-mobilecss"
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
        </ul>

        <Button />
      </nav>
    </>
  );
}

export default Nav;
