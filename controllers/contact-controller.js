const createPath = require("../helpers/create-path");
const Contact = require("../models/contact");

const getContacts = (req, res) => {
  const title = "Contacts";
  Contact.find()
    .then((contacts) => {
      return res.render(createPath("contacts"), { contacts, title });
    })
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title });
    });
};

module.exports = { getContacts };
