import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Main.css';

import Header from 'components/Header';

const Home = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div className="content-wrapper">
        {children}
      </div>
    </div>
  );
};

export default Home;
