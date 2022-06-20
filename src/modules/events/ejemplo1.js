'use strict'

const EventEmitter = require("events")
const emitter = new EventEmitter()

emitter.on("Saludar", (args)=>{
    console.log("Hola " + args.nombre+ " !");
})

emitter.emit("Saludar",{
    edad:20,
    nombre: "Enrique"
})