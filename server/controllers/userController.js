const User = require("../models/userModel");

exports.register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(409)
        .send({ message: "User already exist", success: false });
    }

    let newUser = new User(req.body);

    await newUser.save();

    res.status(201).send({
      message: "Your account has been created successfully",
      success: true,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in user registration", success: false });
  }
};

exports.login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(404)
        .send({ message: "User doesn't exist", success: false });
    }

    if (user.password !== req.body.password) {
      return res
        .status(401)
        .send({ message: "Unauthorize access denied", success: false });
    }
    res.status(200).send({ message: "Logged in successfully", success: true });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in login page", success: false, error });
  }
};

exports.getUserData = async (req, res) => {
  try {
    let userdata = await User.find({});

    res
      .status(200)
      .send({
        message: "Data fetched successfully",
        data: userdata,
        success: true,
      });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in getting user data", success: false });
  }
};
