const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('../api/routes')
const error = require('../api/middlewares/error')
const logger = require('./logger')

/**
* Express instance
* @public
*/

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/', routes)

// error handler, send stacktrace only during development
app.use(error.handler)

module.exports = app;
