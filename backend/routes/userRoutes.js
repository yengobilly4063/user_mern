import express from "express"
import User from "../models/User.js"
import {registerUser, getUserDetails, authUser, updateUser} from "../controllers/userControllers.js"
import { userProtected } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.route("/").post(registerUser)
router.route("/profile")
  .get(userProtected, getUserDetails)
  .put(userProtected, updateUser)
router.route("/login").post(authUser)

export default router