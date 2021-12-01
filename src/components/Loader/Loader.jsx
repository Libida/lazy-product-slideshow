import React from 'react';

import './Loader.scss';

const Loader = () => {
  const amountOfCircles = 5;

  return (
    <div className="preloaders">
      <div className="loader-wrapper loader-wrapper--1">
        <div className="loader loader--1">
          {
            [...Array(amountOfCircles)].map((e, i) => <div className="circle-line"></div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Loader;
