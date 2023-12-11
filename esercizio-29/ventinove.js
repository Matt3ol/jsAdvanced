// Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.
// Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.
function performOperation(a, b, callback) {
  const sum = a + b;
  callback(sum);
}

function displayResult(error, result) {
  if (error) {
    console.error("Si è verificato un errore:", error);
  } else {
    console.log("Il risultato dell'operazione è:", result);
  }
}

performOperation(5, 3, displayResult);
