import { Router } from "express";
import { getImpactData } from "../controllers/impactController";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();

router.get("/", authMiddleware, getImpactData);

export default router;
