import express from "express";
const router = express.Router();
import { signin } from "../controller/user-controller";


router.get("/signin", signin);

export default router;
