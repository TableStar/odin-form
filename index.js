const form = document.querySelector("form");
const submitButton = document.querySelector("button");

const inputs = form.querySelectorAll("input[required]");
const warnings = form.querySelectorAll(".warning");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

submitButton.addEventListener("click", () => {
  console.log("hey");
  let isValid = true;

  inputs.forEach((input,i) => {
    if (!input.validity.valid) {
      isValid = false;
      input.classList.add("invalid");
      warnings[i].style.visibility = "visible"
    }
  });
  if (isValid) {
    form.submit();
  }
});

inputs.forEach((input,i) => {
  input.addEventListener("input", () => {
    input.classList.remove("invalid");
     warnings[i].style.visibility = "hidden"
  });
});
