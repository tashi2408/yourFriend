import React from "react";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/Navbar/Nav";

import Member from "./y1.jpeg";
import Member2 from "./y2.jpeg";
import Member3 from "./y3.jpeg";

import BOT1 from "./BOT1.jpeg";
import BOT2 from "./BOT2.jpeg";

import Card from "./Card";

function OurTeam() {
  return (
    <div>
      <header className="ourteam-header">
        <Nav />
        {/* <div className="heading-ourteam">Our team</div> */}
      </header>
      <div className="ourteam">
        <h2 className="secondary-heading">Board of Counsellors</h2>

        <div className="members-container">
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
            name="Monika Bagri"
            designation="Counsellor & Soft skills trainer"
            headline="Monika Bagri is a dynamic & energetic trainer with the latest flair in psychology and soft skills."
            description="She is an Engineer and has done post-graduation in Psychology. She has counselled many students and adults on one on one basis aa well in group setting. Apart from this, she has delivered assignments on life skills, soft skills, time management and communication skills to many Corporates, Educational / Coaching institutes and NGOs."
          />
          <Card
            member={BOT2}
            name="Manasi Brahme"
            designation="Counsellor"
            headline="Manasi Brahme is a highly motivated Industrial Psychologist who is skilled and experienced in various fields.Her experience in the HR field of different organisations deepened her understanding of human behaviour. "
            description="Ms Brahme worked in almost every branch of the HR industry, which is why her contributions towards employee development in an organisation are exceptional. Her expertise in Psychometry, public speaking and leadership, polished her career through the years. Ms Brahme worked with NGOs as a Psychology Volunteer and constructed questionnaires and data analysis sheets. Her certification and proficiency in German make her commendable in language training. Ms Brahme is a dedicated worker. She is always willing to work her fullest to make the organisation better for employees."
          />{" "}
          <Card
            member={BOT1}
            name="Japneet Anand"
            designation="Counsellor"
            headline="Japneet Anand is the founder of Awaken: Positive Psychological Approach to Mental Health and Training."
            description="Fourteen years of work experience conducting workshops and training many people in educational institutes, NGOs, corporate and Youth groups made Mrs Anand an exemplary professional. Her work proves that he is as passionate about training as he is for one on one consultations. Mrs Anand's passion for the job has guided her in understanding the wholesomeness in helping. Her forte is his determination to mentor people towards positivity, change, and balance in life through counselling and coaching. Mrs Anand, through various psychological techniques, also helps the individual pave their way towards a deeper understanding of their life at large."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OurTeam;
