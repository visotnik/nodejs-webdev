const express = require("express");
const router = express.Router();

const { getContacts } = require("../controllers/contact-controller");

router.get("/contacts", getContacts);

// редирект
// добавить статус ответа сервера 301
router.get("/about-us", (req, res) => {
  res.redirect("/contacts");
});

module.exports = router;
