'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
        .then(() => {
            console.log("Conexión a la base de datos establecida satisfactoriamente...");
            // creación del servidor
            app.listen(port, () => {
                console.log("Servidor corriendo en la url: localhost:3700");
            });
        })
        .catch(err => console.log(err));