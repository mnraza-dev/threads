import express from "express";
const router = express.Router();
import {
  followUser,
  login,
  signup,
  userDetails,
} from "../controller/user-controller.js";
import auth from "../middleware/auth.js";

router.post("/signup", signup);
router.post("/signin", login);
router.get("/user/:id", auth, userDetails);
router.put("/user/follow/:id", auth, followUser);

export default router;
