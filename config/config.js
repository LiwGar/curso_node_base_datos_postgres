require('dotenv').config();

const config = {
  env: (process.env.NODE_ENV || 'dev').toLowerCase(),
  port: parseInt(process.env.PORT, 10) || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: parseInt(process.env.DB_PORT, 10) || 5432,
};

module.exports = { config };
