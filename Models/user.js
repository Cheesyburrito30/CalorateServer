//User model created using sequelize
//talks to the table user
module.exports = function(sequelize, DataTypes){
	return sequelize.define('user',{
		username:DataTypes.STRING,
		passwordhash:DataTypes.STRING,
		email:DataTypes.STRING,
		gender:DataTypes.STRING,
		height:DataTypes.INTEGER,
		startWeight:DataTypes.INTEGER,
		goalWeight:DataTypes.INTEGER
	})
}