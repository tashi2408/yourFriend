import React from "react";
import Slide1 from "./Images/Slide1.png";
import Slide2 from "./Images/Slide2.jpg";
import Slide3 from "./Images/Slide3.jpg";
import Nav from "../../components/Navbar/Nav.js";
import Footer from "../../components/footer/Footer.js";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// import { Carousel, Item, Caption } from "react-bootstrap";
import "./Campaign.css";

function Campaign() {
  return (
    <div className="campaigns-page">
      <div className="pagenavcss">
        <Nav />
      </div>

      <div>
        <h1 className="campaign-head">Campaigns</h1>
      </div>

      <div className="campaign-container">
        <div class="campaign-image">
          <img src="data:image/jpeg;base64,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" />
        </div>
        <div class="campaign-text">
          <p>
            Despite the slight improvement in attitudes towards mental health,
            statistically the negative connotation of it still remains and is
            going strong. This stigma caused my misinformation causes immense
            pain and mental struggle for someone who is considering getting
            professional help. In an attempt to combat all of this, we have
            started our “All Ears to You, Always” Campaign to promote mental
            health and provide a safe, welcoming and judgement free space for
            students to express their feelings freely to a trained team of
            representatives and mental health personnel. We do so by reaching
            out to several educational institutions all over the country and so
            far we have completed our campaign in Ashutosh College, Kolkata on
            3rd August with the help of 8 students who volunteered to be part of
            the cause.
          </p>
        </div>
      </div>

      <div className="campaign-carousel">
        <Carousel
          infiniteLoop={true}
          autoFocus={true}
          autoPlay={true}
          interval={2000}
        >
          <div>
            <img src={Slide1} className="carousel-image" />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <img src={Slide2} className="carousel-image" />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
            <img src={Slide3} className="carousel-image" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
      </div>

      <Footer />
    </div>
  );
}

export default Campaign;
