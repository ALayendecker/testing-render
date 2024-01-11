const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'mysql-595r',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;
