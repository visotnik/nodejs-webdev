// Определение схемы в Mongoose
// https://metanit.com/web/nodejs/6.7.php

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// создаем схему через конструктор Schema
// пакета mongoose
const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

// создаем модель, задаем ей имя и передаем ей схему,
// модель присваиваем в константу Post
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
