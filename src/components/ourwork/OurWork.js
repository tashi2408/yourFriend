import React from "react";
import OurWorkC from "./OurWorkC.css";
import Image from "./india.png";
import { IoArrowRedoCircleSharp } from "react-icons/io5";

export default class OurWork extends React.Component {
  render() {
    return (
      <div className="ourwork">
        <h1 className="primary-heading ">Our Work</h1>
        <div className="ourwork-section">
          <div className="left-container ">
            <h2 className="secondary-heading ">campaigning</h2>
            <p className="primary-para">
              We strongly believe that campaigning is one of the most effective
              ways to promote and work for a cause. With an increasing number of
              people using social media to educate themselves and take
              subsequent action on-ground, YMH has put a lot of effort into
              connecting with people on a national as well as international
              level. We have successfully organized many on-ground and online
              campaigns focused on a variety of issues to encourage
              conversations and suggest solutions. Know more about our
              campaigns!
            </p>
            <button className="work-button">
              <IoArrowRedoCircleSharp className="work-icon" />
            </button>
          </div>
          <div className="right-container">
            <img className="work-image" src={Image}></img>
          </div>
        </div>
        <div className="ourwork-section highlight">
          <div className="right-container">
            <img className="work-image" src={Image}></img>
          </div>
          <div className="left-container">
            <h2 className="secondary-heading">internships</h2>
            <p className="primary-para">
              We strongly believe that campaigning is one of the most effective
              ways to promote and work for a cause. With an increasing number of
              people using social media to educate themselves and take
              subsequent action on-ground, YMH has put a lot of effort into
              connecting with people on a national as well as international
              level. We have successfully organized many on-ground and online
              campaigns focused on a variety of issues to encourage
              conversations and suggest solutions. Know more about our
              campaigns!
            </p>
            <button className="work-button">
              <IoArrowRedoCircleSharp className="work-icon-w" />
            </button>
          </div>
        </div>
        <div className="ourwork-section">
          <div className="left-container ">
            <h2 className="secondary-heading">webinars</h2>
            <p className="primary-para">
              We strongly believe that campaigning is one of the most effective
              ways to promote and work for a cause. With an increasing number of
              people using social media to educate themselves and take
              subsequent action on-ground, YMH has put a lot of effort into
              connecting with people on a national as well as international
              level. We have successfully organized many on-ground and online
              campaigns focused on a variety of issues to encourage
              conversations and suggest solutions. Know more about our
              campaigns!
            </p>
            <button className="work-button">
              <IoArrowRedoCircleSharp className="work-icon" />
            </button>
          </div>
          <div className="right-container">
            <img className="work-image" src={Image}></img>
          </div>
        </div>
      </div>
    );
  }
}
