import './home.css';
import Brain from '../../assets/brain.svg';
import Handshake from '../../assets/handshake.svg';
import Nav from '../../components/Navbar/Nav';
import Overview from './overview/Overview';
import Contact from './contactUs/ContactUs';
import Blog from './Blog/Blog';
import Timeline from './timeline/Timeline';
import Footer from '../../components/footer/Footer';
import Reachout from './reachOut/segment';

export default function Home() {
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
                <a href="/#" className="btn">
                  Join us
                </a>
                <a href="/#" className="btn">
                  Book a Session
                </a>
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
      <Timeline />
      <Blog />
      <Contact />
    </>
  );
}
