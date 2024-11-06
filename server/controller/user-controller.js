import User from "./../models/user-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ msg: "Please fill all the fields" });
    }
    const usertExists = await User.findOne({ email });
    if (usertExists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    if (!hashedPassword) {
      return res.sattus(400).json({ msg: "error in hashing password" });
    }

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    const result = await user.save();
    if (!result) {
      return res.status(400).json({ msg: "error while saving user" });
    }
    const accessToken = jwt.sign(
      {
        token: result._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    if (!accessToken) {
      return res.status(400).json({ msg: "error in creating access token" });
    }
    res.cookie("token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      // secure: true,
      sameSite: "none",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      msg: `Hello, ${result?.username} you are signed up successfully...`,
    });
  } catch (error) {
    res.status(400).json({ msg: "error in signin", error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ msg: "Email and Password are required fields" });
    }

    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(400).json({ msg: "Please Signup first" });
    }

    const passwordMatch = await bcrypt.compare(password, userExists.password);

    if (!passwordMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const accessToken = jwt.sign(
      {
        token: userExists._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    if (!accessToken) {
      return res.status(400).json({ msg: "Token not generated in login" });
    }

    res.cookie("token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      // secure: true,
      sameSite: "none",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      msg: `Hello, ${userExists?.username}! you are loggedin successfully...`,
    });
  } catch (error) {
    res.status(400).json({ msg: "Error in Login", error: error.message });
  }
};
