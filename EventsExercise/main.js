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

//4:
let convertBoton = document.getElementById('convertButton')
let deleteBoton = document.getElementById('deleteButton')
let inputLocal = document.getElementById('inputLocal')
let inputDolar = document.getElementById('inputDolar')
let clearInputs = function() {
    inputDolar.value = null;
    inputLocal.value = null;
}
let localtodolar = function() {
    let monedaLocal = parseFloat(inputLocal.value);
    if (isNaN(monedaLocal) || monedaLocal <= 0) {
        alert("Ingrese valores válidos de moneda local");
        return;
    }
    inputDolar.value = monedaLocal / 500;
}

let dolartolocal = function() {
    let dolar = parseFloat(inputDolar.value);
    if (isNaN(dolar) || dolar <= 0) {
        alert("Ingrese valores válidos de dólares");
        return;
    }
    inputLocal.value = dolar * 500;
}


convertBoton.addEventListener('click', localtodolar)
convertBoton.addEventListener('click', dolartolocal)
deleteBoton.addEventListener('click', clearInputs)