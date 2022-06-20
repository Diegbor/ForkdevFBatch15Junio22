const express = require('express')
const app = express()
const pokemones = require('../InformacionFake/pokemones.json')
const bodyParser = require('body-parser')
const cors = require('cors')

app.options('*',cors())
app.all('*',function(req,res,next) {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','X-Requested-With, Content-Type,Accept')
    res.header('Access-Control-Allow-Origin','GET, POST, PUT, DELETE, OPTIONS')
    next()
})
//CRUD  C:Create  R:read  U:Update  D:Delete
app.use(bodyParser.json())
app.get('/',function(req,res){
    res.send('Mamá estoy triunfando en el mundo de la programación')
})

app.get('/users',function(req,res){
    const usuarios = ['Diego','Boris','Op']
    res.send(usuarios)
})

// R:read
app.get('/pokemones',function(req,res){
    console.log(pokemones);
    res.send(pokemones)
})

// C:Create
app.post('/pokemones',function(req,res){
    let nuevoPokemon = req.body
    nuevoPokemon.id = pokemones[pokemones.length -1].id +1
    console.log(nuevoPokemon);
    pokemones.push(nuevoPokemon)
    res.send('Se inserto correctamente')
})

app.put('/pokemones',function(req,res){
    const {id, nombre, color} = req.body
    console.log(id);
    let pokemon = pokemones.find(pokemon => pokemon.id === id)
    console.log(pokemon);
    pokemon.nombre = nombre
    pokemon.color = color
    console.log(pokemon);
    res.send('Pokemon actualizado')
})

app.delete('/pokemones',function(req,res){
    pokemones = [] 
    res.send('Se eliminaron todos')
})

app.get('/pokemon/:id',function(req,res){
    const {id} = req.params
    console.log(typeof pokemones[0].id, typeof id);

    //Para convertir un numero a string es con toString()
    let pokemon = pokemones.find(pokemon => pokemon.id.toString() === id)
    console.log(pokemon);
    res.send(pokemon)
})

app.listen(3000)