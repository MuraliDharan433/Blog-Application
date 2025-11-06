import express from "express";
import dotenv from "dotenv";
import auth from "./routers/authRouter.js";
import connectDB from "./config/dbConnect.js";
import post from "./routers/postRouter.js";

dotenv.config();
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", auth);
app.use("/api/post",post)



app.listen(PORT, () => {
  console.log(`Server is host on ${PORT}`);
});



