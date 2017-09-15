let router = require('express').Router()
let sequelize = require('../db.js')
let Log = sequelize.import('../Models/log.js')
let User = sequelize.import('../Models/user.js')
let Definition = sequelize.import('../Models/definition.js')

router.post('/', function(req,res) {
		let name = req.body.log.name
		let type = req.body.log.type
		let cals = req.body.log.calories
		let protein = req.body.log.protein
		let fat = req.body.log.fat
		let carbs = req.body.log.carbs
		let servings = req.body.log.servings
		let user = req.user
	Log
		.create({
			owner: user.id,
			name: name,
			type: type,
			calories: cals,
			protein: protein,
			fat: fat,
			carbs: carbs,
			servings: servings			
		})
		.then(
			function createSuccess(log) {
				res.json(log)
			},
			function createError(err) {
				res.send(500, err.message)
			}
		)
})
router.get('/', function(req, res) {
	let userid = req.user.id
	Log
	.findAll({
		where: { owner: userid }
	})
	.then(
		function findAllSuccess(data) {
			res.json(data)
		},
		function findAllError(err) {
			res.send(500, err.message)
		}
	)
})
//will retrieve one workout specified by the log id
router.get('/:id', function(req, res) {
	let data = req.params.id
	//console.log(data) //testing
	Log
		.findOne({
			where: {id: data}
		}).then(
			function getSuccess(updateData) {
				res.json(updateData)
			},
			function getError(err) {
				res.send(500, err.message)
			}
		)
})
//will return the data from the log that was updated
router.put ('/', function(req, res) {
	let description = req.body.log.desc
	let result = req.body.log.result
	let data = req.body.log.id
	let definition = req.body.log.def
	console.log(req)
	Log
		.update(
		{
			description: description,
			result: result,
			def: definition
		},
		{where: {id:data}}
		).then(
		function updateSuccess(updatedLog){
			res.json(updatedLog)
		},
		function updateError(err){
			res.send(500, err.message)
		}
	)
})
router.delete('/', function(req, res) {
	let data = req.body.log.id
	Log
		.destroy({
			where: {id: data}
		}).then(
			function deleteLogSuccess(data){
				res.send("You removed a log!")
			},
			function deleteLogError(err){
				res.send(500, err.message)
			}
		)
})
module.exports = router;