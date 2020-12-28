const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger');
const app = express();
const port = process.env.PORT || 3000;

const apiRoutes = require('./routes/api-routes');
const connectDB = require('./db/database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World with Express'));

app.use('/api', apiRoutes);

app.get('*', function (req, res) {
  logger.info('users route');
  res.send('NOdeJS Express MongoDB Rest API');
});

const startServer = async () => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
};

(async () => {
  await connectDB();
  await startServer();
})();
