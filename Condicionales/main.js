// Clase 20/03

console.log("hola")

let estaLloviendo 
let tenesGanas 
estaLloviendo = prompt("Ingrese si llueve o no")

if (estaLloviendo == "si") {
    tenesGanas = prompt("Tenes ganas de salir a correr?")
    if(tenesGanas =="si"){
        console.log("salgo a correr")
    }else{
        console.log("No salgo a correr")
    }
}else if(estaLloviendo == "no"){

    console.log("Salgo a correr")
}else{
    console.log("No entiendo")
}
