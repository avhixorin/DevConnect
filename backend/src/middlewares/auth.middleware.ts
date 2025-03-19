import { User } from "@prisma/client";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import prisma from "../prisma";

export interface AuthenticatedRequest extends Request {
  user?: User;
}

const verifyToken = async (token: string | undefined): Promise<User> => {
  if (!token) {
    throw new Error("Unauthorized access");
  }

  let decodedToken: JwtPayload;
  try {
    decodedToken = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as string
    ) as JwtPayload;
  } catch (err) {
    throw new Error("Invalid or expired token");
  }

  const user = await prisma.user.findUnique({
    where: { id: decodedToken.userId }, // Ensure your JWT stores `userId`
  });

  if (!user) {
    throw new Error("User not found for the provided token");
  }

  return user;
};

export const authMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      res.status(401).json({ message: "Unauthorized access" });
      return
    }

    req.user = await verifyToken(token);
    next();
  } catch (error: any) {
    res.status(401).json({ message: error.message });
    return
  }
};
