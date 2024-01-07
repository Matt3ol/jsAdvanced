const firstName = document.getElementById("firstName").value;

const lastName = document.getElementById("lastName").value;

const age = document.getElementById("age").value;

const person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
};

const personJSON = JSON.stringify(person);

const form = document.getElementById("formId");
form.setAttribute("data-person", personJSON);

console.log("attributo aggiunto:", form.getAttribute("data-person"));
