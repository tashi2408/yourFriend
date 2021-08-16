import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GrWorkshop as WorkIcon } from "react-icons/gr";
import { MdEventAvailable } from "react-icons/md";
import { BiCheck, BiCodeAlt } from "react-icons/bi";
import { BsTrophy } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { IoArrowRedoCircleSharp } from "react-icons/io5";
import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="backgroundcss">
      <div className="timelinecss">
        <h1 className="h1-responsive font-weight-bold my-5 ">EVENTS</h1>

        <VerticalTimeline className={"check"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work check"
            contentStyle={{ background: "#393b989c", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #393b989c" }}
            date="13th of July 2020"
            dateClassName={"datecolor"}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h4 className="vertical-timeline-element-title fontcss">
              Events 1
            </h4>
            {/* <h4 className="vertical-timeline-element-subtitle">Place</h4> */}
            <p>
              “Break through Obstacles” National webinar with Dr Neelam Mishra
            </p>
            <button className="work-button">
              <IoArrowRedoCircleSharp className="work-icon" />
            </button>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work check"
            contentStyle={{ background: "#393b989c", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #393b989c" }}
            date="24th of May 2020"
            dateClassName={"datecolor"}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<MdEventAvailable className="colorcss" />}
          >
            <h4 className="vertical-timeline-element-title fontcss fontcss">
              Events 2
            </h4>
            {/* <h4 className="vertical-timeline-element-subtitle">Place</h4> */}
            <p>Fortis Hospitals Mental Health Month Collaboration</p>
            <button className="work-button">
              <IoArrowRedoCircleSharp className="work-icon" />
            </button>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work check"
            contentStyle={{ background: "#393b989c", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #393b989c" }}
            date="June 2020"
            dateClassName={"datecolor"}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<BiCodeAlt className="colorcss" />}
          >
            <h4 className="vertical-timeline-element-title fontcss">
              Events 3
            </h4>
            {/* <h4 className="vertical-timeline-element-subtitle">Place</h4> */}
            <p>
              Collaborations with Biocom, SRM and Baatien Unkaheesi (mental
              health initiative)
            </p>
            <button className="work-button">
              <IoArrowRedoCircleSharp className="work-icon" />
            </button>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work check"
            contentStyle={{ background: "#393b989c", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #393b989c" }}
            date="August 2020"
            dateClassName={"datecolor"}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<AiOutlineLink className="colorcss" />}
          >
            <h4 className="vertical-timeline-element-title fontcss">
              Events 4
            </h4>
            {/* <h4 className="vertical-timeline-element-subtitle">Place</h4> */}
            <p>“Psychology Simplified” - PAN India webinar series</p>
            <button className="work-button">
              <IoArrowRedoCircleSharp className="work-icon" />
            </button>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work check"
            contentStyle={{ background: "#393b989c", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #393b989c" }}
            date="19th September 2020"
            dateClassName={"datecolor"}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<BiCheck className="colorcss" />}
          >
            <h4 className="vertical-timeline-element-title fontcss">
              Events 5
            </h4>
            {/* <h4 className="vertical-timeline-element-subtitle">Place</h4> */}
            <p>
              Navratan Foundation Collaboration - mental health session with Mrs
              Priti Srivastava
            </p>
            <button className="work-button">
              <IoArrowRedoCircleSharp className="work-icon" />
            </button>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work check"
            contentStyle={{ background: "#393b989c", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #393b989c" }}
            date="31st October 2020"
            dateClassName={"datecolor"}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<AiOutlineLink className="colorcss" />}
          >
            <h4 className="vertical-timeline-element-title fontcss">
              Events 6
            </h4>
            {/* <h4 className="vertical-timeline-element-subtitle">Place</h4> */}
            <p>“Tackle your Talk” with Sakshi Pasricha </p>
            <button className="work-button">
              <IoArrowRedoCircleSharp className="work-icon" />
            </button>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work check"
            contentStyle={{ background: "#393b989c", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #393b989c" }}
            date="24th October 2020"
            dateClassName={"datecolor"}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<AiOutlineLink className="colorcss" />}
          >
            <h4 className="vertical-timeline-element-title fontcss">
              Events 7
            </h4>
            {/* <h4 className="vertical-timeline-element-subtitle">Place</h4> */}
            <p>“Sought your Thoughts” with Anandita Anand </p>
            <button className="work-button">
              <IoArrowRedoCircleSharp className="work-icon" />
            </button>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work check"
            contentStyle={{ background: "#393b989c", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #393b989c" }}
            date="23rd April 2021"
            dateClassName={"datecolor"}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<AiOutlineLink className="colorcss" />}
          >
            <h4 className="vertical-timeline-element-title fontcss">
              Events 8
            </h4>
            {/* <h4 className="vertical-timeline-element-subtitle">Place</h4> */}
            <p>
              panel discussion with mental health professionals: Shweta Sharma,
              Kunashni Parekh, Srishti
            </p>
            <button className="work-button">
              <IoArrowRedoCircleSharp className="work-icon" />
            </button>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work check"
            contentStyle={{ background: "#393b989c", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #393b989c" }}
            date="26th June 2021"
            dateClassName={"datecolor"}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<AiOutlineLink className="colorcss" />}
          >
            <h4 className="vertical-timeline-element-title fontcss">
              Events 9
            </h4>
            {/* <h4 className="vertical-timeline-element-subtitle">Place</h4> */}
            <p>
              “YOU 2.0: -Unleashing a better version of yourself” A series of
              live sessions with mental health activists
            </p>
            <button className="work-button">
              <IoArrowRedoCircleSharp className="work-icon" />
            </button>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work check"
            contentStyle={{ background: "#393b989c", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #393b989c" }}
            date="31st July 2021"
            dateClassName={"datecolor"}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<AiOutlineLink className="colorcss" />}
          >
            <h4 className="vertical-timeline-element-title fontcss">
              Events 10
            </h4>
            {/* <h4 className="vertical-timeline-element-subtitle">Place</h4> */}
            <p>
              “Awakening paths: Exploring psychology as a career” - PAN India
              online session
            </p>
            <button className="work-button">
              <IoArrowRedoCircleSharp className="work-icon" />
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>

        {/* <h3 className="fontcss">*All updates shall also be given on the Instagram handle for the event.</h3> */}
      </div>
    </div>
  );
};

export default Timeline;
