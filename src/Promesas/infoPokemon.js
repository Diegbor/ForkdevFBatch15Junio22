
const pokemones = require('../InformacionFake/pokemones.json')

pokemones.forEach(pokemon => {
    //Destructuring
    const {nombre, habilidades: {habilidad2}} = pokemon
    const arreglo = pokemon.habilidades.cosas
    console.log(`Nombre: ${nombre} => Habilidad oculta: ${habilidad2} 
    Arreglo: ${arreglo}`);
})