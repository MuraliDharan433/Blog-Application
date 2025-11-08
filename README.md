🧾 MERN Blog Application
📘 Project Overview

The MERN Blog Application is a full-stack web app built using the MERN stack (MongoDB, Express, React, Node.js).
It allows users to sign up, log in, create, edit, and delete blog posts, with optional image uploads for posts.
All data is secured with JWT authentication and authorization.

🚀 Key Features

🔐 User Authentication: Secure Signup & Login using JWT

✍️ Post Management: Create, Edit, and Delete blog posts (Full CRUD)

🖼️ Image Uploads: Upload images with posts using Multer

🧠 Redux Toolkit: Centralized state management for auth and posts

⚙️ Protected Routes: Only authenticated users can create/edit posts

📱 Responsive UI: Fully responsive layout using Tailwind CSS

⚡ Error Handling: Graceful error messages and 404 page

🧑‍💻 Tech Stack Used
Layer	Technology	Description
Frontend	React.js	UI and component rendering
	Redux Toolkit	Global state management
	React Router DOM	Routing and navigation
	Axios	API communication
	Tailwind CSS	Styling and responsiveness
Backend	Node.js + Express.js	REST API server
	Multer	File/image uploads
	JWT	Authentication tokens
Database	MongoDB + Mongoose	NoSQL database and ORM
Version Control	Git + GitHub	Source code management
⚙️ How to Run the Project
1️⃣ Clone the Repository
git clone https://github.com/MuraliDharan433/Blog-Application.git
cd Blog-Application

2️⃣ Setup the Backend
cd server
npm install


Create a .env file in the server directory:

PORT=4000

MONGO_URI="mongodb+srv://jackmurali433_db_user:HuB1gRbFwGCAtbLL@blog.hoish84.mongodb.net/?appName=Blog"

JWT_SECRET="c5d27b48377c4884593b7b461f3c1d782df34957887737ffed33451335041e882044cf39299df3bd2decef3de5723f935493da3dd24d73ca3d5442f82fce08ab"


Start the backend server:

npm start


Backend runs on 👉 http://localhost:4000

3️⃣ Setup the Frontend
cd client
npm install
npm run dev


Frontend runs on 👉 http://localhost:5173

4️⃣ Connect Backend and Frontend

In client/src/api.js, set the base URL:

import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4000/api", // adjust as needed
});

🧠 Authentication Flow

Step	Method	Endpoint	Description

Register User	POST	/api/auth/register	Create a new user

Login User	POST	/api/auth/login	Authenticate and get JWT

Protected Routes	-	-	Middleware verifies JWT

Token Storage	-	-	Token stored in localStorage and sent in headers

✍️ Post Management

Action	Method	Endpoint	Protected

Create Post	POST	/api/post	✅ Yes

Get All Posts	GET	/api/post	❌ No

Get Single Post	GET	/api/post/:id	❌ No

Edit Post	PUT	/api/post/:id	✅ Yes (Author only)

Delete Post	DELETE	/api/post/:id	✅ Yes (Author only)

🖼️ Image Upload Details

Implemented using Multer middleware

Uploaded images stored in /uploads directory

When updating a post, old images are replaced automatically

Served statically via Express:

app.use("/uploads", express.static("uploads"));

🧩 Security

🔐 Passwords hashed using bcrypt before saving to MongoDB

🔑 JWT verification for all protected routes

🧰 Validation for file types and user inputs

💅 Styling

Built fully responsive with Tailwind CSS

Consistent UI components for buttons, forms, and cards

Clean and minimal design for readability

🧪 Testing

✅ Manual testing of all CRUD operations

✅ Verified image uploads and post editing

✅ Validated authentication and error handling

✅ Checked unauthorized route restrictions
