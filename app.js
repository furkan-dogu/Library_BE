"use strict"

const express = require("express")
const app = express()
const cors = require("cors")

require("dotenv").config()
const PORT = process.env.PORT || 8000

app.use(express.json())

app.use(cors({
    origin: "http://localhost:3000"
}))

require("express-async-errors")

app.use(require("./app/routes/book.router"))

app.use(require("./app/errorHandler"))

app.listen(PORT, () => console.log("Localhost çalışıyor http://localhost:" + PORT))