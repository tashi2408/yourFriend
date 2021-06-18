import React from "react";
import Nav from "../Navbar/Nav.js";
import Footer from "../footer/Footer.js";
import {
  MDBJumbotron,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import "./Campaign.css";

function Campaign() {
  return (
    <div>
      <div className="pagenavcss">
        <Nav />
      </div>
      <div className="campaignheadcss">
        <MDBJumbotron fluid>
          <MDBContainer>
            <h2 className="display-4 text-center">CAMPAIGNS</h2>
            <p className="lead text-center">
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
          </MDBContainer>
        </MDBJumbotron>
      </div>

      <Footer />
    </div>
  );
}

export default Campaign;
