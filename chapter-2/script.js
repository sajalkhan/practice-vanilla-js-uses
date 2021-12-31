const form = document.querySelector(".signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.username.value, form.email.value, form.password.value);
});
