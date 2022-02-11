import './Internship.css';
import Intern from '../../assets/internship/internship.svg';

function Internship() {
  return (
    <div className="internships-page">
      <div className="intern-grid">
        <div>
          <h1>Interships</h1>
          <p>
            India has been gripped in fear due to the COVID virus outbreak.
            People have had time to reflect on themselves. But it has been found
            that many have had psychotic breakdowns and have needed help from
            professionals to get their minds back to their normal lives. So the
            help of psychologists has never been needed more than now. Your
            Friend provides help with RCI licensed clinical psychologists with
            immense experience and in-depth knowledge of mental health issues.
            Your Friend requires interns who can learn and work under their
            supervision. This is an opportunity like no other for college
            students and graduates to get hands-on experience by getting a
            chance to work under professionals directly helping them in their
            career development.
          </p>
          <a className="button">Apply Now</a>
        </div>
        <div className="image">
          <img className="intern" src={Intern} alt="intern" />
        </div>
      </div>
    </div>
  );
}

export default Internship;

// https://docs.google.com/forms/d/e/1FAIpQLSezaoNfRDVFprPw74aE16rZWTALnuExsl7jmraHPwqrvePZRg/viewform
