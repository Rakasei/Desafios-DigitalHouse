const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const indexRouter = require('./routes/index');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const actorsRoutes = require('./routes/actorsRoutes')
const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use(actorsRoutes)

app.listen('3001', () => console.log('Servidor corriendo en http://localhost:3001'));
