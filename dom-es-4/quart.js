document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".btn");

  button.addEventListener("click", function () {
    document.body.classList.toggle("theme");
  });
});
