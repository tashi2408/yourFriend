import './review.css';

const Review = () => {
  const myData = {
    expert: 'Shivom Srivastava',
    date: Date.now().toString(),
    timePeriod: '12:00 - 2:00',
    preferredSlot: '12:00',
    type: 'voice call',
    charges: 'free',
  };
  return (
    <div className="review-section wrapper">
      <h2>Review your booking</h2>
      <div class="main">
        <div class="app-details niceBox">
          <h3 className="niceTitle">Your Appointment Details</h3>
          <span className="listItem">
            Expert: <span class="value">{myData.expert}</span>
          </span>
          <span className="listItem">
            Date: <span class="value">{myData.date}</span>
          </span>
          <span className="listItem">
            Time Period: <span class="value">{myData.timePeriod}</span>
          </span>
          <span className="listItem">
            Preferred Slot: <span class="value"> {myData.preferredSlot} </span>
          </span>
          <span className="listItem">
            Type: <span class="value">{myData.type}</span>
          </span>
          <span className="listItem">
            Charges: <span class="value">{myData.charges}</span>
          </span>
        </div>
        <div class="contact-info niceBox">
          <h3 className="niceTitle">Contact Info</h3>
        </div>
      </div>
    </div>
  );
};

export default Review;
