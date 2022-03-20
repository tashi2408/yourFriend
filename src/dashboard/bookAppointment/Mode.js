import { addHours, daysToWeeks, startOfDay } from 'date-fns';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns';

const Mode = () => {
  return (
    <div class="ba">
      <div className="wrapper">
        <h3>YourFriend will assign the best available Expert to you.</h3>
        <p>Choose your mode of contact</p>
        <div className="baModeContainer">
          <Plan />
          <Plan price={4000} time={60} />
        </div>
      </div>
    </div>
  );
};

const Plan = ({ price = 3000, time = 45 }) => {
  const [dateVisible, setDateVisible] = useState(false);
  return (
    <div className="baBox baModeBox">
      <div className="baModeBox_main">
        <img
          src="https://www.svgrepo.com/show/52469/phone-call.svg"
          alt="phone"
        />
        <span className="baModeBox_price">{`₹ ${price}`}</span>
        <div className="baModeBox_about">
          <div className="baType">VOICE CALL</div>
          <div>{`For Initial ${time} minutes`}</div>
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
      <DateSection2 dateVisible={dateVisible} />
      {/* <DateSection dateVisible={dateVisible} /> */}
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
const DateSection2 = () => {
  const days = [];
  for (let i = 0; i < 7; i++) days.push(addDays(new Date(), i));
  const times = [];
  for (let i = 0; i < 12; i++) times.push(addHours(new Date(), i));
  return (
    <>
      <div className="dateSection_2">
        <div className="days">
          {days.map((day) => {
            return (
              <>
                <div className="dayNDate">
                  <span>{day.getDate()}</span>
                </div>
              </>
            );
          })}
        </div>
        <div className="timeSlots">
          {times.map((time) => {
            return (
              <>
                <div className="time">{`${time.getHours()}:${time.getMinutes()}`}</div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Mode;
