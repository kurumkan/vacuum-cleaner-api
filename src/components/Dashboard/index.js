import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import Toggle from 'components/Toggle';
import Loader from 'components/Loader';
import './Dashbaord.css';

import { getCurrentState } from 'actions/dashboard';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCurrentState();
  }

  render() {
    const {
      isOn,
      mode,
      power,
      deviceInfo
    } = this.props;

    if(!deviceInfo) {
      return <Loader />
    }
    return (
      <div className="dashboard-block">
        <Toggle
          onChange={(t)=> console.log(t)}
          options={{
            checked: 'on',
            unchecked: 'off'
          }}
        />
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

const select = state =>({
  isOn: state.dashboard.isOn,
  mode:  state.dashboard.mode,
  power:  state.dashboard.power,
  deviceInfo: state.dashboard.deviceInfo
});

const actions = {
  getCurrentState
};

export default connect( select, actions )( Dashboard );