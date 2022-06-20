"use strict";

function multiplicar(a, b) {
  let resultado = 0;
  for (let i = 0; i < b; i++) {
    resultado += a;
    console.log(resultado);
  }
  return resultado;
}
const resultado = multiplicar(50, 0);
console.log(resultado);
