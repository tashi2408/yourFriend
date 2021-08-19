import React from "react";
import OurWorkC from "./OurWorkC.css";
import Campaigns from "./Campaigns.jpg";
import Internships from "./Internships.png";
import Webinars from "./Webinars.jpg";

import { Link } from "react-router-dom";

import { IoArrowRedoCircleSharp } from "react-icons/io5";

export default class OurWork extends React.Component {
  render() {
    return (
      <div className="ourwork">
        <h1 className="primary-heading ">Our Work</h1>
        <div className="ourwork-section">
          <div className="left-container ">
            <h2 className="secondary-heading ">campaigns</h2>
            <p className="primary-para color-w">
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
              <Link to="/campaign">
                <IoArrowRedoCircleSharp className="work-icon" />
              </Link>
            </button>
          </div>
          <div className="right-container">
            <img className="work-image" src={Campaigns}></img>
          </div>
        </div>
        <div className="ourwork-section highlight">
          <div className="right-container">
            <img className="work-image" src={Internships}></img>
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
              <Link to="/internship">
                <IoArrowRedoCircleSharp className="work-icon-w" />
              </Link>
            </button>
          </div>
        </div>
        <div className="ourwork-section">
          <div className="left-container ">
            <h2 className="secondary-heading">webinars</h2>
            <p className="primary-para color-w">
              Your Friend by Youth India Foundation seek to break the stigma
              around mental health and wish to spread its awareness. For this
              purpose we have chosen the platform of webinars with Professionals
              in the mental health field to guide you in the right direction and
              help you live a full and peaceful life. We hope to provide every
              attendee with the confidence to take on any challenge and better
              their mental health after our sessions, some of which are free and
              others at a small fee. Our three successful webinars have been
              with the renowned speakers such as Dr. Samir Parikh, director of
              department of mental health and behavioural sciences of fortis
              healthcare which was help free of all cost, paid webinars with
              Neelam Mishra and national level webinars guided by Divya Dureja.
            </p>
            <button className="work-button">
              <Link to="/webinars">
                <IoArrowRedoCircleSharp className="work-icon" />
              </Link>
            </button>
          </div>
          <div className="right-container">
            <img className="work-image" src={Webinars}></img>
          </div>
        </div>
      </div>
    );
  }
}
