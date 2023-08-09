require("dotenv-extended").load();
const express = require("express");
const app = express();
const registerLoginRouter = require("./routes/registerLogin");

app.use(express.json());

app.use("", registerLoginRouter);

app.get("/home", (req, res) => {
  res.status(200).send(`<h1>Welcome to Home Page</h1>`);
});

app.listen(
  process.env.PORT,
  console.log("Server listening to port:", process.env.PORT)
);
