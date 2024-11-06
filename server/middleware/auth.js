import User from "./../models/user-model.js";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;



    if (!token) {
      return res.status(401).json({ msg: "No token in auth !" });
    }

    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodeToken) {
      return res
        .status(400)
        .json({ msg: "Error while decoding token in auth !" });
    }

    const user = await User.findById(decodeToken.token)
      .populate("followers")
      .populate("following")
      // .populate("threads")
      // .populate("replies")
      // .populate("reposts");

    if (!user) {
      return res.status(400).json({ msg: "User not found!" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({ msg: "Error in auth !", error: error.message });
  }
};

export default auth;
