import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/Loader';
import './Dashbaord.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridIsReady: false
    };
  }
  render() {
    return (
      <div>asd</div>
    );
  }
}

Dashboard.propTypes = {

};

Dashboard.defaultProps = {

};

export default Dashboard;