'use strict'

const axios = require('axios')
const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

axios.get(url)

.then((response)=>{
    console.log('Respuesta',response.data);
})
.catch((error)=>{
    console.log('Error',error);
})