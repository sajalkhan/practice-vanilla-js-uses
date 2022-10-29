const Person = function (name, email, phone, age) {
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.getFullInfo = function () {
    return `${this.name} born in ${2022 - age}`;
  };
};

const firstUserElement = document.querySelector(".user1");
const secondUserElement = document.querySelector(".user2");
const button = document.querySelector(".button");

const showUserDetailsInformation = (element, user) => {
  Array.from(element.children).forEach((item) => {
    const span = document.createElement("span");

    if (item.textContent.includes("Name")) {
      span.innerText = user.name;
      !item.children.length && item.appendChild(span);
    } else if (item.textContent.includes("Email")) {
      span.innerText = user.email;
      !item.children.length && item.appendChild(span);
    } else {
      span.innerText = user.phone;
      !item.children.length && item.appendChild(span);
    }
  });
};

const user1 = new Person("sajal", "sajal@gmail.com", 1234); //! function constructor
showUserDetailsInformation(firstUserElement, user1);

const user2 = new Person("Abir", "Abir@gmail.com", 456); //! function constructor
button.addEventListener("click", (e) => {
  e.preventDefault();
  showUserDetailsInformation(secondUserElement, user2);
});
