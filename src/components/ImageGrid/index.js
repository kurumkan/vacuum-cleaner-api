import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-masonry-infinite-scroll';

import Loader from 'components/Loader';
import ImageGridItem from 'components/ImageGridItem';
import './ImageGrid.css';

class ImageGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridIsReady: false
    };
    this.renderGrid = this.renderGrid.bind(this);
    this.notifyReadyState = this.notifyReadyState.bind(this);
  }

  notifyReadyState() {
    this.setState({
      gridIsReady: true
    });
  }

  renderGrid() {
    return this.props.pins.map(pin => (
      <ImageGridItem
        key={pin.id}
        id={pin.id}
        img={pin.img}
        author={pin.author}
        description={pin.description}
        showPopup={this.props.showPinPopup}
        shouldShowPopup={this.props.focusedPin === pin.id}
        hidePinPopup={this.props.hidePinPopup}
      />
    ));
  }

  render() {

    return (
      <Grid
        columnWidth={260}
        fitWidth={true}
        gutter={5}
        loadMore={this.props.getPins}
        limit={6}
        scrollThreshold={400}
        itemsLeft={this.props.pinsLeft}
        notifyReadyState={this.notifyReadyState}
      >
        {!this.state.gridIsReady && <Loader />}
        { this.renderGrid() }
      </Grid>
    );
  }
}

ImageGrid.propTypes = {
  focusedPin: PropTypes.string,
  pins: PropTypes.array,
  pinsLeft: PropTypes.number,

  getPins: PropTypes.func.isRequired,
  hidePinPopup: PropTypes.func.isRequired,
  showPinPopup: PropTypes.func.isRequired
};

ImageGrid.defaultProps = {
  focusedPin: '',
  pins: [],
  pinsLeft: 0
};

export default ImageGrid;