require('dotenv').config()
const express= require('express')
const app = express()
const http = require('http').Server(app)
const bodyParser = require('body-parser')
const sequelize = require('./db.js')
const Log = sequelize.import('./Models/log.js')
//create table

//Log.sync({force: true}) //this drops table should we need to
sequelize.sync()

app.use(bodyParser.json())//will parse code and then turn it into JSON

app.use(require('./middleware/headers.js'))
app.use(require('./middleware/validate-session.js'))

app.use('/api/user', require('./routes/user.js'))
app.use('/api/login', require('./routes/session.js'))
app.use('/api/definition', require('./routes/definition.js'))
app.use('/api/log', require('./routes/log.js'))



http.listen(process.env.PORT || 3000, function(){
	console.log("Listen 3000")
})
