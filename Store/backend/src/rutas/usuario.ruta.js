'use strict';
const usercontrol = require('../controlador/usuario.control');

const express = require('express');
const api = express.Router();

api.get('/usertest', usercontrol.userTest);

module.exports = api;