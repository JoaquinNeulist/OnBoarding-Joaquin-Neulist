/*
//1:
let boton = document.getElementById("boton")
let divColor = document.getElementById("divColor")
let color = ["lightblue", "red"]
let changeLightblue = function(){
    divColor.style.backgroundColor = color[0]
    divColor.innerText = "Lightblue"
}
let changeRed = function(){
    divColor.style.backgroundColor = color[1]
    divColor.innerText = "Red"
}
boton.addEventListener('click',  e => {changeLightblue()
boton.addEventListener('click',  e => changeRed()
)
}
)
*/
/*
//2:
let input = document.getElementById("inputText")
let divText = document.getElementById("divText")
let secBoton = document.getElementById('secondBoton')
input.addEventListener('keyup', e => {divText.innerText = e.target.value;
}
)
secBoton.addEventListener('click',  function(){input.value = '' ;
divText.innerText = ''
})
*/
/*
//3:
let inputEstatura = document.getElementById("inputEstatura")
let inputPeso = document.getElementById("inputPeso")
let inputResult = document.getElementById("inputResult")
let thirdBoton = document.getElementById("thirdBoton")
let resultadoIMC = function() {
    let peso = parseFloat(inputPeso.value)
    let altura = parseFloat(inputEstatura.value) / 100
    if (altura <= 0 || peso <= 0) {
        alert("Ingrese valores de peso y altura validos")
    return
    }
let IMC = peso / (altura*altura)
inputResult.value = IMC.toFixed(2)
}
thirdBoton.addEventListener('click', resultadoIMC)
*/
/*
//4:
let convertBoton = document.getElementById('convertButton')
let deleteBoton = document.getElementById('deleteButton')
let inputLocal = document.getElementById('inputLocal')
let inputDolar = document.getElementById('inputDolar')
let clearInputs = function() {
    inputDolar.value = null;
    inputLocal.value = null;
}
let convert = function() {
    let monedaLocal = parseFloat(inputLocal.value);
    let dolar = parseFloat(inputDolar.value);
    if ((!monedaLocal || monedaLocal <= 0) && (!dolar || dolar <= 0)) {
        alert("Ingrese un valor válido para la moneda local o los dólares");
        return;
    }
    if (monedaLocal && monedaLocal > 0) {
        inputDolar.value = monedaLocal / 500;
    }
    if (dolar && dolar > 0) {
        inputLocal.value = dolar * 500;
    }
} //Los if toman de condicion por si el usuario intenta o no ingresar ningun valor o ingresa valores negativos que no son validos
convertBoton.addEventListener('click', convert)
deleteBoton.addEventListener('click', clearInputs)
*/