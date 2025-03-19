import { v2 as cloudinary } from "cloudinary";
import * as fs from "fs";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryUpload = async (localFilePath: string) => {
  try {
    if (!localFilePath) {
      return ["File path not found"];
    }

    if (!fs.existsSync(localFilePath)) {
      return ["File not found"];
    }

    const uploadResult = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    
    return uploadResult;
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);
    return null;
  } finally {
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
  }
};

export default cloudinaryUpload;
