let boton = document.getElementById("boton")

let divform = document.getElementById("divForm")

let divWall = document.getElementById("divWall")

let inputText = document.getElementById("inputText")

let inputCol = document.getElementById("inputColor")

let inputPoster = document.getElementById('inputPoster')

let inputGraffiti = document.getElementById('inputGraffiti')

boton.addEventListener("click", e =>{
    e.preventDefault(); //previene el envio del formulario por defecto
    let texto = inputText.value
    let color = inputCol.value
    let style = ''
    if (inputGraffiti.checked && inputPoster.checked) {
        style = ""; // Si ambos están seleccionados, no aplica ningún estilo y saldria el estilo default
    } else if (inputGraffiti.checked) {
        style = "italic";
    } else if (inputPoster.checked) {
        style = "not-italic";
    }

    let newDiv = document.createElement('div') //Creo el div
    newDiv.textContent = texto
    newDiv.style.fontStyle = style
    let x = document.createElement('span')
    x.textContent = 'X'
    x.classList.add('close')
    newDiv.appendChild(x)
    newDiv.style.width = '250px'
    newDiv.style.height = '250px'
    newDiv.style.backgroundColor = color
    newDiv.classList.add('m-4')
    newDiv.classList.add('flex')
    newDiv.classList.add('flex-wrap')
    newDiv.classList.add('gap-8')
    divWall.appendChild(newDiv)
    
    inputText.value=''
    inputCol.value=''
    inputGraffiti.checked=false
    inputPoster.checked=false

    x.addEventListener('click', function(){
        divWall.removeChild(newDiv)
    })
}) 