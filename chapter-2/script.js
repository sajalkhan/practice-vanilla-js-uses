const form = document.querySelector(".signup-form");
const message = document.querySelector(".message");
const userName = document.querySelector('input[name="username"]');

//*Validation
userName.addEventListener("keyup", (e) => {
  const valid = /^[a-zA-Z 0-9]{6,12}$/;
  const name = e.target.value;

  if (valid.test(name) || !name) {
    message.style.display = "none";
    userName.removeAttribute("style");
  } else {
    message.style.display = "block";
    message.textContent = "Invalid user name";
    userName.setAttribute("style", "border: 1px solid red");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.username.value, form.email.value, form.password.value);
});
