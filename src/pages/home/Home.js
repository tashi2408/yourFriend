import './home.css';
import Help from '../../assets/help.svg';
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
            <img src={Help} alt="brain" draggable={false} />
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
