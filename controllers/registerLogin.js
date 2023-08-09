const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const registerController = async (req, res) => {
  try {
    await User.sync();
    const user = await User.create({ ...req.body });
    const token = user.createJWT();
    res
      .status(StatusCodes.CREATED)
      .json({ msg: "User Registered Successfully", token });
  } catch (err) {
    console.log(err);
    throw new BadRequestError(
      "Can not register user, please try again later!!"
    );
  }
};
const loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  // compare password
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { email: user.email }, token });
};

module.exports = { registerController, loginController };
