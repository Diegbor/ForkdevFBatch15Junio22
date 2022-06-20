'use strict'

const url = 'http://localhost:3000/pokemones/1'

fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        const nombre = document.getElementById('nombre')
        nombre.innerHTML = data.nombre
    })
    .catch((error)=>console.log(error))