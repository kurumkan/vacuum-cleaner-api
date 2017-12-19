import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cleaner from './instance';

const app = express();
app.use(bodyParser.json({type:'*/*'}));

const BASE_URL = `/api/${cleaner.getDeviceInfo().serialNumber}/`;

app.get(BASE_URL, (req, res) => {
  res.json(cleaner.getCurrentState());
});

app.get(BASE_URL + 'onoff', (req, res) => {
  res.json({isOn: cleaner.getOnOffState()});
});

app.put(BASE_URL + 'onoff', (req, res) => {
  const isOn = cleaner.turnOnOff();
  res.json({
    isOn
  });
});

app.get(BASE_URL + 'mode', (req, res) => {
  res.json({
    mode: cleaner.getMode()
  });
});

app.put(BASE_URL + 'mode', (req, res) => {
  const mode = cleaner.setMode(req.body.mode);
  res.json({
    mode
  });
});

app.get(BASE_URL + 'power', (req, res) => {
  res.json({
    power: cleaner.getPower()
  });
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
    res.sendFile(path.join(__dirname, 'index.html'));
  });
} else {
  // alert user - to use webpack dev server
  app.get('*', (req, res) => {
    res.json({
      error: 'In development mode - routes which don\'t match api/* should be handled by webpack-dev-server'
    });
  });
}

export const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ' + PORT));

