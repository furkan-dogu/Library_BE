"use strict"

const book = require("../controllers/book.controller")

const router = require("express").Router()

router.route("/")
    .get(book.list)
    .post(book.create)

module.exports = router