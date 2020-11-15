const Sequelize = require("sequelize/index");

const config = require("./../config/config");

const sequelize = new Sequelize(
  config.mysql.DATABASE,
  config.mysql.USER,
  config.mysql.PASSWORD,
  {
    dialect: "mysql",
    host: config.mysql.HOST,
    // disable logging; default: console.log
    logging: false,
  }
);

module.exports = sequelize;
