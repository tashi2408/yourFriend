import Package from '../../assets/pricing/package.jpg';
import Package2 from '../../assets/pricing/package1.jpg';
import Package3 from '../../assets/pricing/package2.jpg';


import Card from './pricingcard';

function Pricing() {
  return (

      <div className="pricing">
        <h1>Packages</h1>

        <div className="pack-container">
          <Card
            pack={Package}
            name="Pack1"
            description="zzzzzzzzzzzzzz"
            recommondation="most useful"
          />
          <Card
            pack={Package2}
            name="Pack2"
            description="zzzzzzzzzzzzzz"
            recommondation="best seller"
          />
          <Card
            pack={Package3}
            name="Pack3"
            description="zzzzzzzzzzzzzz"
            recommondation="recommended"
          />
        </div>
      </div>
  );
}

export default Pricing;