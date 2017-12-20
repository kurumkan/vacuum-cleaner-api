import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Main.css';

const Home = ({ children }) => {
  return (
    <div className="container">
      <div className="content-wrapper">
        {children}
      </div>
    </div>
  );
};

export default Home;
