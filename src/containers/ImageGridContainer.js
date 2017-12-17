import { connect } from 'react-redux';
import ImageGrid from 'components/ImageGrid';
import { getPins, showPinPopup, hidePinPopup } from 'actions/pinActions';

const select = state => ({
  focusedPin: state.pins.focusedPin,
  pins: state.pins.pins,
  pinsLeft: state.pins.pinsLeft
});

const actions = {
  getPins,
  hidePinPopup,
  showPinPopup
};

export default connect(select, actions)(ImageGrid);
