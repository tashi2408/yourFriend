import React, { useState } from 'react';
import FormikForm from './FormikForm';
import './Profile.css';

function Profile() {
  const [fields, updateFields] = useState({
    dob: 'N/A',
    occupation: 'N/A',
    gender: 'N/A',
  });
  return (
    <div className="Profile">
      <div className="wrapper">
        <div className="infocard">
          <div className="profile__img">
            <img
              alt="Profile"
              src={JSON.parse(localStorage.getItem('loginData')).picture}
            ></img>
          </div>
          <div className="infocard__info">
            <span className="username">
              {JSON.parse(localStorage.getItem('loginData')).name}
            </span>
            <span className="mail-id">
              {JSON.parse(localStorage.getItem('loginData')).email}
            </span>
          </div>
        </div>
        <div className="detailscard">
          <FormikForm fields={fields} updateFields={updateFields} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
