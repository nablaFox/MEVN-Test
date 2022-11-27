const mongoose = require("mongoose")
const { omitBy, isNil } = require('lodash')
const logger = require("../../config/logger")

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 300
    },
    status: {
        type: String,
        required: true
    }
})


taskSchema.method({
    transform() {
        const transformed = {}
        const fields = ['id', 'title', 'description', 'status']

        fields.forEach(field => {
            transformed[field] = this[field]
        })

        return transformed
    }
})


taskSchema.statics = {

   /**
    * List users in descending order of 'createdAt' timestamp.
    *
    * @param {number} skip - Number of users to be skipped.
    * @param {number} limit - Limit number of users to be returned.
    * @returns {Promise<User[]>}
    */
    list({
        skip = 0, limit = 30, title, description, status
    }) {
        const options = omitBy({ title, description, status }, isNil)

        return this
            .find(options)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .exec()
    },

    remove(_id) {
        return this.deleteOne({ _id: _id })
    }
}

module.exports = mongoose.model('Task', taskSchema)
