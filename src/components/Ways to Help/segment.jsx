import React from "react";
import "./segment.css";
import c from "./Images/c.png";
import b from "./Images/b.png";
import f from "./Images/f.png";
import mm from "./Images/mm.png";

function Segment() {
  return (
    <div class="main_body">
      <div class="upperpart">
        <h1 className="primary-heading"> REACH OUT TO US </h1>
      </div>
      <div class="lowerpart">
        <div class="innerbox">
          <div class="icon 1st">
            <img className="imgsegcss" src={c}></img>
          </div>
          <div class="para">
            <div class="heading">
              <h1>INTERACT WITH OUR REPRESENTATIVE</h1>
            </div>
            <div class="rest">
              <p>
                Chat anonymously with a Your Friend representative who is here
                to help you with judging you
              </p>
            </div>
          </div>
        </div>
        <div class="innerbox">
          <div class="icon 2nd">
            <img className="imgsegcss" src={mm}></img>
          </div>
          <div class="para">
            <div class="heading">
              <h1>SHARE YOUR CONCERN</h1>
            </div>
            <div class="rest">
              <p>
                Open up to your representative in a sapce where you get the
                guidance you need,and your concerns get the attention they
                derserve
              </p>
            </div>
          </div>
        </div>
        <div class="innerbox">
          <div class="icon 3rd">
            <img className="imgsegcss" src={b}></img>
          </div>
          <div class="para">
            <div class="heading">
              <h1>CONNECT TO OUR EXPERTS</h1>
            </div>
            <div class="rest">
              <p>
                With 24*7 support from our team, get connected to the right
                therapist for yourself
              </p>
            </div>
          </div>
        </div>
        <div class="innerbox">
          <div class="icon 4th">
            <img className="imgsegcss" src={f} alt=""></img>
          </div>
          <div class="para">
            <div class="heading">
              <h1>UNLEASH A BETTER YOU</h1>
            </div>
            <div class="rest">
              <p>
                Our aim at Your Friend is to make you a healthy and better
                version of yourself
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Segment;
