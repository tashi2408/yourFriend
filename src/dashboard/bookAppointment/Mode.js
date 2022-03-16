import { useState } from 'react';
import { DateTimePicker } from '@mui/lab';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const Mode = () => {
  const [value, setValue] = useState(new Date('2020-06-03T21:11:54'));
  const handleChange = (newVal) => setValue(newVal);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div class="ba">
        <div className="wrapper">
          <h3>YourFriend will assign the best available Expert to you.</h3>
          <p>Choose your mode of contact</p>
          <div className="baModeContainer">
            <div className="baBox baModeBox">
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
              <DateTimePicker
                label="Date&Time picker"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
            <div className="baBox baModeBox"></div>
            <div className="baBox baModeBox"></div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Mode;
