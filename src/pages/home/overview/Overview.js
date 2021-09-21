import React from "react";
import OverviewC from "./OverviewC.css";

export default class Overview extends React.Component {
  render() {
    return (
      <div className="overview">
        <h1 className="primary-heading ">#wearelistening</h1>
        <div className="overview-content">
          <p className="primary-para">
            Dealing with mental health issues is not easy and we understand
            that, thus we as an organisation provide mental health webinars,
            free mental health services, campaigns and a healthy environment for
            you to speak out your mind. We make sure that you receive the care
            you deserve with the help and guidance of certified therapists and
            counsellors and strict confidential policy for your comfort. For the
            times you feel you cannot talk to your friends or loved ones with
            the fear of being judged or humiliated, and for the times you don’t
            want any advice but just an ear to hear every thought hovering your
            mind, ‘Your Friend’ is just a click away.
          </p>
        </div>
      </div>
    );
  }
}
