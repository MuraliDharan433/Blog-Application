# Action Map

Defines the verbs of the system: how users interact with objects from the Object Catalog.

Use user roles and lifecycle states exactly as defined in `01-object-catalog.md`.

**Control Type** must map to valid testing locators. Use exact ARIA roles (`button`, `textbox`, `combobox`, `link`, `checkbox`, `heading`, `alert`) OR use `text` for plain text elements.
**Visible Text** must be the exact human-readable text on screen. Do not use HTML tags, CSS classes, or internal variable names.
Use `N/A` for Control Type or Visible Text when a step has no interactive control (e.g. wait for timeout).

---

## Register User

- **Actor:** Guest
- **Trigger:** User decides to create a new account

- **Setup Path (End-to-End steps to reach the trigger state):**

  | Step Description | Control Type | Visible Text |
  | --- | --- | --- |
  | 1. Open the application home page | N/A | N/A |
  | 2. Navigate to the registration page | link | Register |

- **Execution Steps:**

  | Step Description | Control Type | Visible Text |
  | --- | --- | --- |
  | 1. Enter a username | textbox | Username |
  | 2. Enter an email address | textbox | Email |
  | 3. Enter a password | textbox | Password |
  | 4. Optionally choose a profile image | textbox | N/A |
  | 5. Submit the registration form | button | Register |

- **Expected Results:**

  | State | Business Outcome | Control Type | Visible Text |
  | --- | --- | --- | --- |
  | Success | User account is created and user is redirected to the login page | heading | Login |
  | Failure | Validation or server error is shown | alert | Registration failed. Please try again. |

---

## Log In

- **Actor:** Guest
- **Trigger:** User decides to authenticate with an existing account

- **Setup Path (End-to-End steps to reach the trigger state):**

  | Step Description | Control Type | Visible Text |
  | --- | --- | --- |
  | 1. Open the application home page | N/A | N/A |
  | 2. Navigate to the login page | link | Login |

- **Execution Steps:**

  | Step Description | Control Type | Visible Text |
  | --- | --- | --- |
  | 1. Enter an email address | textbox | Email |
  | 2. Enter a password | textbox | Password |
  | 3. Submit the login form | button | Login |

- **Expected Results:**

  | State | Business Outcome | Control Type | Visible Text |
  | --- | --- | --- | --- |
  | Success | User is authenticated and redirected to the home page | heading | Latest Blog Posts |
  | Failure | Invalid credentials or account not found error is shown | alert | Login failed |

---

## Create Post

- **Actor:** Authenticated User
- **Trigger:** User decides to create a new blog post

- **Setup Path (End-to-End steps to reach the trigger state):**

  | Step Description | Control Type | Visible Text |
  | --- | --- | --- |
  | 1. Log in to the application | link | Login |
  | 2. Reach the home page while authenticated | heading | Latest Blog Posts |
  | 3. Open the create post page | link | Create Post |

- **Execution Steps:**

  | Step Description | Control Type | Visible Text |
  | --- | --- | --- |
  | 1. Enter the post title | textbox | Title |
  | 2. Enter the post content | textbox | Content |
  | 3. Optionally choose an image file | textbox | N/A |
  | 4. Submit the create post form | button | Create Post |

- **Expected Results:**

  | State | Business Outcome | Control Type | Visible Text |
  | --- | --- | --- | --- |
  | Success | New post is created and user is redirected to the home page | heading | Latest Blog Posts |
  | Failure | Post creation error is shown | alert | N/A |

---

## View Post Details

- **Actor:** Guest
- **Trigger:** User decides to open a post from the list or a direct post link

- **Setup Path (End-to-End steps to reach the trigger state):**

  | Step Description | Control Type | Visible Text |
  | --- | --- | --- |
  | 1. Open the home page | N/A | N/A |
  | 2. Load the list of posts | heading | Latest Blog Posts |
  | 3. Open a post from the list | link | Read More → |

- **Execution Steps:**

  | Step Description | Control Type | Visible Text |
  | --- | --- | --- |
  | 1. Wait for the post detail page to load | N/A | N/A |

- **Expected Results:**

  | State | Business Outcome | Control Type | Visible Text |
  | --- | --- | --- | --- |
  | Success | Full post details are displayed | text | Unknown Author |
  | Failure | Post cannot be loaded or is missing | text | Post not found |

---

## Edit Post

- **Actor:** Authenticated User
- **Trigger:** User decides to update their own blog post

