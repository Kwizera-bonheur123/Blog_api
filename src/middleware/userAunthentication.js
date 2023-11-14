import Jwt from "jsonwebtoken";
import db from "../db/models";
const Post = db['Post'];
const userAunthentication = async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      res.status(404).json({
        status: "404",
        message: "You Are Not Logged In Please login",
      });
    }

    const decoded = await Jwt.verify(token, process.env.JWT_SECRET);
    const logedUser = await Post.findByPk(decoded.id);

    if (!logedUser) {
      res.status(403).json({
        status: "403",
        message: "Token has Expired Please login Again",
      });
    }
      req.users = logedUser;
      next();


  } catch (error) {
    res.status(500).json({
      status: "500",
      error: error.message,
    });
  }
};

export default userAunthentication;