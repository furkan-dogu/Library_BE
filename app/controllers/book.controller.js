"use strict";

const { Book } = require("../models/book.model")

module.exports = {

    list: async (req, res) => {

        const data = await Book.find()
    
        res.status(200).send({
            error: false,
            result: data
        })
    },

    create: async (req, res) => {

        const data = await Book.create(req.body)
    
        res.status(201).send({
            error: false,
            result: data
        })
    
    },

    read: async (req, res) => {

        const data = await Book.findOne({_id: req.params.id})

        res.status(200).send({
            error: false,
            result: data
        })

    },

    update: async (req, res) => {

        const data = await Book.updateOne({_id: req.params.id}, req.body)
        const newData = await Book.find({_id: req.params.id})

        res.status(202).send({
            error: false,
            message: "Updated",
            result: data,
            newData
        })

    },

    delete: async (req, res) => {

        const data = await Book.deleteOne({_id: req.params.id})

        res.sendStatus((data.deletedCount >= 1) ? 204 : 404)
    }

}