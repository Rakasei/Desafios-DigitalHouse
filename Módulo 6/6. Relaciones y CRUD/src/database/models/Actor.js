const { underscoredIf } = require("sequelize/lib/utils");

module.exports = (sequelize, DataTypes) => {
  const alias = "Actor";
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING
    },
    rating : {
      type: DataTypes.DECIMAL(3, 1)
    },
    favorite_movie_id: {
      type: DataTypes.INTEGER,
    }
  };

  const config = {
    timestamps: true,
    tableName: "actors",
    underscored: true
  };

  const Actor = sequelize.define(alias, cols, config);
  Actor.associate = (models) => {
    Actor.belongsToMany(models.Movie, {
      through: 'actor_movie', 
      as: 'movies', 
      foreignKey: 'actor_id', 
      otherKey: 'movie_id' 
    }),
    Actor.belongsTo(models.Movie, {
      as: 'favorite_movie',
      foreignKey: 'favorite_movie_id'
    })
  };
  return Actor;
};
