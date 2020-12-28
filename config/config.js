require('dotenv').config();

// TODO: Add configuration for different environments(add different files).

const configuration = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
};

module.exports = configuration;
