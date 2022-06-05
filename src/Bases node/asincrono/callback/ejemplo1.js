'use strict'

const suma = (a,b) => a + b
const resta = (a,b) => a - b
function multiplicar (a,b) {
    return a * b
}
const dividir = (a,b) => a / b

const calculadora = (a,b,operacion) => operacion(a,b)

console.log(calculadora(3,7,suma))
console.log(calculadora(13,7,resta))
console.log(calculadora(5,10,multiplicar))
console.log(calculadora(10,9,dividir))