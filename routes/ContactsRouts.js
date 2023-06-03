const express = require("express");
const router = express.Router();
const  { getContacts ,createContacts, updateContacts, getContact, deleteContact } = require("../controllers/contactControllers")
router.route("/").get(getContacts);

router.route("/").post(createContacts);

router.route("/:id").get(getContact);

router.route("/:id").put(updateContacts);

router.route("/:id").delete(deleteContact);

module.exports = router;
