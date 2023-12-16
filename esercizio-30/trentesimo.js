// Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
// La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.
function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const simulatedData = { name: "John", age: 30 };
      if (simulatedData) {
        resolve(simulatedData);
      } else {
        reject("Errore: Dati non disponibili");
      }
    }, 1000); 
  });
}

fetchDataFromAPI()
  .then((data) => {
    console.log("Dati ricevuti:", data);
  })
  .catch((error) => {
    console.error("Errore durante il recupero dei dati:", error);
  });
