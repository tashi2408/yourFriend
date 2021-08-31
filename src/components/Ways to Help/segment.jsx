import React from "react";
import "./segment.css";
import share from "./Images/share.svg";
import interact from "./Images/interact.svg";
import connect from "./Images/connect.svg";
import unleash from "./Images/unleash.svg";
import { FiArrowRightCircle } from "react-icons/fi";

function Segment() {
  return (
    <div class="reach-out">
      {/* <h1>INTERACT WITH OUR REPRESENTATIVE</h1>
      <h1>SHARE YOUR CONCERN</h1>
      <h1>CONNECT TO OUR EXPERTS</h1>
      <h1>UNLEASH A BETTER YOU</h1> */}
      <h1 className="primary-heading">Reach out to us</h1>

      <div className="reach-out-points">
        <div className="reach-point">
          <div className="reach-out-point">
            <img src={interact} />
            <h2>interact with our representatives</h2>
          </div>
          <FiArrowRightCircle class="reach-out-arrow" />
        </div>
        <div className="reach-point">
          <div className="reach-out-point">
            <img src={share} />
            <h2>share your concern</h2>
          </div>
          <FiArrowRightCircle class="reach-out-arrow" />
        </div>
        <div className="reach-point">
          <div className="reach-out-point">
            <img src={connect} />
            <h2>connect to our experts</h2>
          </div>
          <FiArrowRightCircle class="reach-out-arrow" />
        </div>
        <div className="reach-point">
          <div className="reach-out-point">
            <img src={unleash} />
            <h2>unleash a better you</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Segment;
