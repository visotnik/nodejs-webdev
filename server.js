const express = require("express");
const morgan = require("morgan");
const chalk = require("chalk");
const mongoose = require("mongoose");
// не присваевается переменной
require("dotenv").config();
const methodOverride = require("method-override");

const createPath = require("./helpers/create-path");
const postRoutes = require("./routes/post-routes");
const contactRoutes = require("./routes/contact-routes");
const postApiRoutes = require("./routes/api-post-routes");

const errorMsg = chalk.bgKeyword("white").redBright;
const successMsg = chalk.green.bold.underline;

app = express();

app.set("view engine", "ejs");

const PORT = process.env.PORT;
// server Mongo
const db = process.env.MONGO_URL;

// { useNewUrlParser: true, useUnifiedTopology: true } - опциональные параметры
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log(successMsg("Connected to DB")))
  .catch((error) => console.log(errorMsg(error)));

app.listen(PORT, (error) => {
  error
    ? console.log(errorMsg(error))
    : console.log(successMsg(`listening port ${PORT}`));
});

// middleware
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(express.urlencoded({ extended: false }));

// открываем для браузеров доступ к папке
// все остальные файлы по умолчанию закрыты
app.use(express.static("styles"));

app.use(methodOverride("_method"));

//routing
app.get("/", (req, res) => {
  const title = "Home";
  res.render(createPath("index"), { title });
});

app.use(postRoutes);
app.use(contactRoutes);
app.use(postApiRoutes);

app.use((req, res) => {
  const title = "Error page";
  res.statusCode = 404;
  res.render(createPath("error"), { title });
});
