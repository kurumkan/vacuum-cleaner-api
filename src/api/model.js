// device info
const DEVICE_INFO = {
  manufacturer: 'DYSON',
  serialNumber: '123',
  date: '01-01-2017',
  model: 'xyz'
};

// device mock data - power consumption, work sessions,
const DEVICE_MOCK_DATA = [
  {
    timeOn: 700011,
    energy: 14443276,
    start: "2015-02-04T03:37:51.566Z",
    end: "2015-02-11T23:41:06.554Z",
    date: "2017-01-21",
    id: "Y8StKV6nStaXaguxnmNKtg"
  },
  {
    timeOn: 687944,
    energy: 11443276,
    start: "2015-02-04T03:37:51.566Z",
    end: "2015-02-11T23:41:06.554Z",
    date: "2017-01-22",
    id: "Y8StKV6nStaXaguxnmNKtg"
  },
  {
    timeOn: 881234,
    energy: 4443276,
    start: "2015-02-04T03:37:51.566Z",
    end: "2015-02-11T23:41:06.554Z",
    date: "2017-01-23",
    id: "Y8StKV6nStaXaguxnmNKtg"
  },
  {
    timeOn: 762811,
    energy: 54443276,
    start: "2015-02-04T03:37:51.566Z",
    end: "2015-02-11T23:41:06.554Z",
    date: "2017-01-24",
    id: "Y8StKV6nStaXaguxnmNKtg"
  },
  {
    timeOn: 162811,
    energy: 4443276,
    start: "2015-02-04T03:37:51.566Z",
    end: "2015-02-11T23:41:06.554Z",
    date: "2017-01-25",
    id: "Y8StKV6nStaXaguxnmNKtg"
  }
];

const MODES = {
  DRY: 'dry',
  WASHING: 'washing'
};

const INIT_STATE = {
  isOn: false,
  mode: MODES.DRY,
  power: Math.floor(Math.random() * (100 - 30 + 1) + 30),
  deviceInfo: DEVICE_INFO,
  statistics: DEVICE_MOCK_DATA
};

// vacuum cleaner low level api mock
export default class VacuumCleaner {
  constructor() {
    this.state = { ...INIT_STATE };
  }
  getCurrentState() {
    return {
      isOn: this.state.isOn,
      mode: this.state.mode,
      power: this.state.power,
      deviceInfo: this.state.deviceInfo
    };
  }
  getOnOffState() {
    return this.state.isOn;
  }
  turnOnOff() {
    this.state.isOn = !this.state.isOn;
    return this.state.isOn;
  }
  getMode() {
    return this.state.mode;
  }
  setMode(newMode) {
    if(newMode !== MODES.DRY && newMode !== MODES.WASHING) {
      throw 'wrong mode argument';
    }
    this.state.mode = newMode;
    return newMode;
  }
  charge() {
    this.state.power = 100;
  }
  getPower() {
    return this.state.power
  }
  getDeviceInfo() {
    return this.state.deviceInfo;
  }
  getStatistics() {
    return this.state.statistics;
  }
  reset() {
    this.state = { ...INIT_STATE };
  }
}
