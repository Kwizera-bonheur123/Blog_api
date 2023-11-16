import { createpost, selectpost, deletepost, selectById, updatepost,addComment } from "../controller/postController";
import Authorization from "../middleware/Aunthentication";
import express from "express";
import fileUpload from "../helper/multer";
import { addLike } from "../controller/postController";

const postRoutes = express.Router();

postRoutes.post("/create",Authorization, fileUpload.single("postImage"), createpost);
postRoutes.delete("/delete/:id",Authorization, deletepost);
postRoutes.get("/select", selectpost);
postRoutes.get("/selectById/:id", selectById);
postRoutes.put("/update/:id",fileUpload.single("postImage"), updatepost );
postRoutes.post("/comment/:id", Authorization, fileUpload.single("postImage"), addComment);
postRoutes.post("/like/:id", Authorization,fileUpload.single("postImage"), addLike);

export default postRoutes