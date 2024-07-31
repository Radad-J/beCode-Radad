const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { errorHandler } = require("../middleware/errorHandler");
const { uploadProfilePicture, uploadCv } = require("../utils/cloudinary");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const registerUser = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    github,
    password,
    cv,
    profilePicture,
    confirmPassword,
  } = req.body;

  let validationErrors = [];

  if (password !== confirmPassword) {
    validationErrors.push({
      path: "password",
      message: "Passwords do not match",
    });
  }

  if (validationErrors.length > 0) {
    return res.status(400).json({ errors: validationErrors });
  }

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        errors: [{ path: "email", message: "User already exists" }],
      });
    }

    let cvUrl = "";
    let profilePictureUrl = "";

    if (req.files["cv"]) {
      const resultCV = await uploadCv(req.files["cv"][0]["buffer"]);
      cvUrl = resultCV.secure_url;
    }

    if (req.files["profilePicture"]) {
      const resultProfilePicture = await uploadProfilePicture(
        req.files["profilePicture"][0]["buffer"]
      );
      profilePictureUrl = resultProfilePicture.secure_url;
    }

    const user = await User.create({
      firstname,
      lastname,
      email,
      github,
      password,
      cv: cvUrl,
      profilePicture: profilePictureUrl,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        github: user.github,
        cv: user.cv,
        profilePicture: user.profilePicture,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({
        errors: [{ path: "general", message: "Invalid user data" }],
      });
    }
  } catch (err) {
    const errors = errorHandler(err);
    res.status(400).json({ errors });
  }
};


const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        errors: [{ path: "email", message: "Invalid email or password" }],
      });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        errors: [{ path: "password", message: "Invalid email or password" }],
      });
    }

    const token = generateToken(user._id);

    // Set the token in an HTTP-only cookie only if the login is successful
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      maxAge: 3600000, // 1 hour in milliseconds
    });

    res.json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      github: user.github,
      token: token, // Optionally, you can also include the token in the response body
    });
  } catch (err) {
    const errors = errorHandler(err);
    res.status(400).json({ errors });
  }
};

const logoutUser = (req, res) => {
  res.clearCookie("token"); // Clear the token cookie
  res.status(200).json({ message: "Logged out successfully" });
};

const getProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      github: user.github,
      profilePicture: user.profilePicture,
      cv: user.cv,
    });
  } else {
    res
      .status(404)
      .json({ errors: [{ path: "general", message: "User not found" }] });
  }
};

const updateProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.firstname = req.body.firstname || user.firstname;
    user.lastname = req.body.lastname || user.lastname;
    user.email = req.body.email || user.email;
    user.github = req.body.github || user.github;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      firstname: updatedUser.firstname,
      lastname: updatedUser.lastname,
      email: updatedUser.email,
      github: updatedUser.github,
      token: generateToken(updatedUser._id),
    });
  } else {
    res
      .status(404)
      .json({ errors: [{ path: "general", message: "User not found" }] });
  }
};

const changePassword = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (req.body.password === req.body.confPassword) {
    user.password = req.body.password;

    const newPass = await user.save();
    res
      .status(200)
      .json({ errors: [{ path: "general", message: "Password changed" }] });
  } else {
    res.status(400).json({
      errors: [{ path: "general", message: "Password doesn't match" }],
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getProfile,
  updateProfile,
  changePassword,
};
