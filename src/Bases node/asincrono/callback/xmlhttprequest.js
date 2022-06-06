"use strict"
//importo el paquete de npm, para poder usarlo en este archivo

// XMLHttpRequest = clase creada por microsoft, para hacer peticiones HTTP usando
// verbos HTTP como GET, POST, PUT, PATCH, DELETE, etc. Eventualmente JQuery
// lo globaliza y hoy en dìa, es una clase nativa del browser para javascript

// ¿còmo importar paquetes? -> commonJs y es modules
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

//url a la que hay que hacer la peticion
let url = "https://jsonplaceholder.typicode.com/users"


//declaramos funcion para traer data. Le pasamos la url y un callback como params
function getData(url, callback) {

    //crear un objeto llamado xhttp, a partir de la clase XMLHttpRequest
    let xhttp = new XMLHttpRequest()

    //abrimos una peticion con el metodo http de tipo GET, la ruta e indicamos si es una request
    //   asincrona con true
    xhttp.open('GET', url, true)

    //Creamos la estructura de la peticion
    xhttp.onreadystatechange = () => {

        //si la respuesta ya esta lista
        if (xhttp.readyState === 4) {
            //si la respuesta es satisfactoria = 'Ok'
            if (xhttp.status === 200) {
                //console.log(xhttp.responseText);
                // ejecutamos el callback que habiamos recibido como param y le pasamos el error, en 
                // este caso nulo y la respuesta
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                //si la respuesta no es satisfactoria, creo un nuevo error
                let error = new Error('Error: ' + url)
                //ejecutamos el callback que habiamos recibido como param y le pasamos el error, en este caso si hay y la respuesta quedò nula
                return callback(error, null)
            }
        }
    }
    //por ùltimo, enviamos la peticiòn
    xhttp.send()

}

getData(url, (error, data) => {

    if (error) return console.error(error)
    console.log(data)

    return getData(url + "/1", (error2, data2) => {
        if (error2) return console.error(error2)
        console.log('Datos del usuario 1, ', data2)

        return getData(url + "/2", (error3, data3) => {
            if (error3) return console.error(error3)
            console.log('Datos del usuario 2, ', data3)
            
            //Desafio cumplido
            return getData(url + "/3", (error4, data4) => {
                if (error4) return console.error(error4)
                console.log('Nombre del usuario 3: ', data4.name)
                
                return getData(url + "/4", (error5, data5) => {
                    if (error5) return console.error(error5)
                    console.log('Nombre del usuario 4: ', data5.name)
                    
                    return getData(url + "/5", (error6, data6) => {
                        if (error6) return console.error(error6)
                        console.log('Nombre del usuario 5: ', data6.name)
            
                    })
                })
            })
        })
    })

})

//Desafìo:
//Imprimir los nombres de los usuarios 3, 4 y 5 de la data que solicitan en getData()
