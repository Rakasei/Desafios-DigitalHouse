const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const Movies = db.Movie;
const Actors = db.Actor;


const apiMoviesController = {

    create: function (req, res) {
        Movies
            .create(
                {
                    title: req.body.title,
                    rating: req.body.rating,
                    awards: req.body.awards,
                    release_date: req.body.release_date,
                    length: req.body.length,
                    genre_id: req.body.genre_id
                }
            )
            .then((movie) => {
                return res.json({
                    meta: { status: 201 },
                    data: movie
                })
            })


    }, destroy: async function (req, res) {
        
        let movieId = req.params.id

        const deleted_movie = await Movies.findByPk(movieId)

        if (!deleted_movie) {
            return res.status(404).json({ error: "Película no encontrada en la DB" });
        }

        //Eliminamos manualmente los registros en la tabla intermedia que hacen referencia a la película a eliminar
        const actorMovie = await sequelize.query("DELETE FROM actor_movie WHERE movie_Id = " + movieId , {
           
            type: sequelize.QueryTypes.DELETE

        })

        // También los registros de la columna de películas favoritas de la tabla actores que hacen referencia a la pelicula a eliminar
        const actorFavoriteMovie =  await Actors.update(
            { favorite_movie_id: null },
            { where: { favorite_movie_id: movieId } }
          )

        // Y ahora si eliminamos la pelicula de la base de datos
        const movie = await Movies.destroy({ where: { id: movieId } })

        return res.json({
            meta: { status: 200 },
            data: { deleted_movie }
        })
    }
}

module.exports = apiMoviesController