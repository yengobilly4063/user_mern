import asyncHandler from "express-async-handler"
import generateToken from "../utils/generateToken.js"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

export const userProtected = asyncHandler(async (req, res, next) => {
  let token
  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    try {
      token = req.headers.authorization.split(" ")[1]

      const decodedUserInfo = jwt.verify(token, process.env.JWT_SECRETE_KEY)

      const user = await User.findById({_id: decodedUserInfo.id}).select("-password")
      
      if(user) req.user = user
      next()
    } catch (error) {
      res.status(401).json({"error": "Invalid token"})
    }
  }
  if(!token){
    res.status(401).json({"error": "Not authorized, No token found"})
  }

})