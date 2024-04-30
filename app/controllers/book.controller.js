"use strict";

const { Book } = require("../models/book.model")

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Books"]
            #swagger.summary = "List Books"
        */

        const data = await Book.find()
    
        res.status(200).send({
            error: false,
            result: data
        })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Books"]
            #swagger.summary = "Create Book"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "_id": "661aee14a06755ee921e79f4",
                    "title": "title",
                    "author": "author",
                    "ISBN": "123456789",
                    "genre": "genre",
                    "publicationYear": 2010,
                    "image": "https://www.iskultur.com.tr/webp/2010/02/Nutuk.png",
                }
            }
        */

        const data = await Book.create(req.body)
    
        res.status(201).send({
            error: false,
            result: data
        })
    
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Books"]
            #swagger.summary = "Get Single Book"
        */

        const data = await Book.findOne({_id: req.params.id})

        res.status(200).send({
            error: false,
            result: data
        })

    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Books"]
            #swagger.summary = "Update Book"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "_id": "661aee14a06755ee921e79f4",
                    "title": "title",
                    "author": "author",
                    "ISBN": "123456789",
                    "genre": "genre",
                    "publicationYear": 2010,
                    "image": "https://www.iskultur.com.tr/webp/2010/02/Nutuk.png",
                }
            }
        */

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
        /*
            #swagger.tags = ["Books"]
            #swagger.summary = "Delete Book"
        */

        const data = await Book.deleteOne({_id: req.params.id})

        res.sendStatus((data.deletedCount >= 1) ? 204 : 404)
    }

}