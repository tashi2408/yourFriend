import './BookAppointment.css';

const BookAppointment = () => {
  return (
    <div class="ba">
      <div class="wrapper">
        <h2>BOOK YOUR APPOINTMENT</h2>
        <p>Fix a one-on-one, confidential session with a YourDOST expert.</p>
        <div class="baBoxContainer">
          <div class="baBox">
            <h3>Let YourFriend select the right Expert</h3>
            <p>
              Just select your preferred time and concern category. We will
              select the right Expert for you.
            </p>
            <a href="/" className="btn">
              CONTINUE
            </a>
          </div>
          <div class="baBox">
            <h3>Select your Expert</h3>
            <p>Select your Expert and we will book the appointment for you.</p>
            <a href="/" className="btn">
              CONTINUE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
