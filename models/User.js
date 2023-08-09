const Sequelize = require("sequelize");
const DataTypes = require("sequelize");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { db } = require("../db/db.js");

const User = db.sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  email: {
    type: DataTypes.STRING(60),
    allowNull: false,
    unique: true,
  },

  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

User.prototype.createJWT = function () {
  return jwt.sign(
    { userId: this.id, name: this.email },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

User.prototype.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};

module.exports = User;
