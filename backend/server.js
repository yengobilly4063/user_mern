import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoutes from "./routes/userRoutes.js"
dotenv.config()
const app = express()

try{
  mongoose.connect(process.env.MONGO_DB_URI, 
    {useUnifiedTopology: true, useNewUrlParser: true}, () => {
    console.log("Database connection established");
  })
}catch(error){
  console.error("Connection to database failed")
}

app.use(express.json())

//Routes
app.use("/api/users", userRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}...`)
})