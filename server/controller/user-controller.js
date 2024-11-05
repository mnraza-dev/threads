import User from "./../models/user-model";

export const signin = async (req, res) => {
  try {
    
    const {username, email, password} = req.body;
    res.status(200).json({ username, email, password });

  } catch (error) {
    res.status(400).json({ msg: "error in signin", error: error.message });

  }
};
