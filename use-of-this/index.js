const user = {
  name: "sajal",
  email: "sajal@gmail.com",
  phone: "123",
  dob: 1994,
  blogs: [
    {
      title: "new blogs",
      like: 30,
    },
    {
      title: "second blogs",
      like: 100,
    },
  ],
  logBlogs: function () {
    this.blogs.forEach((blog) => {
      console.log(blog.title, " -- ", blog.like);
    });
  },
  fullInfo: function (currentYear) {
    return `${this.name} phone number is ${this.phone} he is ${
      currentYear - this.dob
    } old`;
  },
};

const user2 = {
  name: "Abir",
  email: "abir@gmail.com",
  phone: "2345",
  dob: 1996,
};

const firstUserInfo = document.querySelector(".user1");
const button = document.querySelector(".copy");

const getUserFullInfo = function (currentYear) {
  return `${this.name} phone number is ${this.phone} he is ${
    currentYear - this.dob
  } old`;
};

//! bind use cases
const calculateAge = function (currentYear) {
  setTimeout(
    function () {
      console.log(`${this.name}  is ${currentYear - this.dob} years old!`);
    }.bind(user2),
    1000
  );
};

button.addEventListener("click", () => {
  console.log("click");
});

document.addEventListener("DOMContentLoaded", () => {
  Array.from(firstUserInfo.children).forEach((item) => {
    const span = document.createElement("span");

    if (item.textContent.includes("Name")) {
      span.textContent = user.name;
      item.append(span);
    } else if (item.textContent.includes("Email")) {
      span.textContent = user.email;
      item.append(span);
    } else {
      span.textContent = user.phone;
      item.append(span);
    }
  });

  function helloThis() {
    console.log(this); //! point to window object
  }

  helloThis();

  const fullInfo = user.fullInfo(2022);
  console.log(fullInfo);

  //! call, apply, bind -> N.B: first argument a object nibe jeta k point korbe seta, r porer gula argument
  const fullInfo2 = user.fullInfo.call(user2, 2022);
  console.log(fullInfo2);

  const getUserInfo = getUserFullInfo.apply(user, [2022]);
  //*----- ei khane fullInfo function tar shate apply use kore user object ta point kore dici then oi function er arguments ta pass korci
  console.log(getUserInfo);

  const ageCalculate = calculateAge.call(user, 2022);
  console.log(ageCalculate); //* <-- it's not give correct result cause .call, .apply execute before uses

  const ageCalculate2 = calculateAge(2022);
  console.log(ageCalculate2);
});
