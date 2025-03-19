import { Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import prisma from "../prisma";
import jwt from "jsonwebtoken";
import { AuthenticatedRequest } from "../middlewares/auth.middleware";
import cloudinaryUpload from "../utils/cloudinaryUpload";
import cloudinary from "cloudinary";

const register = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { username, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: "Email already in use" });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const generateAccessTokenAndRefreshToken = async (id: string) => {
  const accessToken = jwt.sign(
    { userId: id },
    process.env.JWT_ACCESS_SECRET as string,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { userId: id },
    process.env.JWT_REFRESH_SECRET as string,
    { expiresIn: "7d" }
  );

  return { accessToken, refreshToken };
};

const login = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    res.status(404).json({ message: "Email not found" });
    return;
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  console.log("isPasswordCorrect", isPasswordCorrect);

  if (!isPasswordCorrect) {
    res.status(400).json({ message: "Incorrect password" });
    return;
  }
  const { accessToken, refreshToken } =
    await generateAccessTokenAndRefreshToken(user.id);
  res
    .cookie("refreshToken", refreshToken, { httpOnly: true, secure: true })
    .cookie("accessToken", accessToken, { httpOnly: true, secure: true });

  console.log("User logged in", email, password);
  res.status(200).json({ message: "User logged in" });
};

const logout = async (req: AuthenticatedRequest, res: Response) => {
  if (!req.user) {
    res.status(403).json("Access forbidden");
  }

  res
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .status(200)
    .json({ message: "User logged out successfully" });
};

const uploadAvatar = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      res.status(403).json({ message: "Access forbidden" });
      return;
    }

    const { id } = req.user;
    if (!req.file) {
      res.status(400).json({ message: "No attached files found" });
      return;
    }

    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const oldAvatarUrl = user.avatar;
    let oldPublicId: string | null = null;

    if (oldAvatarUrl) {
      const parts = oldAvatarUrl.split("/");
      oldPublicId = parts[parts.length - 1].split(".")[0];
    }

    const cloudinaryRes = await cloudinaryUpload(req.file.path);
    if (Array.isArray(cloudinaryRes) || !cloudinaryRes?.url) {
      res.status(500).json({ message: "Failed to upload image to Cloudinary" });
      return;
    }

    if (oldPublicId) {
      await cloudinary.v2.uploader.destroy(`avatars/${oldPublicId}`);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: { avatar: cloudinaryRes.url },
    });

    res
      .status(200)
      .json({
        message: "Avatar updated successfully",
        avatar: updatedUser.avatar,
      });
  } catch (error) {
    console.error("Error uploading avatar:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { register, login, logout, uploadAvatar };