//Loops exercises
// Low difficulty
//1:
/*
let num = parseInt(prompt("Enter a number between 1 and 100:"))
if(num<1||num>100||isNaN(num)){
    alert("Error: Wrong number")
}else{
    console.log("the numbers between "+num+" and 0 are: ")
    for (let i = num; i>=0 ; i--) {
        console.log(i);
}
}
*/
//2:
/*
let num = parseInt(prompt("Enter a number between 1 and 10:"))
if (num<1||num>10||isNaN(num)) {
    alert("Error: Wrong number")
} else {
    console.log("The first 10 multiples are: ")
    for (let i =1; i<=10; i++) {
        console.log(num+"*"+i+"="+num*i);
    }
}
*/
//3:
/*
let num = parseInt(prompt("Enter a number"))
let numInto = 0
while (num !==0) {
    if(isNaN(num)){
        alert("Error: invalid number")
    }else{
        numInto += num
    }
    num = parseInt(prompt("Enter another number or 0 to end"))
}
console.log("The result of the sum of the numbers entered is "+numInto)
*/
//4:
/*
numInto = 0
do {
    num = parseInt(prompt("enter a number or 0 to end"))
    if (isNaN(num)) {
        alert("Error: invalid number")
    } else {
        
        numInto += num
    }
} while (num !== 0);
console.log("The result of the sum of the numbers entered is "+numInto)
*/
//5:
/*
let Person = {
     name : "Joaquin",
    lastName: "Neulist",
    origin: "Argentina",
    studies: "System engineer",
    age: 19,
    University: "UTN"
}
for (const key in Person) {
    if (Object.hasOwnProperty.call(Person, key)) {
        console.log(key);
    }
}
*/
//6:
/*
let person = {
    name : "Joaquin",
    lastName: "Neulist",
    origin: "Argentina",
    studies: "Systems engineering",
    age: 19,
    University: "UTN"
}
for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        console.log(person[key]);
    }
}
*/
// Medium Difficulty
//1:
/*
let secretNum = 4
let attemps = 1
while (true) { //Coloco condicion true y que rompa y salga del bucle al acertar el numero
    let num = parseInt(prompt("Enter a number"))
    if(isNaN(num)){
        alert("Error: invalid number")
    }else if (secretNum < num) {
        console.log("The number entered is greater than the secret")
    } else if (secretNum > num) {
        console.log("The number entered is less than the secret")       
    } else if (num == secretNum) {
        alert("You got it right! The secret number was "+secretNum+" and you made "+attemps+" attempts")
        break;
    }
    attemps++ //attemps abajo ya que sino coloca que acertaste con 2 intentos al primer intento
}    
*/
//2:
/*
numDiv = parseInt(prompt("Enter a number that you want to know hes divisors"))
for (let  i = numDiv;  i>=1; i--) { //See utiliza for para iterar desde el numero ingresado hasta 1 (por eso i--)
    if (numDiv % i == 0) { //Se verifica si el i es un divisor del numero y % si el resto es 0 significa que i es un divisor y sale a la consola
        console.log("one of the divisors of "+numDiv+" is "+i);
    }
}
*/
//3:
/*
function Ringbell() {
    return "Ding Dong"
}
let coma = "";
let RingRage = parseInt(prompt("Enter a number"))
for (let i = 0; i < RingRage; i++){
    coma += Ringbell();
    if (i != RingRage - 1) {
        coma +=", "
    } else if(RingRage > 8) {
        alert("CORREEEEEEEEEEEEE")
    }
}
console.log(coma)
*/
//4:
/*
const dateLimit = "1998-2-4" 
//lo que creo igual que esta mal del ejercicio es que esta puesto en YYYY/DD/MM cuando
//deberia ser YYYY/MM/DD
const dates =["1984-18-2","1998-3-2","1973-15-7", "2024-31-10", "2018-1-9"]
for (let i = 0; i < dates.length; i++) { //Registra o recorre el array y muestra las fechas mayores o iguales 
    if (dates[i]>= dateLimit) //verificacio si es mayor o igual a dateLimit 
    {
        console.log(dates[i])
    }
}
*/
//5:
/*
let array = ["red", "green", "blue", "violet", "brown", "black", "white"]
for (let value of array) {
 console.log(value)   
}
*/
//6:
/*
function colores(array) {
    for (let value of array) {
     console.log(value)   
    }
}
const array = ["red", "green", "blue", "violet", "brown", "black", "white"]
colores(array);
*/
//7:
/*
let num = [5, 7, 8, 12, 24]
for (let numbers of num) {
    console.log("the number is "+numbers+" and its double is "+numbers*2)
}
*/
//8:
/*
let arrayFamily = [
    { name: "Margarita", lastName: "Escamilla", member: "grandma",  age: 68 },
    { name: "Maria", lastName: "Escamilla", member: "mother",  age: 44 },
    { name: "Franco", lastName: "Lopez", member: "son", age: 15 },
    { name: "Luis", lastName: "Lopez", member: "father", age: 42 }
];
for (const elements of arrayFamily) {
    console.log("Hello, I am "+elements.name+" "+elements.lastName+" ("+elements.member+") and I am "+elements.age+" years old.")
}
*/
// High difficulty
//1:
/*
let number1
let evenNum = 0
let oddNum = 0
do {
    number1 = parseInt(prompt("Enter a number"))
    if (number1!== 0) {
        if (number1 % 2 ===0) {
            evenNum += number1;
        }else{
            oddNum += number1
        }
    }
} while (number1 !== 0);
console.log("sum of even: "+evenNum)
console.log("sum of odd: "+oddNum)
*/
//2:
/*
let arrayN = [10, 22, 12, 3, 5, 4, 7, 24, 2, 11]
let max = arrayN[0]
for (let i = 0; i < arrayN.length; i++) {
    if (arrayN[i] > max) {
        max = arrayN[i]
    };   
}
alert("The largest number in the array is "+max)
*/