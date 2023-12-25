const { userModel } = require("../models/user.model");
const { hashPassword, comparePasswords } = require("../utils/bcrypt");
const { setjwt } = require("../utils/jwt");

const registerUser = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;

    const isUserExist = await userModel.findOne({
      $or: [
        {
          username,
        },
        {
          email,
        },
      ],
    });

    if (isUserExist) {
      return res.status(400).json({
        message: "User already exist with given username or email",
        status_code: 400,
      });
    }

    const hashedPassword = await hashPassword(password);
    const _user = new userModel({
      username,
      email,
      password: hashedPassword,
    });

    await _user.save();
    return res.status(200).json({
      message: "User Created",
      status_code: 200,
    });
  } catch (error) {
    console.log("Error in registerUser");
    throw error;
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { info, password } = req.body;

    const _user = await userModel.findOne({
      $or: [{ email: info }, { username: info }],
    });

    if (!_user) {
      return res.status(404).json({
        message: "User does not  exist with given username or email",
        status_code: 400,
      });
    }

    const isPasswordCorrect = await comparePasswords(password, _user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid Password",
        status_code: 401,
      });
    }

    const token = await setjwt(_user._id)
    delete _user.password

    return res.status(200).cookie('access-token',token).json({
        message:'Logged in successfully',
        data:_user,
        status_code:200
    })

  } catch (error) {
    console.log("Error in loginUser");
    throw error;
  }
};
module.exports = {
  registerUser,
  loginUser
};
