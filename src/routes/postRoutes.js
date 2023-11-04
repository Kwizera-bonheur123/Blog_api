import { createpost, selectpost, deletepost, selectById, updatepost,addComment } from "../controller/postController";
import Authorization from "../middleware/Aunthentication";
import express from "express";
import fileUpload from "../helper/multer";

const postRoutes = express.Router();

postRoutes.post("/create",Authorization, fileUpload.single("postImage"), createpost);
postRoutes.delete("/delete/:id",Authorization, deletepost);
postRoutes.get("/select", selectpost);
postRoutes.get("/selectById/:id", selectById);
postRoutes.put("/update/:id",fileUpload.single("postImage"), updatepost );
postRoutes.post("/comment/:id", Authorization, fileUpload.single("postImage"), addComment);


export default postRoutes