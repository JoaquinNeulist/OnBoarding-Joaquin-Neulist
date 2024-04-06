let boton = document.getElementById("boton")

let divform = document.getElementById("divForm")

let divWall = document.getElementById("divWall")

let inputText = document.getElementById("inputText")

let inputCol = document.getElementById("inputColor")

let createDiv = `<div class="bg-cyan-500 w-[300px] m-4 h-[300px]"> 
    </div>`  

boton.addEventListener("click", (MouseEvent) => MouseEvent += divWall.innerHTML += createDiv)
inputCol.addEventListener('change', e => console.log(inputCol.value) )
inputText.addEventListener('input', e => e)