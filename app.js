const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const logger = require('./logger');

const Routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) =>
  res.send({
    status: 'API Its Working',
    message: 'Welcome to RESTHub crafted with love!',
  })
);

app.use('/api/v1', Routes);

app.get('*', function (req, res) {
  logger.info('users route');
  res.send('NodeJS Express MongoDB Rest API');
});

module.exports = app;
