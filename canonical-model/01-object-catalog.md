# Object Catalog

Defines the nouns of the system: what data exists, what states it can be in, and the rules it must follow.

## Roles (reference for privacy rules)

| Role | Description |
|---|---|
| Guest | An unauthenticated visitor who can browse public posts and access login/register screens |
| Authenticated User | A signed-in user who can create posts and edit or delete their own posts |

---

## User

- **Definition:** A registered account holder who can authenticate into the blog application and author posts.
- **Attributes:**
  - _id: Unique user identifier / ObjectId
  - username: Display name / String
  - email: Login email address / String
  - password: Hashed password stored in the database / String
  - profileImage: Optional profile image path / String
  - token: JWT authentication token returned after login or registration / String
  - createdAt: Account creation timestamp / Date
  - updatedAt: Last profile update timestamp / Date
- **Lifecycle States:**
  - Registered -> Authenticated
  - Authenticated -> Logged Out
- **Business Constraints:**
  - Username must be unique, trimmed, and at least 3 characters long
  - Email must be unique and match a valid email format
  - Password must be at least 6 characters and is hashed before storage
  - Profile image is optional and, when provided, must be an allowed image type
- **Data Privacy:**
  - View: Authenticated User, Guest
  - Edit: Authenticated User

---

## Post

- **Definition:** A blog post created by a user, optionally including an uploaded image.
- **Attributes:**
  - _id: Unique post identifier / ObjectId
  - title: Post title / String
  - content: Post body text / String
  - image: Optional uploaded image path / String
  - author: Reference to the User who created the post / ObjectId
  - createdAt: Post creation timestamp / Date
  - updatedAt: Last post update timestamp / Date
- **Lifecycle States:**
  - Created -> Updated
  - Created -> Deleted
  - Updated -> Deleted
- **Business Constraints:**
  - Title and content are required
  - A post must belong to exactly one author
  - Only authenticated users can create posts
  - Only the author can edit or delete a post
  - Uploaded images must be JPEG, PNG, or JPG files
  - If a post image is replaced or the post is deleted, the old image file is removed from storage
- **Data Privacy:**
  - View: Authenticated User, Guest
  - Edit: Authenticated User (author only)

---

## Authentication Session

- **Definition:** The signed-in state represented by a JWT token stored client-side and sent with API requests.
- **Attributes:**
  - token: JWT bearer token / String
  - isAuthenticated: Whether the current client session is logged in / Boolean
  - user: The current user profile data stored in application state / User object
- **Lifecycle States:**
  - Logged Out -> Logged In
  - Logged In -> Logged Out
- **Business Constraints:**
  - Protected routes require a valid JWT token
  - JWT tokens expire after 7 days
  - The client sends the token in the Authorization header as a Bearer token
  - If the token is missing or invalid, protected requests are rejected
- **Data Privacy:**
  - View: Authenticated User
  - Edit: Authenticated User

---

## Cross-Entity Rules

- Every post must be associated with exactly one user as its author
- Only authenticated users can create, update, or delete posts
- Only the author of a post can update or delete that post
- Public users can view posts, but cannot access create or edit routes without authentication
- Uploaded files for profile images and post images must be valid image types only
- When a post image is replaced or deleted, the previous stored image file should be removed from the uploads directory
