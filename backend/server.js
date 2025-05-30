import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";

//App config
const app = express();
const port = process.env.PORT || 4000;

//Middleware
app.use(express.json());
app.use(cors());
connectDB()
connectCloudinary()

//end points
app.use('/api/user',userRouter)

//Api endpoints
app.get("/", (req, res) => {
  res.send("Api Working");
});

app.listen(port, () => {
  console.log("Server is running on PORT : " + port);
});
