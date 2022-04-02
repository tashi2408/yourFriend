import { addHours, addDays, format } from 'date-fns';
import { useState } from 'react';

const Mode = () => {
  const Plans = [
    {
      id: 1,
      name: 'Starter',
      price: 3000,
      time: 45,
    },
    {
      id: 2,
      name: 'Silver',
      price: 4000,
      time: 60,
    },
  ];
  return (
    <div class="ba">
      <div className="wrapper">
        <h3>YourFriend will assign the best available Expert to you.</h3>
        <p>Choose your mode of contact</p>
        <div className="baModeContainer">
          {Plans.map((plan) => {
            return <Plan {...plan} />;
          })}
        </div>
      </div>
    </div>
  );
};

const Plan = ({ price = 3000, time = 45 }) => {
  const [dateVisible, setDateVisible] = useState(() => false);
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
        <span
          className="btn"
          onClick={() => {
            setDateVisible(!dateVisible);
          }}
        >
          SELECT
        </span>
      </div>
      <DateSection visible={dateVisible} />
    </div>
  );
};

const DateSection = ({ visible = true }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const changeSelection = (date) => {
    setSelectedDate(date);
  };

  const days = [];
  for (let i = 0; i < 7; i++) days.push(addDays(new Date(), i));
  const times = [];
  for (let i = 0; i < 12; i++) times.push(addHours(new Date(), i));

  return (
    <>
      <div className={visible ? 'dateSection_2 show' : 'dateSection_2'}>
        <div className="days">
          {days.map((day, i) => {
            return (
              <Day
                day={day}
                changeSelection={changeSelection}
                isAvailable={i % 2 === 0}
              />
            );
          })}
        </div>
        <div className="timeSlots">
          {times.map((time, i) => {
            return (
              <Time
                changeSelection={changeSelection}
                isAvailable={i % 2 === 0}
                time={time}
              />
            );
          })}
        </div>
        {selectedDate && format(selectedDate, 'dd eeee hh:mm')}
      </div>
    </>
  );
};

const Day = ({ day, isAvailable = false, changeSelection }) => {
  if (!isAvailable)
    return (
      <div className="dayNDate--dull">
        <span className="abs">N/A</span>
        <span>{day.getDate()}</span>
      </div>
    );
  return (
    <>
      <div className="dayNDate" onClick={() => changeSelection(day)}>
        <span>
          {day.getDate()} {format(day, 'eeee').slice(0, 3)}
        </span>
      </div>
    </>
  );
};

const Time = ({ time, changeSelection }) => {
  return (
    <div onClick={() => changeSelection(time)} className="time">
      {format(time, 'hh:mm')}
    </div>
  );
};

export default Mode;
