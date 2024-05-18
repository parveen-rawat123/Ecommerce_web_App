const express = require("express")
const app = express()

// Route imports
const product = require("./routes/productRoute")

app.use("/api/v1",product);
app.use(express.json());
module.exports = app
