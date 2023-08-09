// Database config used by sequelize instance in: datbase/

module.exports = {
  mysql: {
    host: process.env.MYSQL_HOST,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USERNAME,
    timeout: 1000,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  port: process.env.MYSQL_PORT || 3306,
};
