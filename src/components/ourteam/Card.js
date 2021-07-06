import React, { useEffect } from "react";

import Member from "./user-2.jpg";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import "./our.css";

const Memberitem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Card({
  member,
  name,
  designation,
  headline,
  description,
}) {
  //   const { ref, inView } = useInView();
  //   const animation = useAnimation();

  //   useEffect(() => {
  //     if (inView) {
  //       animation.start("Memberitem.visible");
  //       console.log("in view");
  //     }

  //     if (!inView) {
  //       animation.start("Memberitem.hidden");
  //       console.log("not in view");
  //     }
  //   }, [animation, inView]);
  return (
    <>
      <motion.div className="card Memberitem" variants={Memberitem}>
        <div className="card-front">
          <img src={member} alt="team-member-photo" />
          <div className="member-content">
            <h1 className="member-name">{name}</h1>
            <h2 className="member-designation">{designation}</h2>
            <p className="member-description">{headline}</p>
          </div>
        </div>
        <div className="card-back">
          <div className="member-content">
            <p className="member-description">{description}</p>
          </div>

          <ul className="member-icons">
            <li>
              <a>
                <i>
                  <FaFacebookF className="single-icon-mem" />
                </i>
              </a>
            </li>
            <li>
              <a>
                <i>
                  <FaInstagram />
                </i>
              </a>
            </li>
            <li>
              <a>
                <i>
                  <FaLinkedinIn />
                </i>
              </a>
            </li>
            <li>
              <a>
                <i>
                  <FaTwitter />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
}
