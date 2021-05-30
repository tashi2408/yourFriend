import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {GrWorkshop as WorkIcon} from 'react-icons/gr'
import {MdEventAvailable} from 'react-icons/md'
import {BiCheck,BiCodeAlt} from 'react-icons/bi'
import {BsTrophy} from 'react-icons/bs'
import {AiOutlineLink} from 'react-icons/ai'
import './Timeline.css';

const Timeline=()=>{

return(


<div className="backgroundcss">
      
    <div className="timelinecss">
    <h1 className="h1-responsive font-weight-bold my-5 ">TIMELINE</h1>

    <VerticalTimeline className={'check'}>
    

    <VerticalTimelineElement
    className="vertical-timeline-element--work check"
    contentStyle={{ background: '#f05b36', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #f05b36' }}
    date='12th of May'
    dateClassName={ 'datecolor' }
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<WorkIcon />}
     >
    <h4 className="vertical-timeline-element-title fontcss">Events 1</h4>
    </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work check"
    contentStyle={{ background: '#f05b36', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #f05b36' }}
    date='20th of May'
    dateClassName={ 'datecolor' }
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<MdEventAvailable className="colorcss" />}
     >
    <h4 className="vertical-timeline-element-title fontcss fontcss">Events 2</h4>
    </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work check"
    contentStyle={{ background: '#f05b36', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #f05b36' }}
    date='13th of June'
    dateClassName={ 'datecolor' }
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<BiCodeAlt className="colorcss"/>}
     >
    <h4 className="vertical-timeline-element-title fontcss">Events 3</h4>
    </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work check"
    contentStyle={{ background: '#f05b36', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #f05b36' }}
    date='1st of July'
    dateClassName={ 'datecolor' }
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<AiOutlineLink className="colorcss" />}
     >
    <h4 className="vertical-timeline-element-title fontcss">Events 4</h4>
    </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work check"
    contentStyle={{ background: '#f05b36', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #f05b36' }}
    date='12th of July'
    dateClassName={ 'datecolor' }
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<BiCheck className="colorcss" />}
     >
    <h4 className="vertical-timeline-element-title fontcss">Events 5</h4>
    </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work check"
    contentStyle={{ background: '#f05b36', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #f05b36' }}
    date='1st of August'
    dateClassName={ 'datecolor' }
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<AiOutlineLink className="colorcss" />}
     >
    <h4 className="vertical-timeline-element-title fontcss">Events 6</h4>
    </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element--work check"
    contentStyle={{ background: '#f05b36', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #f05b36' }}
    date='12th of August'
    dateClassName={ 'datecolor' }
    iconStyle={{ background: '#fff', color: '#fff' }}
    icon={<BsTrophy className="colorcss"/>}
     >
    <h4 className="vertical-timeline-element-title fontcss">Events 7</h4>
    </VerticalTimelineElement>

    </VerticalTimeline>

    <h3 className="fontcss">*All updates shall also be given on the Instagram handle for the event.</h3>


    </div>
    
</div>
    );
};

export default Timeline;