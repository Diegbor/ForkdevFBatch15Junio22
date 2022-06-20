'use strict'

const axios = require('axios')
const url = 'http://localhost:3000/pokemones'

axios
    .get(url)
    .then((response)=>{
        console.log('Respuesta',response.data);
    })
    .catch((error)=>{
        console.log('Error',error);
    })

axios
    .post(url,{
        nombre: "Treecko",
        color: "Verde"
    })
    .then((response)=>{
        console.log('Respuesta',response.data);
    })
    .catch((error)=>{
        console.log('Error',error.response.data);
    })

axios
    .put(url,{
        id : 2,
        nombre: "Pichu",
        color: "Amarillo"
    })
    .then((response)=>{
        console.log('Respuesta',response.data);
    })
    .catch((error)=>{
        console.log('Error',error.response.data);
    })