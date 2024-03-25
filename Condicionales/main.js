//Conditional Excersises
// Low difficulty
//1:
/*
let num1 = 5
let num2 = 4
if(num1 > num2){
    console.log(num1)
}else{
    console.log(num2)
}
*/
//2
/*
if(num1 > num2){
    console.log(num2)
}else if(num1 < num2){
    console.log(num1)
}else{
    console.log("The numbers are equal")
}
//3:
if(num1 == num2){
    console.log("The numbers are equal")
}else{
    console.log("The numbers are different")
}
*/
//4
/*
let date1 = "2023-2-5"
let date2 = "2023-7-5"
if (date1>date2) {
    console.log("The date " + date1 + " is greater than the date " + date2)
}else if (date2>date1){
    console.log("The date " + date2 + " is greater than the date " + date1)
}else{
    
    console.log("The dates are the same")
}
*/
//6:
/*
let number1 = 10
let number2 = 11
let number3 = 10
if (number1>number2, number1>number3){
    console.log("The number "+number1+" is the largest")
}else if(number2>number1, number2>number3){
    console.log("The number "+number2+" is the largest")
}else if(number3>number1, number3>number2){
    console.log("The number "+number3+" is the largest")
}
*/
// Medium difficulty 
//1:
/*
let color = prompt("Enter a color (in lowercase)")
switch(color){
    case "red":
        alert("The color of passion")
        break;
    case "blue":
        alert("The color of the sea")
    break;
    case "green":
        alert("The color of nature")
    break;
    default:
    alert("Error: only rgb and LOWERCASE")
    break;
}
*/
//2:
/*
let num1 = parseInt(prompt("Enter a number (1 to 100):"))
let num2 = parseInt(prompt("Enter another number (1 to 100)"))
const add = num1+num2
const subt = num1-num2
const mult = num1*num2
const div = num1/num2
let operation = prompt("What operation do you want to do with the numbers?")
switch(operation){
case 'sum': alert("the sum of "+num1+" + "+num2+" is "+ add)
break;
case 'subtraction': alert("the subtraction of "+num1+" - "+num2+" is "+ subt)
break;
case 'multiplication': alert("the subtraction of "+num1+" * "+num2+" is "+ mult)
break;
case 'division': alert("the subtraction of "+num1+" / "+num2+" is "+ div)
break;
default: alert("operation is not in the list")
break;
} 
*/
//3:
/*
let Person1 = {
    name : "Joaco",
    height : 179.2,
    age : 19    
}    
let Person2 = {
    name : "Andy",
    height : 176.4,
    age : 20
}
if(Person2.height>Person1.height){
    console.log("The taller person is "+Person2.name+" with a height of "+Person2.height)
}else if(Person2.height<Person1.height){
    console.log("The taller person is "+Person1.name+" with a height of "+Person1.height)
}else{
    console.log("Both people measure the same")
}
if(Person2.age>Person1.age){
    console.log("The oldest person is "+Person2.name+" with a age of "+Person2.age)
}else if(Person2.age<Person1.age){
    console.log("The oldest person is "+Person1.name+" with a age of "+Person1.age)
}else{
    console.log("Both people are the same age")
}
*/
//4:
//Uso de logica (AND) para colocar todo dentro de una unica condicion
/*
let name = prompt("Enter your name:")
let age = parseInt(prompt("Enter your age"))
let height = parseFloat(prompt("how tall are you?"))
let vision = parseInt(prompt("On a scale of 1 to 10 how good is your vision?"))

if (age >= 18 && height >=110 && vision>=8) {
    console.log("Yor are qualified to drive")
}else{ console.log("You are not qulified to drive")}
*/
//5:
/*
let age = parseInt(prompt("Enter your age:"))
if (0 <= age&&age <= 12) {
    alert("You are a infant")
} else {if(13 <= age&&age <=18)
   { alert("You are a adolescent")
}else {if(19 <= age&&age <=45){
 alert("You are a older young")
}else {if(100 > age&&age > 45){
    alert("You are elderly")
}else{
    alert("Is he really that old? "+age)
}
}
}
}
*/
//6:
/*
let number = parseInt(prompt("Enter a number from 1 to 3:"))
if (number>=1&&number<=3) {
    alert("The number entered is "+number)
    alert("Twice the number entered is "+2*number)
    alert("Three times the number entered is "+3*number)
} else {
    alert("That value is not allowed")
}
*/
// High difficulty
let Cname = prompt("Enter your name:")
let Vip = confirm("Do you have a VIP pass?")
let ticket = confirm("Do you have a ticket?")
if (Cname == "Joaquin" || Vip == true) {
    alert("Welcome")
} else if (ticket == true) {
    let use = confirm("Do you want to use it?")
    if (use == true) {
      alert("Welcome")
    } else {
        alert("Goodbye soldier")
    }
}else{ 
    let buy = confirm("Do you want to buy?")
    if (buy==true) {
       let money = parseInt(prompt("How much money do you have available?"))
    if (money >= 1000) {
        alert("Succesful sale, Welcome")
    } else {
        alert("Card denied")
    }
    }else{
        alert("Goodbye")
    }
}

