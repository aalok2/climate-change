import { Router } from "express";
import authController from "../controllers/authController";
const { registerUser, loginUsers } = new authController();

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUsers);

export default router;
