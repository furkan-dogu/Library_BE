"use strict";

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        author: {
            type: String,
            required: true
        },

        ISBN: {
            type: String,
            required: true
        },

        genre: {
            type: String,
            required: true
        },

        publicationYear: {
            type: Number,
            required: true
        },

        image: {
            type: String,
            required: true
        }
    },
    {
        collection: "book",
        timestamps: true,
    }
)

module.exports = {
    Book: mongoose.model("Book", bookSchema)
}
