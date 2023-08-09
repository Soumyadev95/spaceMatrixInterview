require("dotenv-extended").load();

const config = require("../config.js");
const Sequelize = require("sequelize");
const mysql = require("mysql2/promise");
const db = {};

const sequelize = new Sequelize(
  config.mysql.database,
  config.mysql.username,
  config.mysql.password,
  {
    dialect: "mysql",
    dialectOptions: {
      connecTimeout: config.mysql.timeout,
    },
    pool: {
      max: config.mysql.pool.max,
      min: config.mysql.pool.min,
      acquire: config.mysql.pool.acquire,
      idle: config.mysql.pool.idle,
    },
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const connectDB = () => {
  return mysql
    .createConnection({
      user: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
    })
    .then((connection) => {
      connection.query(
        `CREATE DATABASE IF NOT EXISTS ${process.env.MYSQL_DATABASE};`
      );
    });
};

module.exports = { db, connectDB };
