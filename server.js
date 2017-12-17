const path = require('path');
const express = require('express');
const app = express();

app.get('/api/pins', (req, res) => {
  const pins = [
    {
      id: '0',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '1',
      img: 'http://www.newportharborvets.com/sites/default/files/08-cat-cancer-4.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '2',
      img: 'https://www.aspca.org/sites/default/files/team-aspca-birthday-campaign-ad_090516_cat.jpg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '3',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '4',
      img: 'http://www.newportharborvets.com/sites/default/files/08-cat-cancer-4.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '5',
      img: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-03/3/16/enhanced/webdr10/enhanced-19898-1425418851-9.jpg?downsize=715:*&output-format=auto&output-quality=auto',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '6',
      img: 'https://www.aspca.org/sites/default/files/team-aspca-birthday-campaign-ad_090516_cat.jpg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '7',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '8',
      img: 'http://www.newportharborvets.com/sites/default/files/08-cat-cancer-4.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '9',
      img: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-03/3/16/enhanced/webdr10/enhanced-19898-1425418851-9.jpg?downsize=715:*&output-format=auto&output-quality=auto',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '10',
      img: 'https://www.aspca.org/sites/default/files/team-aspca-birthday-campaign-ad_090516_cat.jpg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '11',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '12',
      img: 'http://www.newportharborvets.com/sites/default/files/08-cat-cancer-4.jpeg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '13',
      img: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-03/3/16/enhanced/webdr10/enhanced-19898-1425418851-9.jpg?downsize=715:*&output-format=auto&output-quality=auto',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '14',
      img: 'https://www.aspca.org/sites/default/files/team-aspca-birthday-campaign-ad_090516_cat.jpg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '15',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '16',
      img: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-03/3/16/enhanced/webdr10/enhanced-19898-1425418851-9.jpg?downsize=715:*&output-format=auto&output-quality=auto',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '17',
      img: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-03/3/16/enhanced/webdr10/enhanced-19898-1425418851-9.jpg?downsize=715:*&output-format=auto&output-quality=auto',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    },
    {
      id: '18',
      img: 'https://www.aspca.org/sites/default/files/team-aspca-birthday-campaign-ad_090516_cat.jpg',
      author: 'Ethan Hein',
      description: 'Lorem Ipsum'
    }
  ];

  const limit = +req.query.limit || 10;
  const offset = +req.query.offset || 0;

  if(offset >= pins.length) {
    res.json({
      pins: [],
      pinsLeft: 0
    });
  } else {
    const pinsLeft = pins.length  - offset - limit;
    res.json({
      pins: pins.slice(offset, offset + limit),
      pinsLeft: pinsLeft < 0 ? 0 : pinsLeft
    });
  }
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