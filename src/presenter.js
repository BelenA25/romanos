import romano from "./romanos";

const num = document.querySelector("#numero");
const form = document.querySelector("#romanos-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + romano(num.value) + "</p>";
});
