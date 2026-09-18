# Requirements

How the app works

Blog Application lets visitors read public blog posts and lets signed-in users create and manage their own posts. It also lets people register, log in, and log out, with optional profile images during registration.

## In one sentence

People can browse blog posts, create an account, sign in, and publish, update, or remove their own posts.

## Who uses it

- **Guest** — Browses public posts and can register or log in.
- **Authenticated User** — Signs in to create posts and edit or delete their own posts.

## What you can do, start to finish

### Browse the blog
**Who:** Guest or Authenticated User  
**They want to:** Read the latest posts and open one for details.  
**How it goes, start to finish:**
1. Open the home page.
2. See the latest blog posts.
3. Choose a post and open its details.
4. Read the full post, including author information and any image.
**When it works:**
- The home page shows the latest posts.
- A post details page opens and shows the full post.
**If something goes wrong:**
- If the post cannot be found or loaded, the user sees a “Post not found” message.

### Register for an account
**Who:** Guest  
**They want to:** Create a new account to use the blog as a signed-in user.  
**How it goes, start to finish:**
1. Open the home page.
2. Choose **Register**.
3. Enter a username, email, and password.
4. Optionally add a profile image.
5. Submit the registration form.
6. After success, go to the login page.
**When it works:**
- The account is created.
- The user is taken to the login page.
**If something goes wrong:**
- If the details are invalid or the save fails, the user sees a registration failure message.

### Log in to the app
**Who:** Guest  
**They want to:** Sign in with an existing account.  
**How it goes, start to finish:**
1. Open the home page.
2. Choose **Login**.
3. Enter email and password.
4. Submit the login form.
5. After success, go to the home page.
**When it works:**
- The user is signed in.
- The home page is shown in the signed-in state.
**If something goes wrong:**
- If the email or password is wrong, the user sees a login failed message.

### Create a post
**Who:** Authenticated User  
**They want to:** Publish a new blog post.  
**How it goes, start to finish:**
1. Sign in.
2. Go to the create post page.
3. Enter a title and content.
4. Optionally add an image.
5. Submit the form.
6. Return to the home page after success.
**When it works:**
- The new post is created.
- The user goes back to the latest posts list.
**If something goes wrong:**
- If the user is not signed in, the form is not available.
- If the content is invalid or the save fails, the user sees an error message.

### View a post in detail
**Who:** Guest or Authenticated User  
**They want to:** Open one post and read everything on it.  
**How it goes, start to finish:**
1. Start from the home page.
2. Choose a post link.
3. Wait for the post details page to open.
4. Read the post title, content, author, date, and image if present.
**When it works:**
- The post details page shows the full post.
**If something goes wrong:**
- If the post is missing, the user sees a not found message.

### Edit a post
**Who:** Authenticated User  
**They want to:** Change one of their own posts.  
**How it goes, start to finish:**
1. Sign in.
2. Open one of their own posts.
3. Choose **Edit**.
4. Change the title or content.
5. Optionally replace the image.
6. Submit the update.
7. Return to the post details page after success.
**When it works:**
- The post is updated.
- The updated post details are shown.
**If something goes wrong:**
- If the user is not signed in, or is not the author, editing is not allowed.
- If the update fails, the user sees an edit failed message.

### Delete a post
**Who:** Authenticated User  
**They want to:** Remove one of their own posts.  
**How it goes, start to finish:**
1. Sign in.
2. Open one of their own posts.
3. Choose **Delete**.
4. Confirm the deletion in the browser prompt.
5. Return to the home page after success.
**When it works:**
- The post is deleted.
- The user goes back to the home page.
**If something goes wrong:**
- If the user cancels the confirmation, nothing is deleted.
- If the user is not the author or the delete fails, the user sees a delete failed message.

### Log out
**Who:** Authenticated User  
**They want to:** End their signed-in session.  
**How it goes, start to finish:**
1. While signed in, choose **Logout**.
2. The session is cleared.
3. Go to the login page.
**When it works:**
- The user is signed out.
- The login page is shown.
**If something goes wrong:**
- No failure case is defined for logout.

### Go back to home
**Who:** Guest or Authenticated User  
**They want to:** Return to the latest posts from another page.  
**How it goes, start to finish:**
1. On a post page or 404 page, choose **Back to Home** or **BlogApp**.
2. Return to the home page.
**When it works:**
- The home page with the latest posts is shown.
**If something goes wrong:**
- No failure case is defined for this navigation.

## Screens you will use

### Home
What the person sees and what they can do, in business terms.

They see the latest blog posts. They can open a post to read it. They can also move back to the home page from other screens.

### Post Details
What the person sees and what they can do, in business terms.

They see one full post with its author details and any image. If they are the author, they can edit or delete the post.

### Login
What the person sees and what they can do, in business terms.

They enter their email and password to sign in.

### Register
What the person sees and what they can do, in business terms.

They create a new account with a username, email, password, and optional profile image.

### Create Post
What the person sees and what they can do, in business terms.

They enter a title, content, and optional image to publish a new post.

### Edit Post
What the person sees and what they can do, in business terms.

They update the title, content, and optional image for one of their own posts.

### Not Found
What the person sees and what they can do, in business terms.

They see a 404 page when they go to a page that does not exist, and they can return home.

## Everyday rules

- Only signed-in users can create, edit, or delete posts.
- Only the person who wrote a post can edit or delete it.
- Guests can read posts, but they cannot access create or edit pages.
- A post must have a title and content.
- A post can include one image, but it is not required.
- Profile images and post images must be valid image files.
- When a post image is replaced or a post is deleted, the old image is removed.
- Sign-in sessions expire after 7 days.
- If a sign-in token is missing or invalid, protected actions are blocked.
- Usernames must be unique and at least 3 characters long.
- Emails must be unique and in a valid email format.
- Passwords must be at least 6 characters long.

## What this does not include

- Comments on posts
- Likes, bookmarks, or sharing
- Admin moderation tools
- Drafts or scheduled publishing
- Any workflow beyond registering, logging in, logging out, creating, editing, viewing, and deleting posts
