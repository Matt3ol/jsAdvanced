// Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti e restituisce la somma di tali argomenti.
// Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in console l'output della funzione somma.

const mysum = somma (1, 2 , 3,  4, 5 ,6);

function somma (...numbers){
    return numbers.reduce((a, numbers) => a + numbers , 0)
}

console.log(mysum)