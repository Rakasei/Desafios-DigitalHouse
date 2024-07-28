
const db = require('../../database/models');

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


module.exports = {
    list: (req, res) => {
        db.Movie.findAll({
            include: ['genre']
        })
        .then(movies => {
           
            res.json({
                meta: {
                    status: 200,
                    total: movies.length,
                    url: 'api/movies'
                },
                data: movies
            });
        })
        .catch(error => {
            console.error("Error en list:", error);
            res.status(500).send(error);
        });
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id, {
            include: ['genre']
        })
        .then(movie => {
            console.log("Detalle de película:", movie);
            res.json({
                meta: {
                    status: 200,
                    total: 1,
                    url: `/api/movie/${req.params.id}`
                },
                data: movie
            });
        })
        .catch(error => {
            console.error("Error en detail:", error); 
            res.status(500).send(error); 
        });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            include: ['genre'],
            where: {
                rating: {[db.Sequelize.Op.gte] : req.params.rating}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
        .then(movie => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: movie.length,
                    url: 'api/movies/recomended/:rating'
                },
                data: movie
            }
                res.json(respuesta);
        })
        .catch(error => console.log(error))
    },
    create: (req,res) => {
        
        db.Movie.create(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/movies/create'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/movies/create'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    update: (req,res) => {
        let movieId = req.params.id;
        db.Movie.update(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            },
            {
                where: {id: movieId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/movies/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/movies/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    destroy: (req, res) => {
        let movieId = req.params.id;
   
        db.Movie.destroy({
            where: {id: movieId}, 
            force: true})
        .then(confirm => {
            let respuesta;
            
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/movies/delete/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/movies/destroy/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    }
 }
