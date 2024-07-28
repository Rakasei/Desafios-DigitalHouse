const express = require('express');
const path = require('path');

const homeRoutes = require('./routes/other/homeRoutes');
const favoriteRoutes = require('./routes/other/favoriteRoutes');
const formularioRoutes = require('./routes/other/formularioRoutes');

const genreApiRoutes = require('./routes/apis/genreApiRoutes');
const movieApiRoutes = require('./routes/apis/movieApiRoutes');
const actorApiRoutes = require('./routes/apis/actorApiRoutes');

const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));


app.use('/', homeRoutes);
app.use('/formulario', formularioRoutes);
app.use('/favoritas', favoriteRoutes);


app.use('/api/genres', genreApiRoutes);
app.use('/api/movies' , movieApiRoutes);
app.use('/api/actors', actorApiRoutes)



app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
