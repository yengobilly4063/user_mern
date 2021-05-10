import asyncHandler from "express-async-handler"
import User from "../models/User.js"
import generateToken from "../utils/generateToken.js"
import {hashPassword, comparePassword} from "../utils/passwordUtil.js"
import bcrypt from "bcryptjs"

// @desc     Register a User
// @route    POST /api/users
// @access   public
export const registerUser = asyncHandler(async (req, res) => {
  const {name, email, password} = req.body
  // if(!name || !email || !password){
  //   res.status(401).json({"error": "Please imput all fields"})
  // }
  console.log(req.body);
  const userExists = await User.findOne({email})
  if(userExists){
    res.status(400) 
    throw new Error("User already exists")
  }

  const user = await User.create({
    name, 
    email, 
    password: await hashPassword(password)
  })

  if(user){
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: await generateToken(user._id)
    })
  }else{
    res.status(400).json({"error": "Invalid User data"})
  }
})

// @desc     Get user details a User
// @route    GET /api/users/profile
// @access   private
export const getUserDetails = asyncHandler(async (req, res) => {
  const user = await User.findById({_id: req.user._id}).select("-password")
  if(user){
    res.status(201).json(user)
  }else{
    res.status(404).json({"error": "User not found"})
  }
})

// @desc     Login a User
// @route    POST /api/users/login
// @access   public
export const authUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body
  // Get User
  const user = await User.findOne({email})
  console.log(req.body);
 // Verify Password
  if(user && (await comparePassword(password, user.password))){
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: await generateToken(user._id)
    })
  }else{
    res.status(401)
    throw new Error("Invalid email or password")
  }
})

// @desc     Update a User
// @route    PUT /api/users
// @access   private
export const updateUser = asyncHandler(async (req, res) => {
  const {name, email, password} = req.body
  const user = await User.findById({_id: req.user._id})

  if(user){
    user.name = name || user.name
    user.email = email || user.email
    if(password){
      user.password = await hashPassword(password)
    }
    const updateUser = await user.save()
    res.json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      token: await generateToken(updateUser._id)
    })
  }else{
    res.status(404).json({"error": "User not found"})
  }
})
