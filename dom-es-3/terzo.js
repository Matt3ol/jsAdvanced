// Crea la tua To-Do List mediante i metodi visti nel video.
// Crea una funzione che ti permette di:

// - Creare una lista aggiungendo il task desiderato mediante il bottone `Aggiungi`.
// - Creare un checkbox per ogni task aggiunto.
const tinput = document.getElementById("inputId");
const Lista = document.getElementById("lista");

const addProduct = () => {
  const tinput = document.getElementById("inputId");
  const Lista = document.getElementById("lista");
  const li = document.createElement("li");
  li.textContent = tinput.value;
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  if (tinput.value != "") {
    li.appendChild(checkbox);
    Lista.appendChild(li);
    tinput.value = "";
  } else {
    alert("inserire qualcosa nella lista");
  }
};
