import React from 'react'
import Nav from '../Navbar/Nav';
import TitlePhoto from './Images/Title photo.png' 
import './Title.css'

function Title() {
    return (
        <div className="titlecss">
          <Nav />
          <div className="titletextcss">
             <h1>YOUTH INDIA FOUNDATION</h1>
             <h3>A Mental Health Initiative By Youth India</h3>
             <img src={TitlePhoto} alt="No Image Found" className="titleimgcss"></img>
          </div>
        </div>
    )
}

export default Title;