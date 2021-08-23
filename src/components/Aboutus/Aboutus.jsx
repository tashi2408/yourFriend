import React from "react";
import Nav from "../Navbar/Nav.js";
import Footer from "../footer/Footer.js";
import four from "./four.jpg";
import one from "./one.jpg";
import "./style.css";

function Aboutus() {
  return (
    <div>
      <div className="pagenavcss">
        <Nav />
      </div>
      <div class="fullbody">
        <div class="upperpart">
          <div class="left">
            <img src={four} alt="" />
          </div>
          <div class="right">
            <h1>About Us</h1>
            <p>
              Dealing with poor or deteriorating mental health is draining and
              hard.As an organisation based in promoting mental health we work
              to provide you with webinars on various topics,free mental health
              services,campaigns,guidance under certified therapists and
              counsellors space to speak in without any judgement.We will
              provide you with a listening ear and help if needed in times where
              you cannot talk to a friend or a family member. Through our 24/7
              chat service we provide help seekers with a confidential and
              judgement free space talk to someone.We also have the option to
              schedule a vedio call for the person in need,with an experienced
              therapist,counsellor or RCI licensed therapist.
              <br />
            </p>
          </div>
        </div>
        <div class="middlepart">
          <div class="first">
            <h1>What we provide to our partner</h1>
          </div>
          <div class="second">
            <div class=" part part1">
              <h5>. An on-ground therapist</h5>
            </div>
            <div class="part part2">
              <h5>. A team of representatives</h5>
            </div>
            <div class="part part3">
              <h5>. Monthly awareness sessions</h5>
            </div>
            <div class="part part4">
              <h5>. Training Programs</h5>
            </div>
            <div class="part part5">
              <h5>. Regular check-ups and much more</h5>
            </div>
          </div>
        </div>

        <div class="lowerpart">
          <div class="firstl">
            <p>
              {" "}
              Your Friend believes in the deliverance of value for money and
              since every institution is unique in its needs,of
              students,demographic and location a customized plan will be drawn
              up for each client to promote the higher value and community
              welfare that both Youth India Foundation and the client
              institution will derive from this highly beneficial
              society-oriented social enterpreneurship program
            </p>
          </div>
          <div class="secondl">
            <img src={one} alt="" srcset="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aboutus;
