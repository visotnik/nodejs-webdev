const express = require("express");

// import бизнес-логики (контройлеры)
const {
  getPosts,
  postAddPost,
  getPost,
  deletePost,
  putEditPost,
} = require("../controllers/api-post-controller");

const router = express.Router();

// Get All Posts
router.get("/api/posts", getPosts);
// Add New Post
router.post("/api/post/", postAddPost); // router.post("/add-post", postAddPost);
// Get Post by ID
router.get("/api/post/:id", getPost); // router.get("/posts/:id", getPost);
// Delete Post by ID
router.delete("/api/post/:id", deletePost); // router.delete("/posts/:id", deletePost);
// Update Post by ID
router.put("/api/post/:id", putEditPost); // router.put("/edit/:id", putEditPost);

module.exports = router;
