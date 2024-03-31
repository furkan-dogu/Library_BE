# Book Management System

This project constitutes the backend part of a book management system. It provides RESTful APIs using Express.js and performs basic operations on books over an SQLite database.

## Demo

A live demo of this project can be found [here](https://library-be-l0e5.onrender.com/)

## Usage

You can perform basic operations on books such as listing, adding new books, updating, and deleting using this API. Operations can be performed as follows:

- **Listing**: List all books using the `GET /books` endpoint.
- **Creating**: Add a new book using the `POST /books` endpoint.
- **Reading**: View a specific book using the GET `/books/:id` endpoint.
- **Updating**: Update a book using either the `PUT /books/:id` or `PATCH /books/:id` endpoints.
- **Deleting**: Delete a book using the `DELETE /books/:id` endpoint. 