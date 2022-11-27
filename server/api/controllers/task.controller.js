const httpStatus = require('http-status');
const logger = require('../../config/logger');
const Task = require('../models/task.model')

/**
 * Get user list
 * @public
 */

exports.list = async (req, res, next) => {
    try {
        const tasks = await Task.list(req.query);
        const transformedTask = tasks.map(user => user.transform())
        res.json(transformedTask)
    } catch(err) {
        next(err) // call the error handler
    }
}

exports.create = async (req, res, next) => {
    try {
        const task = new Task(req.body)
        const savedTask = await task.save()
        res.status(httpStatus.CREATED)
        res.json(savedTask.transform())
    } catch(err) {
        next(err)
    }
}


exports.remove = async (req, res, next) => {
    try {
        await Task.remove(req.query)
        res.status(httpStatus.NO_CONTENT).end()
    } catch(err) { 
        next(err) 
    }
} 
