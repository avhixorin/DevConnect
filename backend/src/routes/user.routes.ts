import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { logout, uploadAvatar } from "../controllers/user.controller";
import { upload } from "../middlewares/multer.middleware";

const router = Router();

router.get("/logout", authMiddleware, logout);
router.put("/uploadAvatar", authMiddleware, upload.single("avatar"), uploadAvatar)

export default router;