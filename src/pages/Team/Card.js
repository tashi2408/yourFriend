import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

import './our.css';

export default function Card({
  member,
  name,
  designation,
  headline,
  description,
}) {
  return (
    <>
      <div className="card Memberitem">
        <div className="card-front">
          <img className="member-image" src={member} alt="team-member" />
          <div className="member-content">
            <h1 className="member-name">{name}</h1>
            <h2 className="member-designation">{designation}</h2>
            <p className="member-description">{headline}</p>
          </div>
        </div>
        <div className="card-back">
          <div className="member-content">
            <p className="member-description">{description}</p>
          </div>

          <ul className="member-icons">
            <li>
              <a>
                <i>
                  <FaFacebookF className="single-icon-mem" />
                </i>
              </a>
            </li>
            <li>
              <a>
                <i>
                  <FaInstagram />
                </i>
              </a>
            </li>
            <li>
              <a>
                <i>
                  <FaLinkedinIn />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
