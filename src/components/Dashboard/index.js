import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import Toggle from 'components/Toggle';
import Loader from 'components/Loader';
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

import './Dashbaord.css';

import { getCurrentState, toggleDevice, setMode } from 'actions/dashboard';

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
      deviceInfo,
      stats
    } = this.props;

    if(!deviceInfo || !stats) {
      return <Loader />
    }
    return (
      <div className="dashboard-block">
        <div>
          <Toggle
            onChange={this.props.toggleDevice}
            options={{
              checked: 'on',
              unchecked: 'off'
            }}
          />
        </div>
        <div>
          <Toggle
            onChange={(value) => this.props.setMode(value ? 'washing' : 'dry')}
            options={{
              checked: 'wash',
              unchecked: 'dry'
            }}
          />
        </div>
        <div className="device-info">
          <h2>Device Info</h2>
          <table>
            <tbody>
              <tr>
                <td>Manufacturer</td>
                <td>{deviceInfo.manufacturer}</td>
              </tr>
              <tr>
                <td>Serial Number</td>
                <td>{deviceInfo.serialNumber}</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>{deviceInfo.date}</td>
              </tr>
              <tr>
                <td>Model</td>
                <td>{deviceInfo.model}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="battery-block">
          <h2>Battery Level</h2>
          <div className="chart-wrapper">
            <PieChart width={800} height={200}>
              <Pie
                data={[{name: 1, value: power},{name: 2, value: 100 - power}]}
                cx={80}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#eee"
                paddingAngle={5}
              >
                <Cell fill="#2196F3" />
                <Cell fill="#ddd" />
              </Pie>
            </PieChart>
          </div>
        </div>
        <div className="stats-block">
          <h2>Power Consumption Stats</h2>
          <div className="chart-wrapper">
            <LineChart width={600} height={300} data={stats} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <XAxis dataKey="date"/>
              <YAxis/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Legend />
              <Line type="monotone" dataKey="energy" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
          </div>
        </div>
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
  }),
  stats: PropTypes.arrayOf(PropTypes.object)
};

Dashboard.defaultProps = {
  isOn: false,
  mode: 'dry',
  power: 0,
  deviceInfo: null,
  stats: null
};

const select = state =>({
  isOn: state.dashboard.isOn,
  mode:  state.dashboard.mode,
  power:  state.dashboard.power,
  deviceInfo: state.dashboard.deviceInfo,
  stats: state.dashboard.stats
});

const actions = {
  getCurrentState,
  toggleDevice,
  setMode
};

export default connect( select, actions )( Dashboard );