const { underscoredIf } = require("sequelize/lib/utils");
const Genre = require("./genre.js"); // Importa el modelo Genre

module.exports = (sequelize, DataTypes) => {
  const alias = "Movie";
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL(3, 1),
    },
    awards: {
      type: DataTypes.INTEGER,
    },
    release_date: {
      type: DataTypes.DATE,
    },
    length: {
      type: DataTypes.INTEGER,
    },
  };

  const config = {
    timestamps: true,
    tableName: "movies",
    underscored: true
  };

  const Movie = sequelize.define(alias, cols, config);
  
  // Define la asociación dentro del método associate
  Movie.associate = (models) => {{
    Movie.belongsTo(models.Genre, {
      as: "genre",
      foreignKey: "genre_id"
    }),
    Movie.belongsToMany(models.Actor, {
      through: 'actor_movie', 
      as: 'actors', 
      foreignKey: 'movie_id', 
      otherKey: 'actor_id' 
    })}

  };

  return Movie;
};
