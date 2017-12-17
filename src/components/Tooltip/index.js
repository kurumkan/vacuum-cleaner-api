import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Tooltip.css';

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.getClasses = this.getClasses.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const root = document.querySelector('body');
    const targetRect = nextProps.targetElement.getBoundingClientRect();

    root.style.setProperty('--tooltip-height', `${nextProps.height}px`);
    root.style.setProperty('--tooltip-width', `${nextProps.width}px`);
    root.style.setProperty('--target-height', `${targetRect.height}px`);
    root.style.setProperty('--target-width', `${targetRect.width}px`);
    root.style.setProperty('--arrow-height', `${10}px`);
  }

  getClasses() {
    const classes = [];
    classes.push('tooltip');
    classes.push('open');

    var width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    var height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

    const targetRect = this.props.targetElement.getBoundingClientRect();
    const x = targetRect.x;
    const y = targetRect.y;

    // check screen width
    if(width < 525 ) {
      // small width
      if(y < height/2) {
        classes.push('south');
      } else {
        classes.push('north');
      }
    } else {
      // wider screens
      if(x < width/2) {
        classes.push('east');
      } else {
        classes.push('west');
      }

      if(y < height/2) {
        classes.push('arrow-top');
      } else {
        classes.push('arrow-bottom');
      }
    }

    return classes.join(' ');
  }

  render() {
    if(!this.props.isOpen) {
      return null;
    }

    return (
      <span className={this.getClasses()}>
        {this.props.children}
      </span>
    );
  }
}

Tooltip.propTypes = {
  targetElement: PropTypes.object,
  isOpen: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number
};

Tooltip.defaultProps = {
  isOpen: false,
  width: 100,
  height: 100
};

export default Tooltip;