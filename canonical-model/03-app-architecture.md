# App Architecture

Defines the map of the system: where features live and how screens connect to objects and actions.

Reference objects from `01-object-catalog.md` and actions from `02-action-map.md` by exact name.

---

## Product at a Glance

- Users manage blog accounts and blog posts.
- Users can register, log in, create, edit, view, and delete posts.
- Users can upload profile images and post images.
- Bloggers and authenticated users.

## Users

- Guest
- Authenticated user

---

## Navigation Modules

- **Public:** Home, Post Details, Login, Register, Not Found
- **Authenticated:** Home, Post Details, Create Post, Edit Post, Not Found

---

## Screen Definitions

### Home

- **Purpose:** Shows the latest blog posts to all visitors; used by guests and authenticated users.
- **Primary Data Shown:** Post, User
- **Primary Actions Available:** Get All Posts, Open Post Details
- **UI Locators:**

  | Role | Value |
  |---|---|
  | link | BlogApp |
  | heading | 📰 Latest Blog Posts |
  | link | Read More → |

### Post Details

- **Purpose:** Shows a single blog post with author info and lets the author edit or delete it; used by authenticated users.
- **Primary Data Shown:** Post, User
- **Primary Actions Available:** Get Single Post, Edit Post, Delete Post
- **UI Locators:**

  | Role | Value |
  |---|---|
  | link | ← Back to Home |
  | button | ✏️ Edit |
  | button | 🗑️ Delete |

### Login

- **Purpose:** Authenticates a user and starts a session; used by guests.
- **Primary Data Shown:** User
- **Primary Actions Available:** Login User
- **UI Locators:**

  | Role | Value |
  |---|---|
  | heading | Login |
  | textbox | Email |
  | textbox | Password |
  | button | Login |

### Register

- **Purpose:** Creates a new user account with optional profile image; used by guests.
- **Primary Data Shown:** User
- **Primary Actions Available:** Register User
- **UI Locators:**

  | Role | Value |
  |---|---|
  | heading | Create Account |
  | textbox | Username |
  | textbox | Email |
  | textbox | Password |
  | textbox | Profile Image (optional) |
  | button | Register |
  | link | Login |

### Create Post

- **Purpose:** Creates a new blog post with optional image upload; used by authenticated users.
- **Primary Data Shown:** Post
- **Primary Actions Available:** Create Post
- **UI Locators:**

  | Role | Value |
  |---|---|
  | heading | Create a Post |
  | textbox | Title |
  | textbox | Content |
  | textbox | file |
  | button | Create Post |

### Edit Post

- **Purpose:** Updates an existing post and optionally replaces its image; used by the post author.
- **Primary Data Shown:** Post
- **Primary Actions Available:** Edit Post
- **UI Locators:**

  | Role | Value |
  |---|---|
  | heading | ✏️ Edit Your Post |
  | textbox | Title |
  | textbox | Content |
  | textbox | Replace Image (optional) |
  | button | Update Post |

### Not Found

- **Purpose:** Displays a 404 page when a route does not exist; used by all users.
- **Primary Data Shown:** None
- **Primary Actions Available:** Go to Home
- **UI Locators:**

  | Role | Value |
  |---|---|
  | heading | 404 |
  | heading | Page Not Found |
  | link | ← Back to Home |

---

## Shared Logic Patterns

- **Authentication Pattern:** JWT is stored in localStorage, sent in the Authorization header, and required for protected create/edit/delete routes.
- **Authorization Pattern:** Only authenticated users can access Create Post and Edit Post, and only the post author can edit or delete a post.
- **Image Upload Pattern:** Profile images and post images are uploaded with multipart form data and accepted only for supported image types.
- **Content Listing Pattern:** The home screen loads all posts and renders them as cards with a link to the post details screen.
