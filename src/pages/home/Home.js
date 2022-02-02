import './home.css';
import Handshake from '../../assets/handshake.svg';
import Overview from './overview/Overview';
import Contact from './contactUs/ContactUs';
import Blog from './Blog/Blog';
import Timeline from './timeline/Timeline';
import Reachout from './reachOut/segment';
import Ourwork from './ourwork/OurWork';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <header>
        <div className="content">
          <div className="wrapper">
            <div class="left">
              <h1>Your Friend</h1>
              <p>
                A Mental Health Initiative by <br />{' '}
                <span className="yif">Youth India Foundation</span>
              </p>
              <div className="btn-group">
                <Link to="/" className="btn">
                  Join us
                </Link>
                <Link to="/" className="btn">
                  Book a Session
                </Link>
              </div>
            </div>
            <div class="right">
              <img src={Handshake} alt="brain" draggable={false} />
            </div>
          </div>
        </div>
      </header>
      <Overview />
      <Reachout />
      <Ourwork />
      <Timeline />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