- **Setup Path (End-to-End steps to reach the trigger state):**

  | Step Description | Control Type | Visible Text |
  | --- | --- | --- |
  | 1. Log in to the application | link | Login |
  | 2. Open one of the user's own posts | link | Read More → |
  | 3. Reach a post detail view that allows editing | button | ✏️ Edit |

- **Execution Steps:**

  | Step Description | Control Type | Visible Text |
  | --- | --- | --- |
  | 1. Open the edit form | button | ✏️ Edit |
  | 2. Update the title | textbox | Title |
  | 3. Update the content | textbox | Content |
  | 4. Optionally replace the image | textbox | N/A |
  | 5. Submit the update | button | Update Post |

- **Expected Results:**

  | State | Business Outcome | Control Type | Visible Text |
  | --- | --- | --- | --- |
  | Success | Post is updated and user is redirected to the post details page | alert | ✅ Post updated successfully! |
  | Failure | User is not logged in, not the author, or update fails | alert | You must be logged in to edit a post! |

---

## Delete Post

- **Actor:** Authenticated User
- **Trigger:** User decides to remove one of their own blog posts

- **Setup Path (End-to-End steps to reach the trigger state):**

  | Step Description | Control Type | Visible Text |
  | --- | --- | --- |
  | 1. Log in to the application | link | Login |
  | 2. Open one of the user's own posts | link | Read More → |
  | 3. Reach a post detail view that allows deletion | button | 🗑️ Delete |

- **Execution Steps:**

  | Step Description | Control Type | Visible Text |
  | --- | --- | --- |
  | 1. Start the delete action | button | 🗑️ Delete |
  | 2. Confirm the browser confirmation dialog | N/A | Are you sure you want to delete this post? |

- **Expected Results:**

  | State | Business Outcome | Control Type | Visible Text |
  | --- | --- | --- | --- |
  | Success | Post is deleted and user is redirected to the home page | alert | 🗑️ Post deleted successfully! |
  | Failure | Deletion is rejected or fails | alert | Failed to delete post |

---

## Log Out

- **Actor:** Authenticated User
- **Trigger:** User decides to sign out of the application

- **Setup Path (End-to-End steps to reach the trigger state):**

  | Step Description | Control Type | Visible Text |
  | --- | --- | --- |
  | 1. Log in to the application | link | Login |
  | 2. Reach the authenticated home page | link | Create Post |
  | 3. Locate the logout control | button | Logout |

- **Execution Steps:**

  | Step Description | Control Type | Visible Text |
  | --- | --- | --- |
  | 1. Click the logout button | button | Logout |

- **Expected Results:**

  | State | Business Outcome | Control Type | Visible Text |
  | --- | --- | --- | --- |
  | Success | Session is cleared and user is redirected to the login page | heading | Login |
  | Failure | N/A | N/A | N/A |

---

## Navigate to Home

- **Actor:** Guest
- **Trigger:** User decides to return to the main posts list from another page

- **Setup Path (End-to-End steps to reach the trigger state):**

  | Step Description | Control Type | Visible Text |
  | --- | --- | --- |
  | 1. Open any page other than home | N/A | N/A |
  | 2. Locate a navigation control back to the home page | link | BlogApp |

- **Execution Steps:**

  | Step Description | Control Type | Visible Text |
  | --- | --- | --- |
  | 1. Click the home navigation link | link | BlogApp |

- **Expected Results:**

  | State | Business Outcome | Control Type | Visible Text |
  | --- | --- | --- | --- |
  | Success | User is taken to the home page with the latest posts | heading | Latest Blog Posts |
  | Failure | N/A | N/A | N/A |

---

## Open Back to Home

- **Actor:** Guest
- **Trigger:** User decides to return to the home page from the 404 screen or a post screen

- **Setup Path (End-to-End steps to reach the trigger state):**

  | Step Description | Control Type | Visible Text |
  | --- | --- | --- |
  | 1. Reach a page with a back-navigation control | link | ← Back to Home |

- **Execution Steps:**

  | Step Description | Control Type | Visible Text |
  | --- | --- | --- |
  | 1. Click the back navigation link | link | ← Back to Home |

- **Expected Results:**

  | State | Business Outcome | Control Type | Visible Text |
  | --- | --- | --- | --- |
  | Success | User is redirected to the home page | heading | Latest Blog Posts |
  | Failure | N/A | N/A | N/A |

---

## Action Conventions

- All create, edit, and delete actions require authentication.
- Edit and delete actions are allowed only for the author of the post.
- Deleting a post requires explicit confirmation before the request is sent.
- File upload actions accept image files only for profile images and post images.
