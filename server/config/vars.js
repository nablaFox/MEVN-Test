require('dotenv').config()

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    mongo: {
        uri: process.env.MONGO_URI
    }
}