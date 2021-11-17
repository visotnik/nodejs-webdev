// Определение схемы в Mongoose
// https://metanit.com/web/nodejs/6.7.php

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// создаем схему документа через конструктор Schema
// пакета mongoose
const postSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// создаем модель, задаем ей имя и передаем ей схему,
// модель присваиваем в константу Post
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
