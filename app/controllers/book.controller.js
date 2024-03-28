"use strict";

const Book = require("../models/book.model")

module.exports = {

    list: async (req, res) => {

        const data = await Book.findAndCountAll()
    
        res.status(200).send({
            error: false,
            result: data
        })
    },

    create: async (req, res) => {

        const data = await Book.create(req.body)
    
        res.status(201).send({
            error: false,
            result: data.dataValues
        })
    
    }

}