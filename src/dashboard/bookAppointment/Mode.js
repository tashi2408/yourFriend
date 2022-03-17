import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Mode = () => {
  return (
    <div class="ba">
      <div className="wrapper">
        <h3>YourFriend will assign the best available Expert to you.</h3>
        <p>Choose your mode of contact</p>
        <div className="baModeContainer">
          <Plan />
          <Plan />
        </div>
      </div>
    </div>
  );
};

const Plan = () => {
  const [dateVisible, setDateVisible] = useState(false);
  return (
    <div className="baBox baModeBox">
      <div className="baModeBox_main">
        <img
          src="https://www.svgrepo.com/show/52469/phone-call.svg"
          alt="phone"
        />
        <span className="baModeBox_price">3000$</span>
        <div className="baModeBox_about">
          <div className="baType">VOICE CALL</div>
          <div>For Initial 45 minutes</div>
          <p>
            Your Expert will talk to you one on one over a dedicated phone line
            and work with you to help find the answers you need. Confidentiality
            is guaranteed.
          </p>
        </div>
        <a
          href="/bookAppointment/mode"
          className="btn"
          onClick={() => setDateVisible(!dateVisible)}
        >
          SELECT
        </a>
      </div>
      <DateSection dateVisible={dateVisible} />
    </div>
  );
};
const DateSection = ({ dateVisible }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  // if (!dateVisible) return null;
  return (
    <div className="dateSection">
      <span className="smolText">
        Choose/Type any Available Date & Time Below
      </span>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        minDate={new Date()}
        showTimeInput
      />
    </div>
  );
};

export default Mode;
