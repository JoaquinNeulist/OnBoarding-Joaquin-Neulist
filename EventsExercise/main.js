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
//Tuve que corregirlos ya que lo habia hecho para una sola ventana/div
let convertBoton1 = document.getElementById('convertButton1')
let deleteBoton1 = document.getElementById('deleteButton1')
let convertBoton2 = document.getElementById('convertButton2')
let deleteBoton2 = document.getElementById('deleteButton2')
let inputLocal = document.getElementById('inputLocal')
let inputDolar = document.getElementById('inputDolar')
let inputLocal1 = document.getElementById('inputLocal1')
let inputDolar1 = document.getElementById('inputDolar1')

let clearInputs1 = function() {
    inputDolar.value = null;
    inputLocal.value = null;
}
let clearInputs2 = function() {
    inputDolar1.value = null;
    inputLocal1.value = null;
}
let convert1 = function() {
    let monedaLocal = parseFloat(inputLocal.value);
    if (!monedaLocal || monedaLocal <= 0) {
        alert("Ingrese un valor válido para la moneda local");
        return;
    }
    if (monedaLocal && monedaLocal > 0) {
        inputDolar.value = monedaLocal / 500;
    }
} //Los if toman de condicion por si el usuario intenta ingresar ningun valor o ingresa valores negativos que no son validos
let convert2 = function() {
    let dolar = parseFloat(inputDolar1.value);
    if ( !dolar || dolar <= 0){
        alert("Ingrese un valor válido para los dólares");
        return;
    }
    if (dolar && dolar > 0) {
        inputLocal1.value = dolar * 500;
    }
} //Los if toman de condicion por si el usuario intenta o no ingresar ningun valor o ingresa valores negativos que no son validos
convertBoton1.addEventListener('click', convert1)
deleteBoton1.addEventListener('click', clearInputs1)
convertBoton2.addEventListener('click', convert2)
deleteBoton2.addEventListener('click', clearInputs2)
*/