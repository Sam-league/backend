import express from "express";
import cors from "cors";
import connectDB from "./dbconn.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { logger } from "./middleware/logger.js";
import cloudinary from "./configs/cloudinaryConfig.js";
import dotenv from "dotenv";
import upload from "./configs/multerConfig.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
connectDB();
app.use(logger);

app.post("/uploads", upload.single("image"), async (req, res) => {
  console.log(req.file);
  try {
    let response = await cloudinary.uploader.upload(req.file.path);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.listen(4000, () => {
  console.log("Server is running up on port 4000");
});
