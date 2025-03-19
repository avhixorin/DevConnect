import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes";
import userRouter from "./routes/user.routes"
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the API! 💖</h1>");
});

app.use("/auth", authRoutes);
app.use("/user", userRouter)
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
