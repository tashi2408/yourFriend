import Slide1 from '../../assets/campaign/Slide1.jpg';
import Slide2 from '../../assets/campaign/Slide2.jpg';
import Slide3 from '../../assets/campaign/Slide3.jpg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import './Campaign.css';
function Campaign() {
  return (
    <div className="campaigns-page">
      <div className="campaign-grid">
      <div>
      <h1>Campaigns</h1>
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
    <div className="campaign-carousel">
        <Carousel
          infiniteLoop={true}
          autoFocus={true}
          autoPlay={true}
          interval={2000}>
          <div>
            <img src={Slide1} className="carousel-image" alt="carousel 1" />
          </div>
          <div>
            <img src={Slide2} className="carousel-image" alt="carousel 2" />
          </div>
          <div>
            <img src={Slide3} className="carousel-image" alt="carousel 3" />
          </div>
        </Carousel>
      </div>
      </div>
      </div>
      );
    }

export default Campaign;



