'use strict';
const momento = require('moment');

function userTest(req, res) {
    let ahora= momento().format('LTS');
    return res.status(200).send({
        hora_actual:ahora,
        mensaje: 'accedimos desde el control del usuario'
    });
}

module.exports= {
    userTest
}