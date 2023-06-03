const express = require("express");
const router = express.Router();

router.route("/").get((req,res) =>{
    res.status(200).json({Message : "Contacts"});
});

router.route("/").post((req,res) =>{
    res.status(200).json({ Message: "Create Contacts"});
});

router.route("/:id").get((req,res) =>{
    res.status(200).json({Message: `get Contacts${req.params.id}`});
});

router.route("/:id").put((req,res) =>{
    res.status(200).json({Message: `update Contacts${req.params.id}`});
});

router.route("/:id").delete((req,res) =>{
    res.status(200).send({ Message: `delete Contacts${req.params.id}`});
});

module.exports = router;
