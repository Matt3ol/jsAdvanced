// In questo esercizio, come nel precendente andremo a simulare il caricamento di moduli di un veicolo spaziale in modo asincrono e quindi lanciare il veicolo spaziale quando tutti i moduli sono stati caricati con successo!

// ATTENZIONE : il caricamento dei moduli in questo esercizio non sempre potrebbe riuscire!

// Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza la funzione "caricaModulo" per caricare i moduli A, B e C, attendendo il completamento di ciascuna operazione prima di passare alla successiva.

// Gestisci eventuali errori nel caricamento dei moduli stampando in console "Impossibile lanciare il veicolo spaziale a causa di errori nei moduli."

// Alla fine, se tutti i moduli sono stati caricati con successo, stampa in console "Veicolo spaziale pronto per il lancio!".

function caricaModulo(modulo) {
  return new Promise((resolve, reject) => {
    const tempoCaricamento = Math.random() * 3000; // Simula il caricamento con un ritardo casuale fino a 3 secondi.
    setTimeout(() => {
      if (tempoCaricamento < 1500) {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      } else {
        reject(`Errore durante il caricamento del modulo ${modulo}.`);
      }
    }, tempoCaricamento);
  });
}

// implementa la funzione asincrona "lanciaVeicoloSpaziale" gestendo gli eventuali errori

async function lanciaVeicoloSpaziale() {
  try {
    const lancio = await caricaModulo("A");
    const lancio2 = await caricaModulo("B");
    const lancio3 = await caricaModulo("C");
    console.log(lancio);
    console.log(lancio2);
    console.log(lancio3);
    console.log("Veicolo spaziale pronto per il lancio!");
  } catch (error) {
    console.error(
      "Impossibile lanciare il veicolo spaziale a causa di errori nei moduli.",
      error.message
    );
  }
}

lanciaVeicoloSpaziale();
