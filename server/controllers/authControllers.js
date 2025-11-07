import User from "../model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Generate A JWT Token For Verify a User
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Register Controller
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    //Hasing a Password
    const hashedPasswod = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPasswod,
      profileImage: req.file ? `/uploads/profile/${req.file.filename}` : "",
    });

    //Response
    res.status(201).json({
      message: "User is Created Successfully",
      data: {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        token: generateToken(newUser._id),
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Login Controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });

    //Compare a passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      profileImage: user.profileImage,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
