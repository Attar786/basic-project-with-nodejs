console.log("Atta ur Rehman");
const express = require("express");

const app = express();

const port = 5000;

app.listen(port , () =>
{
    console.log(`Server running on port No ${port}`);
} )