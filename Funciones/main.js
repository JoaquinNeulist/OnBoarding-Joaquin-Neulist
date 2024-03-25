// Low difficulty
/*
let add = function(number1, number2) {
    console.log(number1*number2)
    return 
}
add(100, 20)
*/
// Medium difficulty
//1:
/*
let greet = function(name) {
    console.log("Welcome my sir lord "+name)
    return
}
greet("Joaquin")
*/
//2:
/*
let production = function(N1, N2) {
    console.log("The product of " +N1+" * "+N2+" is "+N1*N2)
    return
}
production(5, 24)
*/
//3:
/*
function area(height, base) {
    console.log("The area is " +height*base)
    return
}
console.log(area(6, 8))
*/
//4:
/*
function Perimeter(side1, side2, side3) {
    console.log("The perimeter is "+(side1+side2+side3))
}
console.log(Perimeter(4,4,5))
*/
//5:
/*
function ex5(price, quantify){
    if (quantify>=10 && quantify<20) {
        price=price-(1/10*price)
    }else if(quantify>=20){
        price=price-(1/5*price)
    }
    console.log("The total price is " + price)
}
console.log(ex5(150, 10))
*/
//6:
/*
function isAnAdult(age) {
     age = parseInt(prompt("Enter your age"))
    if (age>=18) {
        alert("Your are an adult")
    } else if (age<18){
        alert("You are not an adult")
    }   
}
isAnAdult()
*/
// High difficulty
//1:
/*
function Taxes(income) {
    if (income<=10000) {
        income=income*1/10
    } else if(income>10000 && income<=20000) {
        income=15/100*income
    }else if(income>20000) {
        income=1/5*income
    }
    console.log("The total tax you have to pay is "+income)
}
Taxes(10000)
*/
//2:
/*
function wDay(day) {
    day = parseInt(prompt("What day is? (Mon=1, Tue=2, Wen=3 Thu=4, Fri=5, Sat=6, Sun=7)"))
    switch (day) {
        case day=1:
            alert("It is a business day")
            break;
        case day=2:
            alert("It is a business day")
            break;
        case day=3:
            alert("It is a business day")
            break;
        case day=4:
            alert("It is a business day")
            break;
        case day=5:
            alert("It is a business day")
            break;
        case day=6:
            alert("It's the Weekend")
        break;
        case day=7:
            alert("It's the Weekend")
        break;
        default:
            alert("Error: enter a number that is on the prompt")
            break;
    }
}
wDay()
*/
//3:
/*
function ex2(fName, lName, age, data) {
    fName = prompt("Enter your First name")
    if(!fName.trim()){
        console.log("error: the name cannot be empty")
    }else{
        lName=prompt("Enter your Last name")
        if (!lName.trim()) {
            console.log("error: the name cannot be empty")
        } else {
            age = prompt("Enter your age")
            if (!age.trim()) {
                console.log("error: the age cannot be empty")
            } else {
                data = {
                    firstName : fName,
                    lastName : lName,
                    Datage: age,
                }
                console.log(data.firstName)
                console.log(data.lastName)
                console.log(data.Datage)
            }
        }
    }
}
ex2()
*/
//4:
let Name = function(name) {
    name = prompt("Enter your name")
    alert("Hello, my name is "+name)
}
Name()
let calculateAge = function (currentYear, Birthyear) {
    Birthyear = parseInt(prompt("Enter the year you were born"))
    currentYear = parseInt(prompt("Enter the current year"))
    alert("Your age is "+(currentYear-Birthyear))
}
calculateAge()
function functionsJoined(Name, calculateAge) {
    alert(Name + calculateAge)
}
functionsJoined()


// Funcion 
/*
function saludo() {
    console.log("Hola mundo!")
}  //<-Declaracion

saludo()

function suma(){
    return "5" * 5;
} // si es + concatena

console.log(suma()) // resultado
console.log(suma) // lo que hay en la funcion

*/
// Declaracion de Function
// Parametros
/*
function sumarDos(num1, num2){
    console.log (" Primer parametro "+num1);
    console.log (" Segundo parametro "+num2);
    console.log (num1+num2);
    return
}
// Llamado a la funcion
// Argumento
sumarDos(7, 8)
*/

// Expresion de funcion // Funcion anonima
/*
let sumarDos = function (num1, num2){ //dentro de una variable guardar una funcion
return num1 + num2
}
console.log(sumarDos(2, 4))
*/
/*
let sumarDos = function(a , b){
    let resultado = a + b
    return "Hola Mundo!"
}
let resultado = sumarDos( 2 , 7 )
console.log(resultado) // retorna Hola Mundo!
*/
/*
let numero = "25"
let decimal = "25.58161"
console.log(typeof(parseInt(numero))) // con parseint transformamos un entero (spring a number)
console.log(parseInt(decimal).toFixed(1)) // con parseint envia solo la parte entera
console.log(parseFloat(decimal)) 
*/

// Metodos de String
// let nombre = "  Jota  "
// console.log(nombre.trim()) // trim quita los espacios
// console.log(nombre.toLowerCase()) // tlw todo minuscula
// console.log(nombre.toUpperCase()) // tlw todo mayuscula

