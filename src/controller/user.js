import db from "../db/models";
import {uploadToCloud} from "../helper/cloud";
import jwt from "jsonwebtoken";
import bcrypt, {gensalt, hash} from "bcrypt";
const user = db['User'];


// Create a new user

export const createUser = async (req,res) => {
  try{
      const {firstName, lastName, email, password, profile,role} = req.body;

              // Validate the request body
              if (!firstName || !lastName || !email || !password) {
                  return res.status(400).json({
                      status: "400",
                      message: "Missing required fields in the request body please provide inputs",
                  });
              }
      
              // Validate email format
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!email.match(emailRegex)) {
                  return res.status(400).json({
                      status: "400",
                      message: "Invalid email format",
                  });
              }
              if (password.length < 8) {
                  return res.status(400).json({
                      status: "400",
                      message: "Password must be at least 8 characters long",
                  });
              }
      const userEmail = await user.findOne({where:{
          email: req.body.email,
      }});
      if (userEmail) {
          return res.status(404).json({
              status: "500",
              message: "Email already exist",
          });
      }
      let result;
      if(req.file){
          result = await uploadToCloud(req.file,res);
      } 
      
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(password, salt);
      const newUser = await user.create({
          firstName,
          lastName,
          email,
          password: hashedPass,
          profile: result?.secure_url,
          role
      });
      return res.status(201).json({
          status: "201",
          message: "User Created Successfully",
          data: newUser
      })
  } catch (error) {
      return res.status(500).json({
          status: "500",
          message: "fail to Create user",
          error: error.message
      })
  }
}

export const getAllUser = async (req, res) => {
    try {
      const User = await user.findAll();
      res.status(200).json({
        status: 200,
        message: 'User retrieved successfully',
        data: User,
      });
    } catch (error) {
      console.error('Error retrieving User:', error);
      res.status(500).json({
        status: 500,
        error: 'Unable to retrieve User',
        message: error.message,
      });
    }
  };

  export const userLogin = async (req, res) =>{
    try {
// Validate the request body of forms
if ( !req.body.email || !req.body.password) {
    return res.status(400).json({
        status: "400",
        message: "Missing required fields in the request body please provide inputs",
    });
}

// Validate email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!req.body.email.match(emailRegex)) {
    return res.status(400).json({
        status: "400",
        message: "Invalid email format",
    });
}
        const userLogin = await user.findOne({where:{
            email: req.body.email,
        }});
        if (!userLogin) {
            return res.status(404).json({
                status: "404",
                message: "User Not Found",
            });
        }

        const isMatch = await bcrypt.compare(req.body.password, userLogin.password);
        if(!isMatch) {
            return res.status(404).json({
                status : "404",
                message: "password incorrect"
            });
        }
        const token = await jwt.sign(
            {id:userLogin.id},
            process.env.JWT_SECRET,
            {expiresIn: process.env.EXPIRE_DATE}
            );
            return res.status(200).json({
                status: "200",
                message: "logedin successfull",
                users: userLogin,
                token: token
            });
    } catch (error){
        return res.status(500).json({
            status: "500",
            message: "failed to login",
            error: error.message
        })
    }
};


//  Update user

export const updateUser = async(req,res) => {
    try{
        console.log(req.file);
        const {id} = req.params;
        const {firstName,lastName,email,password,profile,role} = req.body;
        const checkId = await user.findByPk(id);
        if(!checkId){
            return res.status(404).json({
                message: "user not found"
            })
        }

        const checkEmail = await user.findOne({where:{email:email}});
        console.log(id);
        if(checkEmail){
            if(checkEmail.id != id){
                return res.status(409).json({
                    message: "Email already exist try other"
                })
            }
        }

        let result;
      if(req.file){
          result = await uploadToCloud(req.file,res);
      } 
            if(password){ 
                const salt = await bcrypt.genSalt(10);
                const hashedPass = await bcrypt.hash(password, salt);
                const values = {
                    firstName,
                    lastName,
                    email,
                    password:hashedPass,
                    profile:result?.secure_url,
                    role
                  };
        const updateU = await user.update(values,{where:{id:id}});

        return res.status(200).json({
            status:"success",
            message: "user updated successfully",
            data:values

        })
            } else {
                const values = {
                    firstName,
                    lastName,
                    email,
                    profile:result?.secure_url,
                    role
                  };
                const updateU = await user.update(values,{where:{id:id}});

                return res.status(200).json({
                    status:"success",
                    message: "user updated successfully",
                    data:values
        
                })
            }
    }
    catch(error){
        return res.status(500).json({
            message:"failed to update user",
            error:error.message
        });

    }
}


export const deleteUser = async (req,res) => {
    try{
        const {id} = req.params
        const checkId = await user.findByPk(id);
        if(!checkId){
            return  res.status(404).json({
                message:"User Not Found!"
            })
        }
        const deleteB = await user.destroy({where:{id:id}});
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
