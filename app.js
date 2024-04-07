"use strict"

const express = require("express")
const app = express()
const cors = require("cors")

require("dotenv").config()
const PORT = process.env.PORT || 8000

app.use(cors())

app.use(express.json())

require("./app/configs/dbConnection")

require("express-async-errors")

app.use(require("./app/routes/book.router"))

app.use(require("./app/middlewares/errorHandler"))

app.listen(PORT, () => console.log("Localhost çalışıyor http://localhost:" + PORT))