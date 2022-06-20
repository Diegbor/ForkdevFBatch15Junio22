'use strict';

let x = 10

//1. Definir la estructura de la promesa
const promesa = new Promise((resolve, reject) => {
    if(x===10) return resolve("Hola")
    return reject("La variable x no es igual a 10")
})

//2. Trabajar/recibir una respuesta
promesa
.then((response)=>{ 
        console.log(response);
        return "blablabla..."
    })
    .then((data)=>{
        console.log(data);
        return "Adios"
    })
    .then((data2)=>{
        console.log(data2);
    })
    .then(()=>{
        console.log("Yo no recibo nada y está bien...");
    })
    .then(()=>{
        console.log("Yo tampoco y me duele...");
    })
    .catch((error)=>{
        return console.log(error);
    })