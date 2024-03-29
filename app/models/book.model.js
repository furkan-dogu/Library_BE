"use strict";

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize("sqlite:./db.sqlite3")

const Book = sequelize.define("books", {

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    author: {
        type: DataTypes.STRING,
        allowNull: false
    },

    ISBN: {
        type: DataTypes.STRING, 
        allowNull: false
    },

    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    publicationYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    image: {
        type: DataTypes.TEXT,
        allowNull: false
    },

});

// sequelize.sync()
// sequelize.sync({ force: true })
// sequelize.sync({ after: true })

sequelize.authenticate()
    .then(() => console.log("Database connected"))
    .catch(() => console.log("Database not connected"));

module.exports = Book;
