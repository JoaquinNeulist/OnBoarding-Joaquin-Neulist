let boton = document.getElementById("boton")
let divColor = document.getElementById("divColor")
let color = ["lightblue", "red"]
let changeLightblue = function(){
    divColor.style.backgroundColor == color[0]
    divColor.innerText == "Lightblue"
}
let changeRed = function(){
    divColor.style.backgroundColor == color[1]
    divColor.innerText == "Red"
}
boton.addEventListener('click',  e => {changeLightblue()
console.log(e)
} 
)