const httpStatus = require('http-status')
const { env } = require('../../config/vars')

/**
 * Error handler. Send stacktrace only during development
 * @public
*/

exports.handler = (err, req, res, next) => {
    const response = {
        code: err.status,
        message: err.message || httpStatus[err.status],
        errors: err.errors,
        stack: err.stack
    }

    if (env != 'development') { delete response.stack}

    res.status(err.status)
    res.json(response)
}


