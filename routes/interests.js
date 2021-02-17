const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('interests/index')
})

module.exports = router