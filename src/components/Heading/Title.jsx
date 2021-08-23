import React from "react";
import Nav from "../Navbar/Nav";
import TitlePhoto from "./Images/img2.png";
import "./Title.css";

function Title() {
  return (
    <div className="titlecss">
      <Nav />
      <div className="titletextcss">
        <h1>YOUR FRIEND</h1>
        <h3>A Mental Health Initiative by Youth India Foundation</h3>
        <button className="titlebuttoncss button1">
          Become a Representative
        </button>
        <button className="titlebuttoncss button2">Book a Session</button>
        <img
          src={TitlePhoto}
          alt="No Image Found"
          className="titleimgcss"
        ></img>
      </div>
    </div>
  );
}

export default Title;
