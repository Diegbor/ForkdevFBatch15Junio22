"use strict"

const promise = new Promise((resolve,reject)=>{
    const numero = Math.floor(Math.random() * 10)
    const respuesta = {
        mensaje: `El número satisfactorio es: ${numero}`,
        numero: numero
    }
    setTimeout(
        () => numero > 5
        ? resolve(respuesta)
        : reject(new Error('El numero es menor a 5'))
        
    , 2000);
})

//Ejecución de una promesa
// promise.then(laRespuesta=>{
//     console.log(laRespuesta);
// }).catch(error=>{
//     console.log(error);
// })

function suma(datoNumero){
    const numero = Math.floor(Math.random() * 10)
    return datoNumero + numero
}

function tabla(datoNumero){
    const respuesta = []
    for(let i = 1; i <= datoNumero; i++){
        respuesta.push({posicion: i, valor: (datoNumero * i) })
    }
    return respuesta
}

//Promesa encadenada
promise
.then((response)=>{
    console.log('response 1.-',response.mensaje)
    return suma(response.numero)
}).then((response)=>{
    console.log('response 2.-',response)
    return tabla(response)
}).then(numeros =>{
    const datos = numeros.find(numero => numero.posicion===9)
    console.log(`Tu número de la suerte es ${datos.valor}`);
}).catch((error)=>{
    console.log(error)
})