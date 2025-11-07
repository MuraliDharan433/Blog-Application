import { Router } from "express";
import { login, register } from "../controllers/authControllers.js";
import uploadProfile from "../middleware/uploadProfile.js";

const auth = Router();

auth.post("/register", uploadProfile.single("profileImage"), register); // Test Done
auth.post("/login", login); // Test Done

export default auth;
