import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/Loader';
import './Toggle.css';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      checked: !this.state.checked
    }, () => this.props.onChange(this.state.checked));
  }

  render() {
    const { options } = this.props;
    return (
      <label className="switch">
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleChange}
        />
        <span className="slider round">
          <span className="status-text">{this.state.checked ? options.checked : options.unchecked}</span>
        </span>
      </label>
    );
  }
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.shape({
    checked: PropTypes.string,
    unchecked: PropTypes.string
  })
};

Toggle.defaultProps = {
  checked: false,
  options: null
};

export default Toggle;