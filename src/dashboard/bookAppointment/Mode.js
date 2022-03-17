import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Mode = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div class="ba">
      <div className="wrapper">
        <h3>YourFriend will assign the best available Expert to you.</h3>
        <p>Choose your mode of contact</p>
        <div className="baModeContainer">
          <div className="baBox baModeBox">
            <div className="baModeBox_main">
              <span className="baModeBox_price">3000$</span>
              <div className="baModeBox_about">
                <div>VOICE CALL</div>
                <div>For Initial 45 minutes</div>
                <p>
                  Your Expert will talk to you one on one over a dedicated phone
                  line and work with you to help find the answers you need.
                  Confidentiality is guaranteed.
                </p>
              </div>
              <a href="/bookAppointment/mode" className="btn">
                SELECT
              </a>
            </div>
            <div className="dateSection">
              <span className="smolText">
                Please Choose any Available Date & Time Below
              </span>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date()}
                showTimeInput
              />
            </div>
          </div>
          <div className="baBox baModeBox"></div>
          <div className="baBox baModeBox"></div>
        </div>
      </div>
    </div>
  );
};

export default Mode;
