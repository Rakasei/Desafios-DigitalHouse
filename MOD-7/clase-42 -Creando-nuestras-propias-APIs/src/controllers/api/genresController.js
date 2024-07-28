const db = require('../../database/models');
const sequelize = db.sequelize;


const apiGenresController = {
'apiList': (req, res) => {
    db.Genre.findAll()
        .then(genres => {
            res.json({
                meta: {
                    status: 200,
                    total: genres.length,
                    url: "api/genres"
                },
                data: genres
            })
        })
},
'apiDetail': (req, res) => {
    db.Genre.findByPk(req.params.id)
        .then(genre => {
            res.json({
                meta: {
                    status: 200,
                    url: "api/genre/" + req.params.id
                },
                data: genre
            })
        })

}}

module.exports = apiGenresController