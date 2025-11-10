import express from "express";
import dotenv from "dotenv";
import auth from "./routers/authRouter.js";
import connectDB from "./config/dbConnect.js";
import poster from "./routers/postRouter.js";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(
  cors({
    origin: "https://blog-application-2-xz3g.onrender.com",
    credentials: true,
  })
);

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/auth", auth);
app.use("/api/post", poster);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is host on ${PORT}`);
});
