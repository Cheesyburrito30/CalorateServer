const router = require('express').Router()
const sequelize = require('../db.js')
const User = sequelize.import('../Models/user.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/', function(req,res){
	let username= req.body.user.username
	let pass = req.body.user.password
	let startWeight = req.body.user.startWeight
	let goalWeight = req.body.user.goalWeight
	let userGender =req.body.user.gender
	let email = req.body.user.email
	let userAge = req.body.user.age
	let height = req.body.user.height
	//Need to create User object and use sequelize to put it into the DB
	User.create({
		username: username,
		passwordhash: bcrypt.hashSync(pass,10),
		email: email,
		age: userAge,
		height: height,
		startweight: startWeight,
		goalweight: goalWeight,
		gender: userGender
	}).then(
	//Sequelize is going to return the object it created from DB
		function createSuccess(user){
			let token = jwt.sign({id:user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
			res.json({
				user: user,
				message: 'create',
				sessionToken: token
			})
		},
		function createError(err) {
			res.status(500).send(message)
		}
	)

})
module.exports=router