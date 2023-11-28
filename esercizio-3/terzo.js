// Utilizza il metodo forEach che prende un array di nomi di frutta e li stampa aggiungendo un punto esclamativo a ciascun nome di frutta.


const fruits = ["Mela", "Banana", "Kiwi", "Fragola"];

fruits.forEach(fruitArray);

function fruitArray(item,index,arr){
    console.log("!["+ index +") = " + item)
}