//get all contacts
// GET /api/contacts
// access public

const getContacts = (req,res) =>{
    res.status(200).json({Message : "Get Contacts"});
};


//get create contacts
// POST /api/contact
// access public

const createContacts = (req,res) =>{
    console.log("the body is = ",req.body);
    const {Name , Email , Phone} = req.body;
    if(!Name || !Email || !Phone){
        res.status(404);
        throw new Error("All fileds are required");
    }
    console.log()
    res.status(201).json({ Message: "Create Contacts"});
}


//get contact
// GET /api/contact/:id
// access public

const getContact = (req,res) =>{
    res.status(200).json({Message: `get Contacts${req.params.id}`});
};


//get update contacts
// PUT /api/contact/:id
// access public

const updateContacts = (req,res) => {
    res.status(200).json({Message: `update Contacts${req.params.id}`});
};


//get update contacts
// POST /api/contact/:id
// access public

const deleteContact = (req,res) => {
    res.status(200).send({ Message: `delete Contacts${req.params.id}`});
}

module.exports = {getContacts , createContacts, updateContacts, getContact, deleteContact };