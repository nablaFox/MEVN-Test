const mongoose = require("mongoose")
const logger = require("./logger")

const { mongo } = require('./vars')

mongoose.connection.on('error', err => {
    logger.error(`MongoDB connection error: ${err}`)
    process.exit(-1)
})

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */

exports.connect = () => {
    mongoose
        .connect(mongo.uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => logger.info('MongoDB database Connected...'))
        .catch(err => logger.error(err))

    return mongo
}   
