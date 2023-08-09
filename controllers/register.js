var jwt = require("jsonwebtoken");
const fs = require("fs");

const registerController = (req, res) => {
  try {
    const data = {
      ...req.body,
    };
    fs.writeFileSync("users.json", JSON.stringify(data));
    console.log(fs.readFileSync("users.json", "utf8"));
  } catch (err) {
    console.log(err);
    res.send("Error in Registration");
  }
  res.status(200).send("Registration Successfull");
};
const loginController = (req, res) => {
  const { userName, password } = req.body;
  const DBCredentials = fs.readFileSync("users.json", "utf8");
  try {
    if (
      DBCredentials.password === password &&
      DBCredentials.userName === userName
    ) {
      var token = jwt.sign({ userName }, process.env.JWT_SECRET, {
        algorithm: "RS256",
      });
      res.token = token;
    }
    res.status(200).json(res.body);
  } catch (err) {
    res.send("Login unsuccessfull");
  }
};

module.exports = { registerController, loginController };
