import React, { useState } from "react";
import FormikForm from "./FormikForm";
import './Profile.css';
function Profile() {
    const [fields, updateFields] = useState({
        dob: "",
        occupation: "",
        gender: ""
      });
    return (
        <div className="Profile flex-center">
            <div className={"background flex-center"}>
                <img className={"img"} alt="oops" src={JSON.parse(localStorage.getItem('loginData')).picture}></img>
            </div>
            <div className="infocard">
                <p className="username">{JSON.parse(localStorage.getItem('loginData')).name}</p>
                <p className="mail-id">{JSON.parse(localStorage.getItem('loginData')).email}</p>
            </div>
            <div className="detailscard" >
                <FormikForm fields={fields} updateFields={updateFields} />
                </div>
            </div>

    );
}

export default Profile;