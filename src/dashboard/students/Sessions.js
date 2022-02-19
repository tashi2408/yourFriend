import './Sessions.css';
import Session from '../../assets/sessions/session.png';

function Sessions() {
  return (
    <div className="sessions-page">
      <div className="session-grid">
        <div>
          <h1>NO APPOINTMENTS, YET!</h1>
          <h2>
            You don't have to struggle in silence.
          </h2>
          <p>
            I'm here to listen.
          </p>
          <a className="button">Book Apointment</a>
        </div>
        <div className="image">
          <img className="session" src={Session} alt="session" />
        </div>
      </div>
    </div>
  );
}

export default Sessions;