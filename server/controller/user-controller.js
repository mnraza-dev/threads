import User from "./../models/user-model.js";

export const signin = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    res.status(200).json({ username, email, password });
    User.findOne({ email: email }, (err, user) => {
      if (err) {
        res.status(400).json({ msg: "error in signin", error: err.message });
      }
      if (user) {
        res.status(400).json({ msg: "user already exists" });
      }

      const newUser = new User({
        username,
        email,
        password,
      });

      newUser.save((err, user) => {
        if (err) {
          res.status(400).json({ msg: "error in signin", error: err.message });
        }
        if (user) {
          res.status(200).json({ msg: "user signed in successfully", user });
        }
      });
    });
  } catch (error) {
    res.status(400).json({ msg: "error in signin", error: error.message });
  }
};
