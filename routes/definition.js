var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../Models/user.js');
var Definition = sequelize.import('../Models/definition.js');

router.post('/', function(req, res) {
	//variables
	    var description = req.body.definition.desc;
        var logType= req.body.definition.type;
        var owner = req.user.id;

	//methods
	Definition
	//objects must match the model 
	.create({ 
	   	description: description,
	   	logtype: logType,
	   	owner: owner
	   })

		.then(
				function createSuccess(definition) {
				//send a response as json
		   		res.json({
		   			definition: definition
		   		});
		   	}, 
		   function createError(err) {
		       res.send(500, err.message);
		   }

		);
});

router.get('/', function(req, res) {
	//user variable
	var userid = req.user.id;
	Definition
	//findAll by owner method
	.findAll({
		where: { owner: userid }
	})
	.then(
		//success
		function findAllSuccess(data) {
			// console.log(data);
			res.json(data);
		},
		//failure
		function findAllError(err) {
			res.send(500, err.message);
		}
	);
});


module.exports = router;