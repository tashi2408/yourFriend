import React, {useState} from "react";
import './Profile.css';
import logo from "./profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { margin } from "@mui/system";
function Profile() {
  return (
    <div className="Profile flex-center">
        <div className={"background flex-center"}>
            <img className={"img"} alt="oops" src={logo}></img>
        </div>
        <div className="infocard">
            <p className="username">Username</p>
            <p className="mail-id">Mail-Id</p>
        </div>
        <div className="detailscard" >
            <div className="edit"><h2>Personal Details</h2><a style={{ float:"right"}} ><FontAwesomeIcon icon={faUserEdit}/></a></div>
            <div className="dateofbirth"><label for="test">Date Of Birth :</label>
            <span><input name="dob" id="data" type="text" /></span>
            </div>
            <div className="occupation"><label for="test">..Occupation :</label>
            <span><input name="occupation" id="data" type="text" /></span>
            </div>
            <div className="gender"><label for="test">...........Gender :</label>
            <span><input name="gender" id="data" type="text" /></span>
            </div>
        </div>
   </div>
  );
}

export default Profile;