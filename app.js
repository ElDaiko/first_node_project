const { crearArchivo } = require('./Helpers/multiplicar')
require('colors')
const argv = require('./config/yargs')

console.clear(); //Limpiar consola

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
