const colors = require('colors')
const crearArchivo = async (base = 5, l = false, h) => { //async para crear la promise


    try { //Se hace un trycatch daod a que se uso async


        const fs = require('fs'); //Se importa fs lo cual nos va a ayudar a escribir en un archivo
        let salida, consola = "";

        for (let i = 1; i <= h; i++) {
            consola += `${base} ${'x'.red} ${i} ${'='.green} ${base * i}\n`;
            salida += `${base} 'x' ${i} '=' ${base * i}\n`;
        }


        if (l == true) {
            console.log('========================'.rainbow);
            console.log(`      Tabla del ${base}    `.magenta);
            console.log('========================'.rainbow);
            console.log(consola);
        }


        fs.writeFileSync(`./salida/tablaDel${base}.txt`, salida); //Se pasan los parametros de escritura del archivo
        return `tablaDel${base}`;
        // Primero nombre del doc luego lo que contiene y por ultimo el callback del error (Dado el de no usar Sync)
    } catch (error) {
        throw error;
    }


}

module.exports = {
    crearArchivo
}
