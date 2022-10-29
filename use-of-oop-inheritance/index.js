const firstUserElement = document.querySelector(".user1");
const secondUserElement = document.querySelector(".user2");
const button = document.querySelector(".button");

class User {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

//* Use of Inheritance
class Teacher extends User {
  constructor(name, email, phone, subject) {
    super(name, email, phone); //! copy all the property
    this.subject = subject;
  }

  getTeacherInfo = () => {
    return `Name: ${this.name} and Email: ${this.email}`;
  };

  // object theke eta access kora jai na direct class theke powa jabe
  static getTeacherPhone = () => {
    return `it's a static method`;
  };
}

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

const user1 = new User("sajal", "sajal@gmail.com", 1234); //! constructor
showUserDetailsInformation(firstUserElement, user1);

button.addEventListener("click", () => {
  const user2 = new Teacher("Noori", "noori@gmail.com", 1234, "CSE");
  showUserDetailsInformation(secondUserElement, user2);

  console.log(user2.getTeacherInfo());
  console.log(Teacher.getTeacherPhone());
  console.log(user2.getTeacherPhone()); // got error cause it's static method

});
