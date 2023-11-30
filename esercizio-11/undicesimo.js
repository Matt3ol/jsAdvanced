// Dato uno studente oggetto nidificato con informazioni sulle proprietà e voti, utilizza la destrutturazione dell'oggetto per creare variabili nome, età e voto che contengano i valori dell'oggetto nidificato.
const student = {
  info: { name: "Bob", age: 25 },
  grades: { math: 95, science: 89 }
};

const {
    info : {name , age },
    grades : {math : grade , science }
} = student;

console.log(name);
console.log(age);
console.log(grade);
console.log(science)