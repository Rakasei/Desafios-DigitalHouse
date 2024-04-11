const express = require('express');
const path = require('path');


const indexRouter = require('./routes/index');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const actorsRoutes = require('./routes/actorsRoutes');
const adminRoutes  = require("./routes/adminRoutes")
const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use(actorsRoutes);
app.use(adminRoutes);

app.listen('3001', () => {
    console.log( 'Servidor corriendo en el puerto 3001'); 
    console.log('\x1b[36m%s\x1b[0m','http://localhost:3001/'); 
  });
  
