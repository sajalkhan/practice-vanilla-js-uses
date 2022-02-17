//FIX: ---> Javascript pro tips <----

//TODO: --- 👇Remove falsy values from an array
let fruits = ["🍎", false, "🍌", NaN, 0, undefined, "🍍", "", null];

//passing Boolean to array.filter() will remove falsy values from array
let data = fruits.filter(Boolean);
console.log(`fruits = ${data}`);

//TODO:  --- 👇Convert any value to boolean
// using !! in front of any value
console.log(!!"sajal");
console.log(!!1);
console.log(!!0);
console.log(!!undefined);

//TODO: --- 👇 Resizing any array

console.log(fruits, " == ", fruits.length);
// we can use array's length property
fruits.length = 3;
console.log(fruits, " == ", fruits.length);

//TODO: --- 👇 How to flattern a multi-dimension array
let smileys = ["0", ["1", "2"], "3", ["4", "5"]];

// we can use array.flat() method to flatten one level array
console.log(smileys.flat());

// Multi level array
let smileys2 = ["0", ["1", "2"], 3, 4, [5, 6, [7, 8, [9, 10], 11], 12], 13, 14];
console.log(smileys2.flat(Infinity));

//TODO: --- 👇 Short conditionals

const captain = "sajal";

// Insted of doing this
if (captain === "sajal") {
  //   console.log(true);
}

// we can use &&
captain === "sajal" && console.log("true sajal");

// Insted of doing this
if (captain !== "sajal") {
  //   console.log(false);
}

// We can use ||
captain === "sajal" || console.log("false sajal");

//TODO: --- 👇 Log values with variable names smartly
const library1 = "jQuery";
const library2 = "React";

// insted of doing this
console.log(`library1 - ${library1}`);
console.log(`library2 - ${library2}`);

// We can do this
console.log({ library1 });
console.log({ library2 });

//TODO: --- 👇 Know performance of a task

const startTime = performance.now();

for (let i = 0; i <= 100; i++) {
  //   console.log(i);
}

const endTime = performance.now();
console.log(`for loop takes ${endTime - startTime} milliseconds to finish`);

//TODO: ---👇 swaping values
let array = [1, 2, 3, 4, 5];

// temp variable old way
let temp = array[0];
array[0] = array[4];
array[4] = temp;
console.log({ array });
array.sort();

// new way - array destructuring
[array[0], array[4]] = [array[4], array[0]];
console.log({ array });

let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a, b);

//TODO: --- 👇 copy to clipboard

const copyToClipboard = (text) => {
  const element = document.createElement("textarea");
  element.value = text;
  document.body.appendChild(element);
  element.select();
  document.execCommand("copy");
  document.body.removeChild(element);
};

const handleClick = () => {
  const text = document.querySelector("#text");
  copyToClipboard(text.innerText);
};

//TODO:  --- 👇 destructuring aliases

const language = {
  name: "javascript",
  founded: 1995,
  founder: "Brendan Eich",
};

const { name: languageName, founder: founderName } = language;
console.log(languageName, founderName);

//TODO:  --- 👇 Get value as data type

// const inputNumber = document.querySelector("#number_input").valueAsNumber;
// console.log(typeof inputNumber, " --- ", { inputNumber });
