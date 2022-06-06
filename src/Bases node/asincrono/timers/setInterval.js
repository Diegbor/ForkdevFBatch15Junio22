'use strict'

let cuenta = 0
const incremental = setInterval(() => {
    if(cuenta === 4){return clearInterval(incremental)}
    return console.log(cuenta++)
}, 1000)

