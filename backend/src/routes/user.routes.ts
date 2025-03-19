import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { logout } from "../controllers/user.controller";

const router = Router();

router.get("/logout", authMiddleware, logout);

export default router;