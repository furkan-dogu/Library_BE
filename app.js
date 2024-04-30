"use strict"

const express = require("express")
const app = express()
const cors = require("cors")

require("dotenv").config()
const PORT = process.env.PORT || 8000

app.use(cors())

//? JSON:
app.use("/documents/json", (req, res) => {
    res.sendFile("swagger.json", { root: "." })
})

//? SWAGGER:
const swaggerUi = require('swagger-ui-express')
const swaggerJson = require("./swagger.json")
const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.12.0/swagger-ui.min.css"
app.use("/documents/swagger", swaggerUi.serve, swaggerUi.setup(swaggerJson, { customCssUrl: CSS_URL }, { swaggerOptions: { persistAuthorization: true } }))

//? REDOC:
const redoc = require('redoc-express')
app.use("/documents/redoc", redoc({
    title: "Library",
    specUrl: "/documents/json"
}))

app.use(express.json())

require("./app/configs/dbConnection")

require("express-async-errors")

app.use(require("./app/routes/book.router"))

app.use(require("./app/middlewares/errorHandler"))

app.listen(PORT, () => console.log("Localhost çalışıyor http://localhost:" + PORT))