const express = require('express')
const taskRoutes = require('./task.route')

const router = express.Router()


router.use('/task', taskRoutes)


module.exports = router;