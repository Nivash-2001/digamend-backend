import express from "express";
import { feedback } from "../controller/feedbackController.js";
const router=express.Router();


router.post("/",feedback);

export default router;