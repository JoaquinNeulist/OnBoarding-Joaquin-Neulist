let tituloPrincipal = document.getElementById("titulo")
console.log(frutas)
tituloPrincipal.innerText = "Frutas"
//
let headfoot = document.getElementsByClassName("hyf")
for (let i = 0; i < headfoot.length; i++) {
    headfoot[i].style.backgroundColor = 'orange'
}
//
let nombreCohort = document.querySelector('p')
//
nombreCohort.innerText = 'Joaquin Andres Neulist -  Cohort 54'
//
let conteiner = document.getElementById("conteiner")
const fruit = [] 
for (const iterator of frutas) {
    fruit.push(iterator)
}
let createCard = function(array) {
    return `<div class="card flex flex-col w-3/4 md:w-1/3 lg:w-1/5 border-2 flex-wrap rounded-md border-black p-4 h-auto ">
    <img class="h-[250px] w-[275px] p-3" src="${array.foto}" alt"${array.nombre}">  
    <p class="text-sm"> Nombre : ${array.nombre} </p> 
    <p class="text-sm mb-7"> Descripcion : ${array.descripcion} </p>
    </div>`
} // tenga una unica responsabilidad: crea la tarjeta, tomando un parametro
for (const iterator of fruit) {
   conteiner.innerHTML += createCard(iterator)
}
//
let divLista = document.getElementById("lista")
let titulodulce = document.createElement('h1')
titulodulce.innerText = 'Frutas Dulces'
divLista.appendChild(titulodulce)

let lista = document.createElement('ul')
let sweetFruit = ''

function createList(Object) { //Creo la funcion para crear la lista
    for (const iterator of Object) { //forof para iterar el objeto
        if (iterator.esDulce) //condicion para saber cual es dulce
        {
            sweetFruit += `<li>${iterator.nombre}</li>`
        }
    }
    return sweetFruit
}

lista.innerHTML = createList(frutas) //al ul le inserto los li
divLista.appendChild(lista) //le agrego la lista completa al div