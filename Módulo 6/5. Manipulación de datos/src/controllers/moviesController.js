const db = require("../database/models")
const {Op} = db.Sequelize

module.exports = {
  list: (req,res) => {

    db.Movie.findAll()
    .then((movies) => {

      res.render("moviesList",{
        movies
      })

    })
    .catch((err) => {
      res.send(err.message)
    }) 
  },

  detail: (req,res) => {
    const {id} = req.params
    db.Movie.findByPk(id)
    .then((movie) => {
      res.render("moviesDetail", {
        movie
      })
    })
    .catch((err) => {
      res.send(err.message)
    }) 
  },

  new: (req,res) => {
    db.Movie.findAll({
      order: [
        ["release_date","desc"]
      ]
    })
    .then((movies) => {
      res.render("newestMovies", {
        movies
      })
    })
    .catch((err) => {
      res.send(err.message)
    }) 
  },

  recommended: (req,res) => {
    db.Movie.findAll({
      where: {
        [Op.and] : [
          {
            rating: {
              [Op.gte] : 8
            }
          },
          {
            awards: {
              [Op.gte] : 2
            }
          }
        ]
      },
      order:[
        ["release_date","desc"],
        ["rating","desc"],
        ["title","desc"]
      ]
    })
    .then((movies) => {
      res.render("recommendedMovies",{ movies })
    })
    .catch((err) => {
      res.send(err.message)
    }) 
  },
  //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add: function (req, res) {
        res.render("moviesAdd")  
    },
    create: function (req, res) {
      db.Movie.create({
          title : req.body.title,
          rating : req.body.rating,
          awards : req.body.awards,
          release_date : req.body.release_date,
          length : req.body.length
      })
      .then(() => {
          res.redirect("/movies");
      })
      .catch((err) => {
          console.error("Error al crear la película:", err);
          res.status(500).send("Error al crear la película");
      });
  },
    edit: function(req, res) {
      db.Movie.findByPk(req.params.id)
        .then(movie => res.render("moviesEdit", {movie}))
    },
    update: function (req,res) {
      const { id } = req.params;
      const { title, rating, awards, release_date, length } = req.body;
      db.Movie.update(
        { title, rating, awards, release_date, length },
        { where: { id: id } }
    )
    .then(() => {
        res.redirect("/movies");
    })},
    delete: function (req, res) {
        db.Movie.findByPk(req.params.id)
          .then(movie => res.render("MoviesDelete", {movie}))
    },
    destroy: function (req, res) {
        db.Movie.destroy({
          where : {id : req.params.id}
        })
        .then(() => {
          res.redirect("/movies");
      })
      .catch((err) => {
          console.error("Error al eliminar la película:", err);
      });
    }

}

