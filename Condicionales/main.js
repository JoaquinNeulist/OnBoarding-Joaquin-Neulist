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
let num1 = prompt("Enter a number (1 to 100):")
let num2 = prompt("Enter another number (1 to 100)")
const sum = num1+num2
const subt = num1-num2
const mult = num1*num2
const div = num1/num2
let operation = prompt("What operation do you want to do with the numbers?")
switch(operation){
case 'sum': alert("the sum of "+num1+" + "+num2+" is "+ sum)
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



// Clase 20/03

/*let estaLloviendo 
estaLloviendo = prompt("Ingrese si llueve o no")

if (estaLloviendo == "si") {
    console.log("No salgo a correr")
}else if(estaLloviendo == "no"){
    let tengoGanas = confirm("tenes ganas de salir a correr?")
    if(tengoGanas){
        console.log("Salgo a correr")
    }else{
        console.log("No salgo a correr")
    }
}else{
    console.log("No entiendo")
}
*/
/*
let planInet = "a"

switch(planInet){
    case "bajo":  console.log("Debe pagar $50");
    break;
    case "medio":  console.log("Debe pagar $75");
    break;
    case "alto":  console.log("Debe pagar $100");
    break;
    case "vip":  console.log("Debe pagar $200");
    break;
    default:console.log("Plan desconocido");
    break;
}
*/