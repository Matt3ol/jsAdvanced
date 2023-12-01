// Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti e restituisce un array contenente solo i numeri pari.
// Utilizzare il parametro rest per raccogliere gli argomenti.

const myRest = filterOutOdds (1, 2, 3, 4, 5, 6, 7, 8)

function filterOutOdds(...rest) {
    return rest.filter(num => num % 2 === 0);
    
}

console.log(myRest)