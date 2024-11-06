import express from "express";
const router = express.Router();
import { login, signup, userDetails } from "../controller/user-controller.js";

router.post("/signup", signup);
router.post("/signin", login);
router.get("/user/:id", userDetails);


export default router;
