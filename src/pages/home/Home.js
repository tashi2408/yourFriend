import Help from '../../assets/help.svg';
import Overview from './overview/Overview';
import Contact from './contactUs/ContactUs';
import Blog from './Blog/Blog';
import Timeline from './timeline/Timeline';
import Reachout from './reachOut/segment';
import Ourwork from './ourwork/OurWork';
import { joinURL } from '../../components/Navbar/Nav';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <>
      <Hero />
      <Overview />
      <Reachout />
      <Ourwork />
      <Timeline />
      <Blog />
      <Contact />
    </>
  );
};

const Hero = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div class="header__left">
          <h1 className="left__title">Your Friend</h1>
          <p className="left__subTitle">
            A Mental Health Initiative by
            <span className="yif">Youth India Foundation</span>
          </p>
          <div className="btn-group">
            <a href={joinURL} target="_blank" rel="noreferrer" className="btn">
              Join us
            </a>
            <Link to="/" className="btn">
              Book a Session
            </Link>
          </div>
        </div>
        <div class="header__right">
          <img src={Help} alt="brain" draggable={false} />
        </div>
      </div>
    </header>
  );
};

export default Home;
