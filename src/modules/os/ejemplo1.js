const os = require("os")

// console.log(os);

let libre = os.freemem()
let completa = os.totalmem()
console.log(libre);
console.log(completa);