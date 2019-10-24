// core
import React from 'react';
import ReactLoader from 'react-loader-spinner';
import { bool } from 'prop-types';

// styles
import './Loader.scss';

const Loader = ({ children, isLoading }) => (
  isLoading
    ? <div className="row loader">
      <ReactLoader
        type="ThreeDots"
        color="#ffbf00"
        height={40}
        width={100}
      />
    </div>
    : children
);

Loader.propTypes = {
  isLoading: bool,
};

Loader.defaultProps = {
  isLoading: false,
  children: <></>
};

export default Loader;
