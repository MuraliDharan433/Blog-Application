import path from "path";
import Post from "../model/Post.js";
import fs from "fs";

export const addPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newPost = await Post.create({
      title,
      content,
      author: req.user.id,
      image: req.file ? `/uploads/${req.file.filename}` : null,
    });

    res.status(201).json({ newPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "username email")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPostBasedOnId = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findById(postId).populate(
      "author",
      "username email"
    );

    if (!post) return res.status(404).json({ message: "Post not found" });

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatedPost = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findById(postId);

    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.author.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;

    if (req.file) post.image = `/uploads/${req.file.filename}`;

    await post.save();

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.author.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    if (post.image) {
      const imagePath = path.join(process.cwd(), post.image);
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.warn("Image deleted faild", err.message);
        } else {
          console.log("Image deleted Successfully", imagePath);
        }
      });
    }

    await post.deleteOne();

    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
