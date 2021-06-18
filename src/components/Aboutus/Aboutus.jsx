import React from "react";
import Nav from "../Navbar/Nav.js";
import Footer from "../footer/Footer.js";
import "./style.css";

function Aboutus() {
  return (
    <div>
      <div className="pagenavcss">
        <Nav />
      </div>
      <div class="about-section">
        <div class="inner-container">
          <h1>
            About Us
            <div class="border"></div>
          </h1>
          <p class="text">
            Dealing with poor or deteriorating mental health is draining and
            hard. As an organisation based in promoting mental health we work to
            provide you with webinars on various topics, free mental health
            services, campaigns, guidance under certified therapists and
            counsellors and above all a safe and confidential space to speak in
            without any judgement. We will provide you with a listening ear and
            help if needed in times where you cannot talk to a friend or a
            family member. Through our 24/7 chat service we provide help seekers
            with a confidential and judgement free space to talk to someone. We
            also have the option to schedule a video call for the person in
            need, with an experienced therapist, counsellor or RCI licensed
            therapist. Apart from this we work as a family and aim at the career
            empowerment of every member of our family. By providing internship
            opportunities to the youth in every field including Human Resources,
            Graphic Designing, Content Writing, as well as working with our
            trained professionals in the mental health field, along with being
            part of the advisory. We hope we are of as much help to them as they
            are to us. We aim to bridge the gap between those who need help and
            those who wish to provide it, and hope to make a clear simple path
            for the same. We hope to in the near future, collaborate with
            corporates and other institutions to aid the mental health movement.
            We are launching our new Mental Health Services Model to provide
            mental health support to masses. The model aims to tie-up schools,
            colleges and corporates with our initiative and reach as many people
            as possible. We aim to provide the institutions with: - An on-ground
            therapist - A team of representatives - Monthly awareness sessions -
            Training Programs - Regular check-ups and much more. Your Friend
            believes in the deliverance of value for money and since every
            institution is unique in its needs, number of students, demographic
            and location a customized plan will be drawn up for each client to
            promote the higher value and community welfare that both Youth India
            Foundation and the client institution will derive from this highly
            beneficial society-oriented social entrepreneurship program.
          </p>
          <div class="icons">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Aboutus;
