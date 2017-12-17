const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json({type:'*/*'}));

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

// vacuum cleaner low level api mock
class VacuumCleaner {
  constructor() {
    this.state = {
      isOn: false,
      mode: MODES.DRY,
      power: 0,
      deviceInfo: DEVICE_INFO,
      statistics: DEVICE_MOCK_DATA
    }
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
}

// vacuum cleaner generator(as a singleton)
const Singleton = (function () {
  let instance;

  function createInstance() {
    return new VacuumCleaner();
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const cleaner = Singleton.getInstance();

const BASE_URL = `/api/${DEVICE_INFO.serialNumber}/`;

app.get(BASE_URL, (req, res) => {
  res.json(cleaner.getCurrentState());
});

app.get(BASE_URL + 'onoff', (req, res) => {
  res.json(cleaner.getOnOffState());
});

app.put(BASE_URL + 'onnoff', (req, res) => {
  const isOn = cleaner.turnOnOff();
  res.json({
    isOn
  });
});

app.get(BASE_URL + 'mode', (req, res) => {
  res.json(cleaner.getMode());
});

app.put(BASE_URL + 'mode', (req, res) => {
  const mode = cleaner.setMode(req.body.mode);
  res.json({
    mode
  });
});

app.get(BASE_URL + 'power', (req, res) => {
  res.json(cleaner.getPower());
});

app.put(BASE_URL + 'power', (req, res) => {
  cleaner.charge();
  res.json({
    power: 100
  });
});

app.get(BASE_URL + 'stats', (req, res) => {
  res.json(cleaner.getStatistics());
});




if(process.env.NODE_ENV === 'production') {
  // production
  // get all static data from 'dist' directory
  app.use(express.static('dist'));

  // SPA specific code!!!
  // any get requests will be served with index.template.ejs files
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
} else {
  // alert user - to use webpack dev server
  app.get('*', (req, res) => {
    res.json({
      error: 'In development mode - routes which don\'t match api/* should be handled by webpack-dev-server'
    });
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ' + PORT));