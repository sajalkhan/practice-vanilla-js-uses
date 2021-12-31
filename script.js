//*---------- JS Object literels ------------------//
const user = {
  name: "sajal",
  email: "sajal@gmail.com",
  password: "123",
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
  logBlogs() {
    this.blogs.forEach((blog) => {
      console.log(blog.title, " -- ", blog.like);
    });
  },
  //!This won't work 👇
  // logBlogs:()=> {
  //   this.blogs.forEach((blog) => {
  //     console.log(blog.title, " -- ", blog.like);
  //   });
  // },
};

user.logBlogs();
//*---------- JS Object literels ------------------//

//!--------------- 😎😎 Js  DOM 😎😎-------------//

//TODO: ------------ add list items --------------//
const ul = document.querySelector(".options");
const options = ["dhaka", "rajshahi", "barishal", "chittagang"];

let html = ``;
//*--------- callback 👇 function------
options.forEach((option) => {
  html += `<li style="color:green">${option.toUpperCase()}</li>`;
});

ul.innerHTML = html;
//* -------------- add list items -----------------//

//TODO: ----------- JS selector example -----------//
const error = document.querySelector("div.error");
const paragraph = document.querySelectorAll("p");

paragraph.forEach((item) => {
  console.log("selector -- ", item.innerText);
});
//*-------------- JS selector example ------------//

//TODO: ------ change dom element text -----------//
const heading = document.querySelector("p");
setTimeout(() => {
  heading.innerText = "Welcom To JS Ninja! 👺👺👺";
}, 2000);

const content = document.querySelector(".content");
content.innerHTML += `<p style="color:orange">Add new content</p>`;
//* -------- change dom element text ------------//

//TODO: ----- Getting and setting attributes ----//
const link = document.querySelector("a");

const hrf = link.getAttribute("href");
link.innerText = "Link to www.facebook.com";
link.setAttribute("href", "https://www.facebook.com");
// link.setAttribute("style", "text-decoration:none; color:green;");
link.style.textDecoration = "none";
link.style.color = "green";
link.style.fontSize = "30px";
link.style.fontWeight = "bold";

//change class attribute
const div = document.querySelectorAll("div");
div.forEach((item) => {
  if (item.getAttribute("class") == "error") {
    // item.setAttribute("class", "div-error");
    // item.setAttribute("style", "color:red");
    item.style.color = "blue";
  } else if (item.getAttribute("class") == "content") {
    item.innerHTML += `<p>Add new content using get Attribute</p>`;
  }
});
//*  -------- Getting and setting attributes ------//

//TODO: ----- Add/Remove elements from classes ----//
const container = document.querySelector(".content");
container.classList.remove("content");
container.classList.add("success");

const err = document.querySelector(".error");
setTimeout(() => {
  // err.classList.remove("error");
  // err.classList.add("fail");
}, 2000);

const paragraph2 = document.querySelectorAll(".error");
paragraph2.forEach((item) => {
  if (item.textContent.includes("error")) {
    item.style.color = "orange";
    item.style.fontSize = "20px";
    item.style.fontWeight = "bold";
    item.classList.add("fail");
  }
});

const title = document.querySelector(".title");
title.classList.toggle("title-edit"); // add new class name
// title.classList.toggle("title-edit"); // remove class name for two time toggle
//* ------- Add/Remove elements from classes ------//

//TODO: ------- Parent/child/sibling relation -----//
const lastDiv = document.querySelector(".success");

Array.from(lastDiv.children).forEach((item) => {
  if (item.textContent.includes("new")) {
    item.innerText += " from parent/child/sibling";
  }
});

const heading2 = document.querySelector("h1");
console.log("parent element of h1-- ", heading2.parentElement);
console.log("next sibling element of h1-- ", heading2.nextElementSibling);
console.log("previous sibling of h1-- ", heading2.previousElementSibling);

//* -------- Parent/child/sibling relation --------//

//TODO: ----------------- Event -------------------//
const List = document.querySelector(".todo ul");
const button = document.querySelector(".todo > button");
const ListItems = document.querySelectorAll(".todo li");

//! This example isn't work when we try to remove li element
// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = "something new todo";
//   List.append(li);
//   // List.prepend(li);
// });

// ListItems.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     if (event.target.style.textDecoration == "line-through") {
//       event.target.style.textDecoration = "none";
//     } else {
//       // event.target.style.textDecoration = "line-through";
//       event.target.remove(); //remove element from dom
//     }
//   });
// });

//! 👆👆👆 to solve above issue we have to use event clicking (and delegation)
button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "something new todo";
  List.append(li);
});

List.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

const box = document.querySelector(".box");
box.addEventListener("mousemove", (e) => {
  box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`;
});

document.addEventListener("wheel", (e) => {
  console.log("page x -", e.pageX, " == page y -", e.pageY);
});
//*    ----------------- Event -------------------//

//TODO: ---------------- Popup -------------------//
const popupBtn = document.querySelector(".open-modal");
const modal = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

popupBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});
//*  ------------------- Popup -------------------//
