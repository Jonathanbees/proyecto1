'use strict'
//variables y constantes del servicio: se invocan las librerías instaladas
const express = require('express'); //una serie de funciones, un paquete completo
const bodyparser = require('body-parser');
const morgan = require('morgan'); //morgan, cuando una petición se ejecute, muestre si está bien o mal

const app=express();

//2. rutas del servicio
const usuario_ruta=require('./rutas/usuario.ruta');

//3. middleware o puente entre componentes: Definición de middleware=funciona como una capa de traducción oculta para permitir la comunicación y la administración de datos en aplicaciones distribuidas.
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());
app.use(morgan('dev'));

// 4. Cabeceras de Peticion.
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})
//5. exportamos rutas del servicio
app.use('/api',usuario_ruta);       //se va a repetir por cada ruta

//6. exportamos modulo de servicios
module.exports = app;


