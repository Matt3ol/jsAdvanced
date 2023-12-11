// Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
// La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.
function runCallbacks(callbacks) {
    for (let i = 0; i < callbacks.length; i++) {
        callbacks[i](); 
      } 
}
function firstCallback() {
  console.log('firstCallback')
}
function secondCallback() {
  console.log('secondCallback')
}

function thirdCallback() {
  console.log('thirdCallback')
}
const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);