# Book Management System

This project constitutes the backend part of a book management system. It provides RESTful APIs using Express.js and performs basic operations on books over an SQLite database.

## Demo

[Live Link](https://library-hqep.onrender.com/)

## Technologies Used

- [Express.js](https://expressjs.com/): A minimalist web framework for Node.js used for building the RESTful API endpoints.
- [SQLite](https://www.sqlite.org/): A lightweight, serverless, self-contained SQL database engine used for storing book data.
- [cors](https://www.npmjs.com/package/cors): A middleware for Express.js used for enabling Cross-Origin Resource Sharing (CORS).
- [dotenv](https://www.npmjs.com/package/dotenv): A module used for loading environment variables from a `.env` file into `process.env`.
- [express-async-errors](https://www.npmjs.com/package/express-async-errors): A module used for handling asynchronous errors in Express.js middleware and route handlers.
- [pg](https://www.npmjs.com/package/pg) and [pg-hstore](https://www.npmjs.com/package/pg-hstore): PostgreSQL client for Node.js and a module used for serializing and deserializing JSON data into hstore format.
- [Sequelize](https://sequelize.org/): A promise-based Node.js ORM (Object-Relational Mapping) used for interacting with the SQLite database and performing database operations.

## Usage

You can perform basic operations on books such as listing, adding new books, updating, and deleting using this API. Operations can be performed as follows:

- **Listing**: List all books using the `GET /books` endpoint.
- **Creating**: Add a new book using the `POST /books` endpoint.
- **Reading**: View a specific book using the GET `/books/:id` endpoint.
- **Updating**: Update a book using either the `PUT /books/:id` or `PATCH /books/:id` endpoints.
- **Deleting**: Delete a book using the `DELETE /books/:id` endpoint. 
