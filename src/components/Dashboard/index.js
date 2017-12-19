import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/Loader';
import './Dashbaord.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      isOn,
      mode,
      power,
      deviceInfo,
    } = this.props;

    if(!deviceInfo) {
      return <Loader />
    }
    return (
      <div className="dashboard-block">

      </div>
    );
  }
}

Dashboard.propTypes = {
  isOn: PropTypes.bool,
  mode: PropTypes.string,
  power: PropTypes.number,
  deviceInfo: PropTypes.shape({
    manufacturer: PropTypes.string,
    serialNumber: PropTypes.string,
    date: PropTypes.string,
    model: PropTypes.string
  })
};

Dashboard.defaultProps = {
  isOn: false,
  mode: 'dry',
  power: 0,
  deviceInfo: null
};

export default Dashboard;