"use strict"

//Async-await, nos permite trabajar respuestas de promesas
const getData = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => console.log(data))
}

getData()

const showData = async () => {
    const data = await getData()
    console.log(data)
}

showData()