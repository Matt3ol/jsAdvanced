// Utilizza setInterval per chiamare la funzione "visualizzaOrologio" ogni secondo.
function visualizzaOrologio() {
  const orarioCorrente = new Date();
  const ore = orarioCorrente.getHours();
  const minuti = orarioCorrente.getMinutes();
  const secondi = orarioCorrente.getSeconds();

  console.log(`Ora attuale: ${ore}:${minuti}:${secondi}`);
}

const clock = setInterval(visualizzaOrologio, 1000);

setTimeout(() => {
  clearInterval(clock);
}, 10000);
