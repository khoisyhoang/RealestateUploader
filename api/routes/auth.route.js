import express from 'express';
import { signup, signupPost } from '../controllers/auth.controller.js';
import { validateUser } from '../validate/user.validate.js';


const router = express.Router();


router.get("/signup", signup)
router.post("/signup", validateUser, signupPost)

export default router;