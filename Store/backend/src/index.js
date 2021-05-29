/**
 * Aplicativo de back-end de una tienda
 * autor: @Jonathan Betancur
 * Año: 2021
 *
 * //codigo javascript puro
 * 'use stric'; #que se tiene que usar si o si
 */
'use strict';
// cargar librerias necesarias, primero dotenv para capturar las variables de entorno:
require('dotenv').config();

//constante de servidor
const app = require('./app.js')


const puerto=process.env.PUERTO;     //puerto por donde se despliega el servidor
const url= process.env.URL

//función de encendido de servidor
app.listen(puerto,()=>{
    console.log('servidor encendido');
    console.log('url: '+url+':'+puerto);
});




