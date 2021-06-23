import React, { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/Navbar/Nav";
import { motion } from "framer-motion";

import Member from "./y1.jpeg";
import Member2 from "./y2.jpeg";
import Member3 from "./y3.jpeg";

import Card from "./Card";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Membercontainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

function OurTeam() {
  const animation2 = useAnimation();

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
      animation2.start({
        x: [-80, 60, 0],
        y: 0,
        scale: 1,
        rotate: 0,
      });
    }

    if (!inView) {
      animation.start("hidden");
      animation2.start({
        x: -60,
        y: 0,
        scale: 0.5,
        rotate: 0,
      });
    }
  }, [animation, inView]);
  return (
    <div>
      <Nav />
      <header className="ourteam-header">
        <motion.div
          // initial={{ scale: 3 }}
          animate={{ scale: [1, 2, 1] }}
          transition={{
            type: "spring",
            bounce: 0.3,
          }}
          className="heading-ourteam color-w"
        >
          Our team
        </motion.div>
      </header>
      <div className="ourteam">
        <motion.h2
          ref={ref}
          animate={animation2}
          transition={{
            type: "spring",
            bounce: 0.3,
          }}
          className="secondary-heading"
        >
          Board of Advisors
        </motion.h2>

        <motion.div
          ref={ref}
          className="members-container Membercontainer "
          variants={Membercontainer}
          initial="hidden"
          animate={animation}
        >
          <Card
            member={Member}
            name="Vikasni Kannan"
            designation="Clinical Psychologist"
            headline="Vikasni Kannan is a RCI Licensed clinical psychologist. She did her graduation and post-graduation from the University of Delhi, before perusing her MPhil in Clinical Psychology. "
            description="She is currently working as an independent practitioner and as a School Psychologist with the Vydehi Group of Institutions, Bangalore. She has previously worked with Your Dost, Generation India, Utsaah Psychology Clinic, and Sensitivity Early Intervention Centre. She specialises in diagnosis, assessment, and long term interventions for mental health concerns across age groups. Additionally, she regularly conducts Awareness and Training Workshops for students and teachers."
          />

          <Card
            member={Member2}
            name="Shruti Jajoo Jhanwar"
            designation="Counselling Psychologist"
            headline="Mrs. Shruti Jajoo Jhanwar is a Counselling Psychologist. She holds a Master’s degree in psychology. She is a certified Career Counselor at Bodhami. "
            description="She is passionate about her work and loves interacting with people. She is an instagram influencer. Her expertise is in Child Counseling and Career Counseling. Her forte is to challenalise a person's potential in the right direction and troubleshoot a person's issues by providing real time solutions. She has worked as a counselor for 3 years in one of the Reputed schools in India and now during this pandemic, she is helping people by taking online counseling sessions."
          />
          <Card
            member={Member3}
            name="Vikasni Kannan"
            designation="Clinical Psychologist"
            headline="Monika Bagri is a dynamic & energetic trainer with the latest flair in psychology and soft skills."
            description="She is an Engineer and has done post-graduation in Psychology. She has counselled many students and adults on one on one basis aa well in group setting. Apart from this, she has delivered assignments on life skills, soft skills, time management and communication skills to many Corporates, Educational / Coaching institutes and NGOs."
          />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default OurTeam;

// {/* <div className="member">
//   <div className="member-image-container">
//     <img src={Member} className="member-image" />
//   </div>
//   <div className="member-content">
//     <h1 className="member-name">Shubham Gautam</h1>
//     <h2 className="member-designation">Founder</h2>
//     <p className="member-description">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//       tempor incididunt ut labore et dolore magna aliqua
//     </p>
//     <ul className="member-icons">
//       <li>
//         <a>
//           <i>
//             <FaFacebookF className="single-icon-mem" />
//           </i>
//         </a>
//       </li>
//       <li>
//         <a>
//           <i>
//             <FaInstagram />
//           </i>
//         </a>
//       </li>
//       <li>
//         <a>
//           <i>
//             <FaLinkedinIn />
//           </i>
//         </a>
//       </li>
//       <li>
//         <a>
//           <i>
//             <FaTwitter />
//           </i>
//         </a>
//       </li>
//     </ul>
//   </div>
// </div>; */}
