import "./home.css";
import Logo from "./logo.png";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <div className="wrapper">
            <img
              className="logo"
              alt="your friend logo"
              src={Logo}
              height={70}
              width={70}
            />
            <ul className="links">
              <li className="linkItem">
                <a href="/#">About</a>
              </li>
              <li className="linkItem">
                <a href="/#">Join</a>
              </li>
              <li className="linkItem">
                <a href="/#">Events</a>
              </li>
              <li className="linkItem">
                <a href="/#">Chat</a>
              </li>
              <li className="btn">
                <a href="/#">Login</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content">
          <div className="wrapper">
            <div class="left">
            <h1>Your Friend</h1>
            <p>A Mental Health Initiative by <br/> <span className="yif">Youth India Foundation</span></p>
            <div className="btn-group">
              <a href="/#" className="btn">Join us</a>
              <a href="/#" className="btn">
                Book a Session
              </a>
            </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
