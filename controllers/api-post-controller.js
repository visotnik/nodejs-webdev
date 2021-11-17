const Post = require("../models/post");

// можно возвращать объект error или само сообщение
// об ошибке error.message
const handleError = (res, error) => {
  res.status(500).send(error.message);
};

const getPosts = (req, res) => {
  // find() - загрузить все элементы из коллекции Post
  // sort({ createdAt: -1 }) - сортировать по полю createdAT по убыванию
  // then (() => res.render()) - отрисовать страницу по урл... и передать туда данные ...
  Post.find()
    .sort({ createdAt: -1 })
    .then((posts) => res.status(200).json(posts))
    .catch((error) => handleError(res, error));
};

const postAddPost = (req, res) => {
  const { title, author, text } = req.body;
  const post = new Post({ title, author, text });
  post
    .save()
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
};

const getPost = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
};

const deletePost = (req, res) => {
  const { id } = req.params;
  Post.findByIdAndDelete(id)
    .then((post) => res.status(200).json(id))
    .catch((error) => handleError(res, error));
};

const putEditPost = (req, res) => {
  const { title, author, text } = req.body;
  const { id } = req.params; // const id = req.params.id
  Post.findByIdAndUpdate(id, { title, author, text }, { new: true }) // перезаписываем поля в базе
    .then((post) => res.json(post))
    .catch((error) => handleError(res, error));
};

module.exports = {
  getPosts,
  postAddPost,
  getPost,
  deletePost,
  putEditPost,
};
