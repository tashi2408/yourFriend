import './pricing.css';

export default function Card({
  pack,
  name,
  description,
  recommondation,
}) {
  return (
    <>
      <div className="pricingcard Packitem">
        <div className="pricingcard-front">
          <img className="pack-image" src={pack} alt="pack-item" />
          <div className="pack-content">
            <h1 className="pack-name">{name}</h1>
            <h2 className="pack-description">{description}</h2>
            <p className="pack-recommondation">{recommondation}</p>
            <a className="button">Buy</a>
          </div>
        </div>
      </div>
    </>
  );
}