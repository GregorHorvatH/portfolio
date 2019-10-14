// core
import React from 'react';
import ReactLoader from 'react-loader-spinner';

// styles
import './Loader.scss';

const Loader = () => (
  <div className="row loader">
    <ReactLoader
      type="ThreeDots"
      color="#ffbf00"
      height={40}
      width={100}
    />
  </div>
);

export default Loader;
