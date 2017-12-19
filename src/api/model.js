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
    timeOn: 687944,
    energy: 14443276,
    start: "2015-02-04T03:37:51.566Z",
    end: "2015-02-11T23:41:06.554Z",
    date: "2017-01-27",
    id: "Y8StKV6nStaXaguxnmNKtg"
  },
  {
    timeOn: 687944,
    energy: 14443276,
    start: "2015-02-04T03:37:51.566Z",
    end: "2015-02-11T23:41:06.554Z",
    date: "2017-01-27",
    id: "Y8StKV6nStaXaguxnmNKtg"
  },
  {
    timeOn: 687944,
    energy: 14443276,
    start: "2015-02-04T03:37:51.566Z",
    end: "2015-02-11T23:41:06.554Z",
    date: "2017-01-27",
    id: "Y8StKV6nStaXaguxnmNKtg"
  },
  {
    timeOn: 687944,
    energy: 14443276,
    start: "2015-02-04T03:37:51.566Z",
    end: "2015-02-11T23:41:06.554Z",
    date: "2017-01-27",
    id: "Y8StKV6nStaXaguxnmNKtg"
  },
  {
    timeOn: 687944,
    energy: 14443276,
    start: "2015-02-04T03:37:51.566Z",
    end: "2015-02-11T23:41:06.554Z",
    date: "2017-01-27",
    id: "Y8StKV6nStaXaguxnmNKtg"
  },
  {
    timeOn: 687944,
    energy: 14443276,
    start: "2015-02-04T03:37:51.566Z",
    end: "2015-02-11T23:41:06.554Z",
    date: "2017-01-27",
    id: "Y8StKV6nStaXaguxnmNKtg"
  },
  {
    timeOn: 687944,
    energy: 14443276,
    start: "2015-02-04T03:37:51.566Z",
    end: "2015-02-11T23:41:06.554Z",
    date: "2017-01-27",
    id: "Y8StKV6nStaXaguxnmNKtg"
  },
  {
    timeOn: 687944,
    energy: 14443276,
    start: "2015-02-04T03:37:51.566Z",
    end: "2015-02-11T23:41:06.554Z",
    date: "2017-01-27",
    id: "Y8StKV6nStaXaguxnmNKtg"
  },
  {
    timeOn: 687944,
    energy: 14443276,
    start: "2015-02-04T03:37:51.566Z",
    end: "2015-02-11T23:41:06.554Z",
    date: "2017-01-27",
    id: "Y8StKV6nStaXaguxnmNKtg"
  },
  {
    timeOn: 687944,
    energy: 14443276,
    start: "2015-02-04T03:37:51.566Z",
    end: "2015-02-11T23:41:06.554Z",
    date: "2017-01-27",
    id: "Y8StKV6nStaXaguxnmNKtg"
  },
  {
    timeOn: 687944,
    energy: 14443276,
    start: "2015-02-04T03:37:51.566Z",
    end: "2015-02-11T23:41:06.554Z",
    date: "2017-01-27",
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
  power: Math.floor((Math.random() * 100) + 1),
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
