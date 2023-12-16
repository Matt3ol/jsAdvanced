// Convertire la seguente funzione basata su callback in una funzione basata su Promise.

// function callback_BasedFunction(arg1, arg2, callback) {
//     setTimeout(() => {
//     const result = arg1 + arg2;
//     if (result % 2 !== 0) {
//     callback(null, result);
//     } else {
//     callback(new Error('Result is not odd!'), null); } }, 1000);
//     }

function callback_BasedFunction(arg1, arg2, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = arg1 + arg2;
      if (result % 2 !== 0) {
        resolve(result);
      } else {
        reject(new Error("Result is not odd!"));
      }
    }, timeout);
  });
}

callback_BasedFunction(6, 3, 1000).then((result) => {
  console.log("Result:", result);
}).catch((error)=> {
    console.error('Error:',error.message)
})
