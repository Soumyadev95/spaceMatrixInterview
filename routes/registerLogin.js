const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/register");

const appRoute = express.Router();

appRoute.route("/register").post(registerController);
appRoute.route("/login").post(loginController);

module.exports = appRoute;
