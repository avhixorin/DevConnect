import { Request, Response } from "express";

const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).json({ message: "Please fill all fields" });
  }

  console.log("User registered", username, email, password);
  res.status(201).json({ message: "User registered" });
}

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ message: "Please fill all fields" });
    }

    console.log("User logged in", email, password);
    res.status(200).json({ message: "User logged in" });
}

export { register, login };