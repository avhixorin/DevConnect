import { Router } from "express";
import { login, register } from "../controllers/user.controller";
import { body } from "express-validator";

const router = Router();

router.post(
  "/register",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  register
);
router.post("/login", login);

export default router;
