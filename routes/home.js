const express = require("express");

const homeRouter = express.Router();

homeRouter.route("/").get((req, res) => {
  res.status(200).json({ msg: "Welcome to home route" });
});

module.exports = homeRouter;
