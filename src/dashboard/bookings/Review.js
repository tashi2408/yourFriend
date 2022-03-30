import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import './review.css';
import { useState } from 'react';

const Review = () => {
  const myData = {
    expert: 'Shivom Srivastava',
    date: Date.now().toString(),
    timePeriod: '12:00 - 2:00',
    preferredSlot: '12:00',
    type: 'voice call',
    charges: 'free',
  };
  const [value, setValue] = useState(null);
  const [checked, setChecked] = useState(false);
  return (
    <div className="review-section wrapper">
      <h2>Review your booking</h2>
      <div class="main">
        <div class="app-details niceBox">
          <h3 className="niceTitle">Your Appointment Details</h3>
          <span className="listItem">
            <span className="key">Expert:</span>{' '}
            <span class="value">{myData.expert}</span>
          </span>
          <span className="listItem">
            <span className="key">Date:</span>{' '}
            <span class="value">{myData.date}</span>
          </span>
          <span className="listItem">
            <span className="key">Time Period:</span>{' '}
            <span class="value">{myData.timePeriod}</span>
          </span>
          <span className="listItem">
            <span className="key">Preferred Slot:</span>{' '}
            <span class="value"> {myData.preferredSlot} </span>
          </span>
          <span className="listItem">
            <span className="key">Type:</span>{' '}
            <span class="value">{myData.type}</span>
          </span>
          <span className="listItem">
            <span className="key">Charges:</span>{' '}
            <span class="value">{myData.charges}</span>
          </span>
        </div>
        <div class="contact-info niceBox">
          <h3 className="niceTitle">
            Please provide us with your contact details
          </h3>
          <p className="belowNiceTitle">
            So we may keep you updated about your appointment's status.
          </p>
          <TextField
            fullWidth
            id="standard-basic"
            placeholder="Phone Number"
            variant="standard"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            helperText={value}
          />
          <TextField
            fullWidth
            id="standard-basic"
            placeholder="Email"
            variant="standard"
            type={'email'}
            value={'DefaultUserEmail@gmail.com'}
            disabled
          />
          <div className="terms">
            <p className="terms__accept">
              Your session is completely confidential and private. The
              information is only accessible to our qualified mental health
              professionals in case of legal or quality supervision. Do you
              accept.
            </p>
            <Checkbox
              checked={checked}
              onChange={(e) => {
                setChecked(e.target.checked);
              }}
            />
          </div>
          <button type="submit" className="btn" disabled={!checked}>
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
