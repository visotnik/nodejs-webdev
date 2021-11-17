const createPath = require("../helpers/create-path");
const Post = require("../models/post");

const handleError = (res, error) => {
  console.log(error);
  res.render(createPath("error"), { title: "Error" });
};
// .catch((error) => handleError(res, error))

const getPost = (req, res) => {
  const title = "Post";
  Post.findById(req.params.id)
    .then((post) => {
      return res.render(createPath("post"), { post, title });
    })
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title });
    });
};

const deletePost = (req, res) => {
  const title = "Post";
  console.log("deleting post id", req.params.id);
  Post.findByIdAndDelete(req.params.id)
    .then((result) => {
      return res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title });
    });
};

const getEditPost = (req, res) => {
  const title = "Edit Post";
  Post.findById(req.params.id)
    .then((post) => {
      return res.render(createPath("edit-post"), { post, title });
    })
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title });
    });
};

const putEditPost = (req, res) => {
  const { title, author, text } = req.body;
  const { id } = req.params; // const id = req.params.id
  Post.findByIdAndUpdate(id, { title, author, text }) // перезаписываем поля в базе
    .then((result) => {
      return res.redirect(`/posts/${id}`);
    })
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title });
    });
};

const getPosts = (req, res) => {
  const title = "Posts";
  // find() - загрузить все элементы из коллекции Post
  // sort({ createdAt: -1 }) - сортировать по полю createdAT по убыванию
  // then (() => res.render()) - отрисовать страницу по урл... и передать туда данные ...
  Post.find()
    .sort({ createdAt: -1 })
    .then((posts) => {
      return res.render(createPath("posts"), { title, posts });
    })
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title });
    });
};

const getAddPost = (req, res) => {
  const title = "Add post";
  res.render(createPath("add-post"), { title });
};

const postAddPost = (req, res) => {
  const { title, author, text } = req.body;
  const post = new Post({ title, author, text });
  post
    .save()
    .then((result) => res.redirect("/posts"))
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title });
    });
};

module.exports = {
  getPost,
  deletePost,
  getEditPost,
  putEditPost,
  getPosts,
  getAddPost,
  postAddPost,
};
