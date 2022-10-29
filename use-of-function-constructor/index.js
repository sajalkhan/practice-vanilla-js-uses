//* ফাংশন কন্সট্রাকটর  ক্লাসের মতো অবজেক্ট এর ব্লু-প্রিন্ট তৈরী করতে ইউজ করা হয়।

const Person = function (name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
};

//! 👇 inheritance example
const Teacher = function (name, email, phone, subject) {
  Person.call(this, name, email, phone); //! Use inheritance
  this.subject = subject;
};

const firstUserElement = document.querySelector(".user1");
const secondUserElement = document.querySelector(".user2");
const thirdUserElement = document.querySelector(".user3");
const button = document.querySelector(".button");

const appendChild = (element, item, info) => {
  element.innerText = info;
  !item.children.length && item.appendChild(element);
};

const showUserDetailsInformation = (element, user) => {
  Array.from(element.children).forEach((item) => {
    const span = document.createElement("span");

    if (item.textContent.includes("Name")) {
      appendChild(span, item, user.name);
    } else if (item.textContent.includes("Email")) {
      appendChild(span, item, user.email);
    } else if (item.textContent.includes("Phone")) {
      appendChild(span, item, user.phone);
    } else {
      appendChild(span, item, user.subject);
    }
  });
};

const user1 = new Person("sajal", "sajal@gmail.com", 1234); //! function constructor
showUserDetailsInformation(firstUserElement, user1);

button.addEventListener("click", (e) => {
  e.preventDefault();
  const user2 = new Person("Abir", "Abir@gmail.com", 456); //! function constructor
  showUserDetailsInformation(secondUserElement, user2);
});

const user3 = new Teacher("sajal", "sajal@gmail.com", 1234, "cse"); //! function constructor with inheritance example
showUserDetailsInformation(thirdUserElement, user3);
