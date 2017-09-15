module.exports = function(sequelize, DataTypes) {
	return sequelize.define('log', {
		owner:DataTypes.INTEGER,
		name: DataTypes.STRING,
		type: DataTypes.STRING,
		calories: DataTypes.INTEGER,
		protein: DataTypes.INTEGER,
		fat: DataTypes.INTEGER,
		carbs: DataTypes.INTEGER,
		servings: DataTypes.INTEGER
	},{
	})
}