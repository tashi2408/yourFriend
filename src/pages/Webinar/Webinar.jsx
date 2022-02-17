import webinar1 from '../../assets/webinar/webinar1.jpeg';
import webinar2 from '../../assets/webinar/webinar2.jpeg';
import webinar3 from '../../assets/webinar/webinar3.jpeg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import './Webinar.css';
function Webinar() {
  return (
    <div className="webinar-page">
      <div className="webinar-grid">
      <div>
      <h1>Webinars</h1>
      <p>
          Your Friend by Youth India Foundation seek to break the stigma around
          mental health and wish to spread its awareness. For this purpose we
          have chosen the platform of webinars with Professionals in the mental
          health field to guide you in the right direction and help you live a
          full and peaceful life. We hope to provide every attendee with the
          confidence to take on any challenge and better their mental health
          after our sessions, some of which are free and others at a small fee.<br></br>
          Our three successful webinars have been with the renowned speakers
          such as Dr. Samir Parikh, director of department of mental health and
          behavioural sciences of fortis healthcare which was help free of all
          cost, paid webinars with Neelam Mishra and national level webinars
          guided by Divya Dureja.
      </p>
      
    </div>
    <div className="webinar-carousel">
        <Carousel
          infiniteLoop={true}
          autoFocus={true}
          autoPlay={true}
          interval={2000}>
          <div>
            <img src={webinar1} className="carousel-image" alt="carousel 1" />
          </div>
          <div>
            <img src={webinar2} className="carousel-image" alt="carousel 2" />
          </div>
          <div>
            <img src={webinar3} className="carousel-image" alt="carousel 3" />
          </div>
        </Carousel>
      </div>
      </div>
      </div>
      );
    }

export default Webinar;
