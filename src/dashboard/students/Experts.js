import React, { useState } from 'react';
import ExpertCard from './components/ExpertCard';
import Data from './components/Data';
import './Experts.css';

export default function Experts() {
  const [data, setData] = useState(Data);
  return (
    <div>
      <div className="experts_header">
        <h1 className="experts_title">What do you want to discuss about? </h1>
      </div>
      <div className="experts_section">
        <div className="experts_category"></div>
        <div className="experts_rating"></div>

        <div className="experts_search"></div>
        <div className="experts">
          {data.map((val, i) =>
            //   <ExpertCard data={val} key={i} />
            console.log(val)
          )}
        </div>
      </div>
    </div>
  );
}
