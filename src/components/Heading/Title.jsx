import React from 'react'
import logo from './Images/logo.png'
import './Title.css'

function Title() {
    return (
        <div>
         <div className="titlecss">

           <div>
             <span className="titlenamecss">
             <h1>YOUTH INDIA FOUNDATION</h1>
             <h3>A Mental Health Initiative By Youth India</h3>
            </span>
             <div><img src={logo} className="imgcss"/></div>
           </div>
          </div>

        </div>
    )
}

export default Title;