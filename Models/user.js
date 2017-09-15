//User model created using sequelize
//talks to the table user
module.exports = function(sequelize, DataTypes){
	return sequelize.define('user', {
		username:DataTypes.STRING,
		passwordhash:DataTypes.STRING,
		email:DataTypes.STRING,
		age:DataTypes.INTEGER,
		height:DataTypes.INTEGER,
		startweight:DataTypes.INTEGER,
		BMI:DataTypes.INTEGER,
		REE:DataTypes.INTEGER,
		goalweight:DataTypes.INTEGER,
		gender:DataTypes.STRING
	},{
	})
}