const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')

// DATABASE
const mongoose = require('mongoose')
const db = mongoose.connection

// ROUTERS
const indexRouter = require('./routes/index')
const skillsRouter = require('./routes/skills')
const interestsRouter = require('./routes/interests')
const experiencesRouter = require('./routes/experiences')
const formationsRouter = require('./routes/formations')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layout/layout')
app.use(expressLayout)
app.use(express.static(__dirname + '/ressources'))

db.on('error', error => console.log('Erreur: ', error))
db.once('open', () => console.log('Mongoose Connecté'))

app.use('/', indexRouter)
app.use('/skills', skillsRouter)
app.use('/experiences', experiencesRouter)
app.use('/interests', interestsRouter)
app.use('/formations', formationsRouter)



app.listen(process.env.PORT || 6969)