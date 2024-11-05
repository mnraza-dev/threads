import express from "express";
const router = express.Router();
import { signin } from "../controller/user-controller.js";


router.get("/signin", signin);

export default router;
