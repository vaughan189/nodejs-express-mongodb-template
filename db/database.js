const mongoose = require('mongoose');
const config = require('../config/config');

const connectDB = async () => {
  await mongoose.connect(config.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: config.username,
    pass: config.password,
  });
  if (!mongoose.connection) console.log('Error connecting Mongo DB');
  else console.log('Mongo DB connected successfully');
};

module.exports = connectDB;
