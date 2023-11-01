import express  from "express";
import { createUser } from "../controller/user";
import { getAllUser, userLogin, updateUser } from "../controller/user";

import fileUpload from '../helper/multer'

const userRouter = express.Router();

userRouter.post("/createUser", fileUpload.single("profile"), createUser);
userRouter.post("/userLogin", fileUpload.single("profile"), userLogin);
userRouter.get("/getAllUsers", getAllUser);
userRouter.put("/updateUser/:id",fileUpload.single("profile"),updateUser);

export default userRouter;

