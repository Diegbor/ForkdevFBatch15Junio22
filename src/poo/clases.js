
//En las clases se habla en general
//Las clases por convencion empiezan con mayuscula
class Animal {
    constructor(){
        this.especie = "Humano",
        this.color = "Diverso",
        this.sonido = "Insultos"
    }
    emitirSonido(){
        return console.log("Estoy emitiendo sonido: ",this.sonido);
    }
}

//En objetos se habla en específico
const diego = new Animal()
console.log(diego);
console.log(diego.color);
console.log(diego.especie);
console.log(diego.sonido);

diego.emitirSonido()