import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const  createToken= (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//route for user login
const loginUser =async (req,res)=>{
    res.json({message:"user logined successfully"})

}

//route for user registration
const registerUser =async (req,res)=>{
    try {
        const {name,email,password} = req.body; //if anybody hits this api, we get the data in req.body

        //check if user already exists
        const exists = await userModel.findOne({email})//find the user by email

        if(exists){
            return res.json({success:false,message:"User already exists"})
        }
        
        //verifying email and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"})
        }
        if(password.length<8){
            return res.json({success:false,message:"Passowrd must be at least 8 characters"})
        }

        const salt= await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt) //hashing the password

        //create a new user in database now
        const  newUser = new userModel({
            name,
            email,
            password:hashedPassword, //storing the hashed password in database
        })
        const savedUser = await newUser.save() //saving the user in database

        const token=createToken(savedUser._id) //creating a token for the user

        res.json({success:true,token})

        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})

        
    }
    
}

//route for admin login
const adminLogin= async(req,res)=>{
    res.json({message:"admin logined successfully"})

}
export {loginUser, registerUser,adminLogin}