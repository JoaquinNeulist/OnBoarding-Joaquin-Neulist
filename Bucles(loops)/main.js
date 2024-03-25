//Loops exercises
// Low difficulty


// Clase del 22/03

//Tipos de bucles:
// for => incrementa hasta que se cumpla la condicion
//let array = [10,20,30,40,50]
/*
for (let index = 0; index < array.length-2; index++) {
    console.log ( "Iteracion del bucle: "+index)  
    console.log ( "Valor del array en el index: "+array[index])  
    console.log ( "--------------")  // iteracion, valor, ---; iteracion, .....
}
*/
/*
console.log(array.length)
console.log(array)
let array2 = []

for (let elemento of array) {
    elemento += 10
    console.log(elemento)
    array2.push(elemento)
}
 console.log(array2)
 */
/*
let mentor = {
    nombre : "Guille",
    apellido : "Cornetti",
    edad : 34
}
for (const key in mentor) {
    if (Object.hasOwnProperty.call(mentor, key)) {
        const element = mentor[key];
        console.log(key)
        
    }
}
*/
let array = []
for (let index = 0; index < 5; index++) {
    array[index]=parseInt(prompt("ingrese un numero"))
    
}
// while => True
/*
let booleano = !confirm("Esta seguro?")
while (booleano) {
    console.log("hola")
    booleano = !confirm("Quiere terminar")
}
*/
/*
let contador = 0
while (contador < 10) {
    console.log(contador)
    contador++
}
*/

//let numero = parseInt(prompt("Ingrese un numero entre el 1 y el 3"))

//console.log(numero)

//while((numero <1 || numero >3)&& numero != NaN){
//    numero = parseInt(prompt("Ingrese un numero entre el 1 y el 3"))
//}
//do {
//    numero = parseInt(prompt("Ingrese un numero entre el 1 y el 3"))
//} while (numero!=1 || numero !=2||numero!=3);
//console.log(numero)