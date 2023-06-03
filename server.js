// console.log("Atta ur Rehman");
const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.port || 5000;


app.get("/api/contacts" , (req , res) => {
    res.send("Get all contscts");
});
app.listen(port , () =>
{
    console.log(`Server running on port No ${port}`);
} )