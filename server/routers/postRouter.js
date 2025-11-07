import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";
import {
  addPost,
  deletePost,
  getAllPosts,
  getPostBasedOnId,
  updatedPost,
} from "../controllers/postControllers.js";

const poster = Router();

poster.post("/", authMiddleware, upload.single("image"), addPost); // Test Done
poster.get("/", getAllPosts); // Test Done
poster.get("/:id", getPostBasedOnId); // Test Done
poster.put("/:id", authMiddleware, upload.single("image"), updatedPost); // Test Done
poster.delete("/:id", authMiddleware, deletePost); // Test Done

export default poster;
