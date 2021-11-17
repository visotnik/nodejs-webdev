const express = require("express");
const router = express.Router();

// import бизнес-логики (контройлеры)
const {
  getPost,
  deletePost,
  getEditPost,
  putEditPost,
  getPosts,
  getAddPost,
  postAddPost,
} = require("../controllers/post-controller");

router.get("/posts/:id", getPost);
router.delete("/posts/:id", deletePost);
router.get("/edit/:id", getEditPost);
router.put("/edit/:id", putEditPost);
router.get("/posts", getPosts);
router.get("/add-post", getAddPost);
router.post("/add-post", postAddPost);

module.exports = router;
