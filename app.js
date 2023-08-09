require("dotenv-extended").load();
require("express-async-errors");

const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");

const express = require("express");
const app = express();
const registerLoginRouter = require("./routes/registerLogin");
const notFoundMiddleware = require("./middlewares/notFound");
const errorHandlerMiddleware = require("./middlewares/errorHandler");
const { connectDB } = require("./db/db");
const auth = require("./middlewares/auth");
const homeRouter = require("./routes/home");

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.use("", registerLoginRouter);

app.use("/home", auth, homeRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
