import express from "express";
import { feedback } from "./feedbackController.js";
const router=express.Router();


router.post("/feedbackinfo",feedback);

export default router;