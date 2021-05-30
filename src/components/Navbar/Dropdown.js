import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {MenuItems} from './MenuItems';
import './Dropdown.css';

function Dropdown(props){

    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return(
        <>
        <ul
        onClick={props.onCloseMobileMenu}
        className={click ? "dropdown-menucss clickedcss" : "dropdown-menucss"}
        >
        {MenuItems.map((item,index)=>{
            return(
                <li key={index}>
                <Link className={item.cName} to={item.path} onClick={() => {
                    setClick(false)
                }}>
                {item.title}
                </Link>
                </li>
            )
        })}
        </ul>
        </>
    )
}

export default Dropdown;