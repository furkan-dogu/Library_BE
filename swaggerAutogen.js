"use strict"

require("dotenv").config()
const HOST = process.env?.HOST || "https://library-be-two.vercel.app"

const swaggerAutogen = require('swagger-autogen')()
const packageJson = require('./package.json')

const document = {
	info: {
		version: packageJson.version,
		title: packageJson.title,
		description: packageJson.description,
		termsOfService: "https://furkandogu.vercel.app",
		contact: { name: packageJson.author, email: "furkandogu2018@gmail.com" },
		license: { name: packageJson.license, },
	},
	host: `${HOST}`,
	basePath: '/',
	schemes: ['https'],
};

const routes = ['./app.js']
const outputFile = './swagger.json'

swaggerAutogen(outputFile, routes, document)