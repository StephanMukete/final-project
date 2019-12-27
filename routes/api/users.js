const express = require('express')
const router = express.Router()

// GET public test route
router.get('/', (req, res) => res.send('User rout is working'))

module.exports = router 
