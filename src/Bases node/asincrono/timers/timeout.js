"use strict"

//Este timer ejecuta algo despues de n milisegundos

const holaAsincrono = () => console.log('Hola, asincrono');

//Funcion de orden mayor
setTimeout(()=>{
    console.log('Hola asincrono callback');
}, 3000);