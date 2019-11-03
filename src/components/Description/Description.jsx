// core
import React from 'react';

// styles
import './Description.scss';

const Description = ({ title, details }) => (
  <div className="row">
    <div className="col-12">
      <h1>{title}</h1>
    </div>
    {
      details && <div className="col-12">
        <div className="page-description">
          <h5 className="label">Technologies:</h5>
          <p className="details">{details}</p>
        </div>
      </div>
    }
    <div className="col-12">
      <hr className="description-delimiter" />
    </div>
  </div>
);

export default Description;
