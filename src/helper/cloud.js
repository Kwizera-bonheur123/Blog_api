import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();
cloudinary.v2;
cloudinary.config({
  cloud_name: process.env.cloudeName ,
  api_key: process.env.apiKey,
  api_secret: process.env.passKey,
});
export const uploadToCloud = async (file, res) => {
  console.log("BNBNBNBN")
  try {
    const profilePicture = await cloudinary.uploader.upload(file.path, {
      folder: "kdot",
      use_filename: true,
    });
    console.log("HJHJHJH", profilePicture)
    return profilePicture;
  } catch (error) {
    return res.status(500).send(error);
  }
};