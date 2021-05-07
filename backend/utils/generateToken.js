import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const generateToken = async (id) => {
  return await jwt.sign({id}, process.env.JWT_SECRETE_KEY, {expiresIn: "30d"})
}

export default generateToken