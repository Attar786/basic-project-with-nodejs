const express = require("express");
const router = express.Router();

router.route("/").get((req,res) =>{
    res.status(200).json({Message : "Contacts"});
});

router.route("/").post((req,res) =>{
    res.status(200).json({ Message: "Create Contacts"});
});

router.route("/:id").put((req,res) =>{
    res.status(200).json({Message: "update Contacts"});
});

router.route("/:id").get((req,res) =>{
    res.status(200).send({ Message: "Contacts"});
});

module.exports = router;
