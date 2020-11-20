// REQUIRE
const colors =  require('colors');

const argv = require('./config/yargs').argv;
let comando =  argv._[0];

const porHacer =  require('./por-hacer/por-hacer');

switch(comando){

    case 'crear':
       let tarea = porHacer.crear(argv.descripcion)
       console.log(tarea)
    break;

    case 'listar':
        let tareas = porHacer.getListado();

        for(let tarea of tareas){
            console.log('=========POR HACER=========='.green)
            console.log(tarea.descripcion)
            console.log(`Esatdo: ${tarea.completado}`)
            console.log('============================'.green)
        }
    break;

    case 'actualizar':
        let actualizado =  porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(actualizado)
    break;

    case 'borrar':
        let borrado =  porHacer.borrar(argv.descripcion)
        console.log(borrado)
    break;

    default:
        console.log('Comando no reconocido');

}