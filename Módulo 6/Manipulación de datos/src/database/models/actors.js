const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Actor', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: true
    },
    favorite_movie_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  },  {
    timestamps: true,
    tableName: "actors",
    underscored: true
  });
};