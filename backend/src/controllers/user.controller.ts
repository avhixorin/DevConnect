import { Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import prisma from "../prisma";
import jwt from "jsonwebtoken";

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
    process.env.JWT_SECRET as string,
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

  console.log("isPasswordCorrect", isPasswordCorrect)

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

export { register, login };
