//1:
let printMessage = message => console.log(message)
//2:
/*
let createMultiplication = (num1, num2) => {
    let res = num1 * num2
    console.log(res) 
}
createMultiplication(2,4)
*/
//3:
/*
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let listaNueva = array.map(createMultiplication)
console.log(listaNueva)
*/
//4:
/*
beers.sort((a, b)=>{
    return b.abv - a.abv  //calcula a traves de b.abv - a.abv y deja ordenado el array de mayor abv a menos abv
})
for (let i = 0; i < 10; i++) { //saca a la consola hasta el numero 10, el nombre de las mas alcoholicas
 j=i+1
    console.log("N:"+j+" Name: "+beers[i].name+", abv: "+beers[i].abv)}
*/
//5:
/*
beers.sort((a, b)=>{
    return a.abv - b.abv  //calcula a traves de a.abv - b.abv y deja ordenado el array de menor abv a mayor abv
})
for (let i = 0; i < 10; i++) { //saca a la consola hasta el numero 10, el nombre de las menos alcoholicas
 j=i+1
    console.log("N:"+j+" Name: "+beers[i].name+", abv: "+beers[i].abv)
}
*/
//6:
/*
let nombreCerveza = prompt("Enter a beer name:") //Si se quiere hacer con prompt 
let returnBeer = (beers, nombreCerveza) => beers.find(beers => beers.name === nombreCerveza)
let beersFound = returnBeer(beers, nombreCerveza) //Si no se quiere hacer con prompt, ingresar nombre de la cerveza (EJ "Buzz") en donde dice nombreCerveza
console.log(beersFound)
*/
//7:
/*
let fBeers
let findBeerbyIBU = (beers, ibu) => {
     fBeers = beers.find(beers => beers.ibu === ibu)
    return fBeers ? fBeers : console.log("There is no beer with an ibu of "+ ibuCerveza)
}
let ibuCerveza = parseFloat(prompt("Enter the beer ibu:")) //Si se quiere hacer con prompt 

let findBeer = findBeerbyIBU(beers, ibuCerveza) //Si no se quiere hacer con prompt, ingresar ibu de la cerveza (EJ "41.5") en donde dice ibuCerveza
console.log(findBeer)
*/
//8:
/*
let nombreCerveza = prompt("Enter a beer name:") //Si se quiere hacer con prompt 
let returnBeerIndex = (beers, nombreCerveza) => beers.findIndex(beers => beers.name === nombreCerveza)
let beersIndex = returnBeerIndex(beers, nombreCerveza) //Si no se quiere hacer con prompt, ingresar nombre de la cerveza (EJ "Buzz") en donde dice nombreCerveza
if (beersIndex!== -1) {
    console.log(`The position of the beer "${nombreCerveza}" in the array is: ${beersIndex}`)
} else {
    console.log(`${nombreCerveza} does not exist in the array`)
}
*/
//9:
// abv <tbody 10
/*
let minusAlcBeers = function (beers) {
    const filtBeer = beers.filter(beers => beers.abv < 10);
    const res = filtBeer.map(beers => {
        return {
            name: beers.name,
            abv: beers.abv,
            ibu: beers.ibu
        };
    });
    return res;
}
console.log(minusAlcBeers(beers))
*/
//10:
/*
function orderFunction(beers, Name, ascendant) {
    const orderBeer = beers.slice().sort((a, b) => { //Genera un nuevo array asi no modifica el original
        if (ascendant) {
            return a[Name] - b[Name] //Orden ascendente, por en la propiedad especificada
        }
        else{
            return b[Name] - a[Name] //Orden descendente, por la propiedad especificada
        }
    });
    return orderBeer.slice(0, 10) //Devuelve las primeras 10 cervezas del array ordenado
}
const orderBeer = orderFunction(beers, "abv", true)
console.log(orderBeer) //Devuelve en orden 1-10 los abv mas bajos

const orderBeerDescendant = orderFunction(beers, "ibu", false)
console.log(orderBeerDescendant) //Devuelve en orden 1-1o los Ibu mas altos
*/
//11:
/*
function beerTable(beers, idDiv) {
    const containerTable = document.getElementById('idDiv')
 if (!containerTable) {
    console.log(`Error: element with id ${idDiv} not found `)
    return
}
    let tableHtml = `
    <table class="border-4 border-black p-0 m-0">
    <thead class="border-4 border-black p-0 m-0">
            <tr class="border-4 border-black p-0 m-0">
                <th class="border-4 border-black">Name</th>
                <th class="border-4 border-black">Abv</th>
                <th class="border-4 border-black">Ibu</th>
            </tr>
            </thead>
    <tbody class="m-0 p-16">
`
beers.forEach(beers => { //itera sobre beers y agrega cada cerveza como una fila
    tableHtml +=`
    <tr class="border-4 border-black text-center">
    <td class="border-4 border-black m-0 p-4">${beers.name}</td>
    <td class="border-4 border-black m-0 p-4">${beers.abv}</td>
    <td class="border-4 border-black m-0 p-4">${beers.ibu}</td>
    </tr>
    `
})
tableHtml += `
</tbody>
</table>
`
containerTable.innerHTML = tableHtml
}

beerTable(beers, "beerTable")
*/