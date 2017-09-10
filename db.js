const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL ||
	'postgres://postgres:VlpCartel111@localhost:5432/workoutlog', {
		dialect: 'postgres'
	})
const pg = require('pg')

pg.defaults.ssl = true
pg.connect(process.env.DATABASE_URL, function(err, client, done){
	console.log(err)
	client.query('SELECT*FROM users', function(err, result){
		done()
		if(err) return console.error(err)
			console.log(result)
	})
})

sequelize.authenticate().then(
	function(){
		console.log('connected to workoutlog postgres db')
	},
	function(err){
		console.log(err)
	}
)
const User = sequelize.import('./Models/user.js')
const definition = sequelize.import('./Models/definition.js')
const Log = sequelize.import('./Models/log.js')

module.exports = sequelize