const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('experiences/index')
})

module.exports = router