const btn = document.querySelector(".btn");
const email = document.querySelector(".email");
const firstName = document.querySelector(".firstname");
const lastName = document.querySelector(".lastname");
const titleName = document.querySelector(".title-name");
const p = document.querySelector(".printedform");

btn.addEventListener("click", () => {
  let obj = {
    email: email.value,
    name: firstName.value,
    lastname: lastName.value,
  };
  titleName.innerText = obj.name;
  localStorage.setItem("user", JSON.stringify(obj));
  p.innerText = `${obj.name} ${obj.lastname} ${obj.email}`;
});

let userSaved = JSON.parse(localStorage.getItem("user"));

if (userSaved) {
  titleName.innerText = userSaved.name;
}

