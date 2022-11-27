const express = require('express')
const controller = require('../controllers/task.controller')


const router = express.Router()

router
    .route('/')
    .get(controller.list) // get tasks
    .post(controller.create) // create task
    .delete(controller.remove) // delete task
    

module.exports = router;