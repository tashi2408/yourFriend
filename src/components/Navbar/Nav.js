import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Button from './Button';
import Dropdown from './Dropdown'
import './Nav.css';

function Nav(){

    const [click,onClick] = useState(false);
    const [dropdown,setDropdown] = useState(false)

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

    return(
     <>
        <nav className="navbarcss">

        <Link to='/' className="navbar-logocss">
            YOUTH INDIA
        </Link>

        <div className="menu-iconcss" onClick={handleClick}>

         <i className={click ? "fas fa-times" : "fas fa-bars"}/>

        </div>

        <ul className={click ? "nav-menucss active" : "nav-menucss"}>

        <li className="nav-itemcss"><Link to="/about-us" className="nav-linkscss" onClick={closeMobileMenu}>About Us</Link></li>
        <li className="nav-itemcss" 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave} 
        onClick={extendElement}>
        <Link to="/" className="nav-linkscss">Dropdown <i className="fas fa-caret-down" /></Link>
        {dropdown && <Dropdown onCloseMobileMenu={closeMobileMenu}/>}
        </li>
        <li className="nav-itemcss"><Link to="/board-of-advisors" className="nav-linkscss" onClick={closeMobileMenu}>Board of Advisors</Link></li>
        <li className="nav-itemcss"><Link to="/join-us" className="nav-linkscss" onClick={closeMobileMenu}>Join Us</Link></li>
        <li className="nav-itemcss"><Link to="/login" className="nav-links-mobilecss" onClick={closeMobileMenu}>Login</Link></li>

        </ul>

        <Button />
        </nav>
     </>
    )
}

export default Nav;