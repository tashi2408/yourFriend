import './Card.css';
import member from '../../../assets/teamMembers/11.jpg';
import { IoCalendarOutline } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';

export default function ExpertCard({ data }) {
  return (
    <div className="expert_card">
      <div className="expert_flex">
        <div className="expert_img">
          <img src={member} alt="expert" />
        </div>
        <div className="expert_info">
          <div className="expert_name">{data.name}</div>
          <div className="expert_designation">{data.designation}</div>
          <div className="expert_rating">
            <div className="expert_star">
              {[...Array(data.rating)].map((e, i) => (
                <AiFillStar key={i} />
              ))}
            </div>
          </div>
          <div className="expert_available">
            <IoCalendarOutline />
            next available on: {data.available}
          </div>
        </div>
      </div>

      <div className="expert_contact">
        <div>Chat</div>
        <div>Message</div>
      </div>
    </div>
  );
}
