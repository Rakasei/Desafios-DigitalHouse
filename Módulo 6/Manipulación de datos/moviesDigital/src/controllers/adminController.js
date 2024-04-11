const db = require("../database/models");

module.exports = {
  render: (req, res) => {
    db.Genre.findAll()
      .then(genres => {
        res.render("createMovie", { title: "Crear película", genres });
      })
      .catch(err => {
        res.send(err.message);
      });
  },
  
  create: (req, res) => {
    const { title, release_date, rating, awards, length, genre } = req.body;
    db.Movie.create({
      title,
      release_date,
      rating,
      awards,
      length,
      genreId: genre
    })
      .then((movie) => {
        res.redirect(`/movies/detail/${movie.id}`);
      })
      .catch((err) => {
        res.send(err.message);
      });
  }
};