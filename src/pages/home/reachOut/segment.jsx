import './segment.css';
import share from './Images/share.svg';
import interact from './Images/interact.svg';
import connect from './Images/connect.svg';
import unleash from './Images/unleash.svg';

const niceList = [
  {
    heading: 'interact with our representatives',
    img: interact,
  },
  {
    heading: 'share your concern',
    img: share,
  },
  {
    heading: 'connect to our experts',
    img: connect,
  },
  {
    heading: 'unleash a better you',
    img: unleash,
    last: true,
  },
];

function Segment() {
  return (
    <div className="wrapper section">
      <h1 className="primary-heading">Reach out to us</h1>
      <div className="reach-out-points">
        {niceList.map((reachPoint, index) => (
          <div className="reach-point" key={reachPoint.heading}>
            <div className="reach-out-point">
              <img src={reachPoint.img} alt="reach" />
              <h2>{reachPoint.heading}</h2>
            </div>
            <span className="step">{`${index + 1}.`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Segment;
