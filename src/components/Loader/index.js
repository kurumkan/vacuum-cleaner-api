import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Loader.css';

const Loader = () => (
  <div className="loader-wrapper">
    <div className="loader">
      <div className="loader-inner-circle" />
      <div className="loader-inner-circle" />
      <div className="loader-inner-circle" />
      <div className="loader-inner-circle" />
    </div>
  </div>
);

export default Loader;