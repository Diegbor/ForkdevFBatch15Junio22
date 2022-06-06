'use sctrict'

console.log('1')
setTimeout(() => {
    return console.log('2')
}, 2000)

for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log('Fin');