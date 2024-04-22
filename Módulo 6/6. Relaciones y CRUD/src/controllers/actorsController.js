const db = require("../database/models")
const movie = require("../database/models/movie")
const {Op} = db.Sequelize

module.exports = {
  list:(req,res) => {
      db.Actor.findAll()
      .then( actors => res.render("actorsList", {actors}))
  },

  detail: (req, res) => {
    db.Actor.findByPk(req.params.id, {include: ["movies", 
     "favorite_movie"] }
    )
      .then(actor => {
        res.render("actorsDetail", { actor });
      })
      .catch(error => {
        console.error("Error al obtener el detalle del actor:", error);
        res.status(500).send("Error al obtener el detalle del actor");
      })
    
  },

  add: (req,res) => {
    db.Movie
      .findAll()
        .then(movies => res.render("actorsAdd", {movies}))
  },
  create: (req,res) => {
    db.Actor 
      .create({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        rating : req.body.rating,
        favorite_movie_id : req.body.favorite_movie_id
      })
        .then(() => res.redirect("/actors"))
  },
  delete: (req,res) => {
    db.Actor 
      .findByPk(req.params.id)
        .then(actor => res.render("actorsDelete", {actor}))
  },
  destroy: (req,res) => {
    db.Actor 
      .destroy({where : {id : req.params.id}})
        .then(() => res.redirect("/actors"))
  }
};