// -Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. -Utilizzare setTimeout per simulare un'operazione asincrona.

function myPromise() {
  return new Promise((resolve, reject) => {
    let value = 'A'
    setTimeout(() => {
      if (value === "A") {
        resolve("ok");
      } else {
        reject("ko");
      }
    }, 2000);
  });
}

const my = myPromise("A")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
