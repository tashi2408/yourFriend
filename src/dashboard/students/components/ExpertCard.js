import './Card.css';

export default function ExpertCard({ data }) {
  return (
    <div className="expert_card">
      <div className="expert_flex">
        <div className="expert_img">
          <img src={data.img} alt="expert" />
        </div>
        <div className="expert_info">
          <div className="expert_name">{data.name}</div>
          <div className="expert_designation">{data.designation}</div>
          <div className="expert_rating">
            <div className="expert_star">{data.rating}</div>
          </div>
        </div>
      </div>
      <div className="expert_available">{data.available}</div>
      <div className="expert_contact">
        <div>Chat</div>
        <div>Message</div>
      </div>
    </div>
  );
}
