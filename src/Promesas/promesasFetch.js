const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

fetch(url)
.then((response)=>response.json())
.then((response)=>{
    console.log('respuesta',response);
    let name = document.getElementById('name')
    let tablaP = document.getElementById('tablaP')
    let template = ``

    name.innerHTML = `El nombre del pokemon es: ${response.name}`
    response.abilities.forEach(ability => {
        template += `<tr><td>${ability.ability.name}</td></tr>`
    });

    tablaP.innerHTML = template
})
.catch((error)=>{
    console.log('Algo salió mal',error);
})