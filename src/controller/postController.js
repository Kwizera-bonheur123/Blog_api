import {uploadToCloud} from "../helper/cloud";
import { Sequelize, where } from "sequelize";
import db from "../db/models";
const Post = db['Post'];
const user = db['User'];
const Comment = db['Comment'];
// import Post from "../db/models/post";

export const createpost = async (req,res) => {
    try{
        const {title,content,postImage} = req.body;
         // Validate the request body
         if (!title || !content ) {
            return res.status(400).json({
                status: "400",
                message: "Missing required fields in the request body",
            });
        }
        const existingTitle = await Post.findOne({where:{
            title: req.body.title,
        }});
        if (existingTitle) {
            return res.status(500).json({
                status: "500",
                message: "Title already exist",
            });
        }
        let result;
        if(req.file) result = await uploadToCloud(req.file,res);
        const newpost = await Post.create({
            title,
            content,
            postImage: result?.secure_url,
            authorId:req.users.id
        });
        return res.status(201).json({
            status: "201",
            message: "post Created Successfully",
            data: newpost
        })
    } catch (error) {
        return res.status(500).json({
            status: "500",
            message: "fail to Create post",
            error: error.message
        })
    }
}


export const selectpost = async (req, res) => {
    try {
      const getpost = await Post.findAll({
        include: [{ model: user, as: 'author' },
    {
        model: Comment, as: 'comments'
    }] // Include the 'author' association
      },
      );
      return res.status(200).json({
        status: "Success",
        message: "Data Retrieved Successfully",
        data: getpost,
      });
    } catch (error) {
      return res.status(500).json({
        status: "Failed",
        message: "Failed To Select Data",
        error: error.message,
      });
    }
  };

  // delete
export const deletepost = async (req,res) => {
    try{
        const {id} = req.params

        const checkId = await Post.findByPk(id);
        if(!checkId){
            return  res.status(404).json({
                message:"Id Not Found!"
            })
        }
        const deleteB = await Post.destroy({where:{id:id}});
        return res.status(200).json({
            status : "sucess",
            message : "data deleted successfully",
            data : checkId

        })
    }
    catch(error){
        return res.status(500).json({
            status : "failed",
            message : "Failed To deletee",
            error: error.message
        })

    }
}

//select by id
export const selectById = async (req,res) => {
    try{

        // Validate the 'id' parameter

        const {id} = req.params
        const checkId = await Post.findOne({
            where:{id:id},
            include: [
                { model: user, as: 'author' },
        {model: Comment, as: 'comments'}
    ] // Include the 'author' association
          });
        
        if(!checkId){
            return  res.status(404).json({
                message:"post Not Found!"
            })
        }
        const addView = await Post.update({ views: Sequelize.literal('views + 1') }, { where: { id: id } });
        return res.status(200).json({
            status : "sucess",
            message : "data retrieved successfully",
            data : checkId

        })

    }
    catch(error){
        return res.status(500).json({
            status : "failed",
            message : "Failed To retrieve post",
            error: error.message
        })

    }
}


// update 

export const updatepost = async(req,res) => {
    try{
        const {id} = req.params;

        const {title,content,postImage} = req.body;
        const checkId = await Post.findByPk(id);
        if(!checkId){
            return res.status(404).json({
                message: "This post Not Found "
            })
        }
        let result;
        if(req.file) result = await uploadToCloud(req.file,res);

        const checkTitle = await Post.findOne({where:{title:title}});

        if(checkTitle){
        if(checkTitle.id != id){
            return res.status(404).json({
                message: "Title already exist please try other"
            })
        }
    }

    const values = {
        title,
            content,
            postImage: result?.secure_url,
    }
        const updateB = await Post.update(values,{where:{id:id}});
        return res.status(200).json({
            status : "success",
            message : "well Data Updated!",
            data : values, 
        })
    }
    catch(error){
       return res.status(500).json({
        message : "Failed To update Info!",
        error : error.message,
       })
    }

}

export const addComment = async (req,res) =>{
    try {
        const { id } = req.params;

        // Find the corresponding post
        const checkId = await Post.findByPk(id);
        if(!checkId){
            return res.status(404).json({
                message: "This post Not Found "
            })
        }

        // Create a new comment
        const newComment = await Comment.create({
          postId:id,
          content: req.body.content,
          authorId: req.users.id, // Assuming you have an authenticated user

        });
    
        res.status(201).json({
          message: "Comment added successfully.",
          comment: newComment,
        });
      } catch (error) {
        res.status(500).json({
          message: "Failed to add a comment.",
          error: error.message,
        });
}} 

