const express = require("express");
const router = express.Router();
const  { getContacts ,createContacts, updateContacts, getContact, deleteContact } = require("../controllers/contactControllers")
router.route("/").get(getContacts).post(createContacts);


router.route("/:id").get(getContact).put(updateContacts).delete(deleteContact);

module.exports = router;
