const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL, {
		logging: false,
		dialectOptions: { ssl : true }
	})
// const sequelize = new Sequelize('workoutlog', 'postgres', 'VlpCartel111', {
// 		host: 'localhost',
// 		dialect: 'postgres'
// 	})
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