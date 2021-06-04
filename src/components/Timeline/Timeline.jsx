import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {GrWorkshop as WorkIcon} from 'react-icons/gr'
import {MdEventAvailable} from 'react-icons/md'
import {BiCheck,BiCodeAlt} from 'react-icons/bi'
import {BsTrophy} from 'react-icons/bs'
import {AiOutlineLink} from 'react-icons/ai'
import { IoArrowRedoCircleSharp } from "react-icons/io5";
import './Timeline.css';

const Timeline=()=>{

return(


<div className="backgroundcss">
      
    <div className="timelinecss">
    <h1 className="h1-responsive font-weight-bold my-5 ">EVENTS</h1>

    <VerticalTimeline className={'check'}>
    

    <VerticalTimelineElement
    className="vertical-timeline-element--work check"
    contentStyle={{ background: '#393b989c', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #393b989c' }}
    date='12th of May'
    dateClassName={ 'datecolor' }
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<WorkIcon />}
     >
    <h4 className="vertical-timeline-element-title fontcss">Events 1</h4>
    <h4 className="vertical-timeline-element-subtitle">Place</h4>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
    </p>
    <button className="work-button">
        <IoArrowRedoCircleSharp className="work-icon" />
    </button>
    </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work check"
    contentStyle={{ background: '#393b989c', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #393b989c' }}
    date='20th of May'
    dateClassName={ 'datecolor' }
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<MdEventAvailable className="colorcss" />}
     >
    <h4 className="vertical-timeline-element-title fontcss fontcss">Events 2</h4>
    <h4 className="vertical-timeline-element-subtitle">Place</h4>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
    </p>
    <button className="work-button">
        <IoArrowRedoCircleSharp className="work-icon" />
    </button>
    </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work check"
    contentStyle={{ background: '#393b989c', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #393b989c' }}
    date='13th of June'
    dateClassName={ 'datecolor' }
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<BiCodeAlt className="colorcss"/>}
     >
    <h4 className="vertical-timeline-element-title fontcss">Events 3</h4>
    <h4 className="vertical-timeline-element-subtitle">Place</h4>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
    </p>
    <button className="work-button">
        <IoArrowRedoCircleSharp className="work-icon" />
    </button>
    </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work check"
    contentStyle={{ background: '#393b989c', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #393b989c' }}
    date='1st of July'
    dateClassName={ 'datecolor' }
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<AiOutlineLink className="colorcss" />}
     >
    <h4 className="vertical-timeline-element-title fontcss">Events 4</h4>
    <h4 className="vertical-timeline-element-subtitle">Place</h4>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
    </p>
    <button className="work-button">
        <IoArrowRedoCircleSharp className="work-icon" />
    </button>
    </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work check"
    contentStyle={{ background: '#393b989c', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #393b989c' }}
    date='12th of July'
    dateClassName={ 'datecolor' }
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<BiCheck className="colorcss" />}
     >
    <h4 className="vertical-timeline-element-title fontcss">Events 5</h4>
    <h4 className="vertical-timeline-element-subtitle">Place</h4>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
    </p>
    <button className="work-button">
        <IoArrowRedoCircleSharp className="work-icon" />
    </button>
    </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work check"
    contentStyle={{ background: '#393b989c', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #393b989c' }}
    date='1st of August'
    dateClassName={ 'datecolor' }
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<AiOutlineLink className="colorcss" />}
     >
    <h4 className="vertical-timeline-element-title fontcss">Events 6</h4>
    <h4 className="vertical-timeline-element-subtitle">Place</h4>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid
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