import React from 'react';
import WebinarImage from '../../assets/webinar/webinar.jpeg';
import './Webinar.css';

function Webinar() {
  return (
    <div className="webinar-page">
      <div className="webinar">
        <div className="webinar-head">Webinar</div>
        <p>
          Your Friend by Youth India Foundation seek to break the stigma around
          mental health and wish to spread its awareness. For this purpose we
          have chosen the platform of webinars with Professionals in the mental
          health field to guide you in the right direction and help you live a
          full and peaceful life. We hope to provide every attendee with the
          confidence to take on any challenge and better their mental health
          after our sessions, some of which are free and others at a small fee.
        </p>
        <div className="webinar-grid">
          <img src={WebinarImage} alt="webinar-poster1"></img>
          <img src={WebinarImage} alt="webinar-poster2"></img>
          <img src={WebinarImage} alt="webinar-poster3"></img>
        </div>
        <p>
          Our three successful webinars have been with the renowned speakers
          such as Dr. Samir Parikh, director of department of mental health and
          behavioural sciences of fortis healthcare which was help free of all
          cost, paid webinars with Neelam Mishra and national level webinars
          guided by Divya Dureja.
        </p>
      </div>
    </div>
  );
}

export default Webinar;
