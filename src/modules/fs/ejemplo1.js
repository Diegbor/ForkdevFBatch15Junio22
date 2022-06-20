'use strict'

const fs = require("fs")

const archivos = fs.readdirSync("./")
console.log(archivos);

fs.readdir("./",(error,files)=>{
    if(error) return console.log(error);
    return console.log("Resultado", files);
})
