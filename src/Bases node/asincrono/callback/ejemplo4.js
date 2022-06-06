'use strict'

function hola(nombre, callback) {
    return setTimeout(() => {
        return callback(nombre)
    }, 1500);    
}

const hablar = (mensaje, callback) => {
    return setTimeout(() => {callback(mensaje)}, 1100);
}

function adios(nombre, callback) {
    return setTimeout(() => {
        return callback(nombre)
    }, 1000);    
}



hola('Boris', (nombre)=>{
    console.log('Hola',nombre)
    return hablar("blablabla...1",(mensaje)=>{
        console.log(mensaje)
        return adios('Boris', (nombre)=>console.log('Adios',nombre))
    })
})

console.log('Iniciando proceso');