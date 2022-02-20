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

//TODO:  --- 👇 Remove duplicate from array

const duplicate_arr = [1, 2, 3, 4, 5, 5, 5, 6, 6, 1, 1, 1];

const unique_arr = [...new Set(duplicate_arr)];
console.log({ unique_arr });

//TODO:  --- 👇 compare two arrays by value
const hasSameElements = (arr1, arr2) => {
  return arr1.length === arr2.length && arr1.every((v, i) => v === arr2[i]);
};

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
console.log(`same array? ${hasSameElements(arr1, arr2)}`);

//TODO:  --- 👇 shuffling array
const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.sort(() => Math.random() - 0.5));

//TODO:  --- 👇 Comma operator

let x = 1;
x = (x++, x);

console.log({ x });

let y = (2, 4);
console.log({ y });

//TODO: --- 👇 what will be the output of the below code

const myFunction = () => "Bangladesh";

const string = myFunction`welcome`; // template literan er age kono function thakle seta template literal k niye call hoye jai
console.log(`output is = ${string}`);

//TODO: --- 👇 how to make all text contents of a website editable

// document.body.contentEditable = "true"; // contentEditable = 'true';

//TODO: --- 👇 what will be the output of below code?

function second() {
  console.log(`the length is ${this.length}`);
}

let first = {
  length: 10,
  method: function (second) {
    arguments[0](); // arguments[0] means (second, 5) = second karon second= 0, 5 = 1
    //this.length mane ai khane ai method er arguments er length
    // r ai khane (second, 5) = 2
  },
};

first.method(second, 5);

//TODO: --- 👇 what will be the output of below code?

const str = "constructor";
console.log(str[str](01)); // 1

// str[str] --> string function/ constructor
// str(01) --> "1" ei khane 01 k se string a convert kore dicce

//TODO: --- 👇 what will be the output of below code?

console.log("Bangladesh".__proto__.__proto__.__proto__); // null
//?---------------------> 👆 data type
//? ---------------------------------> 👆 parent object
//? ----------------------------------------- ❌ parent object er kono proto type nai

console.log("Bangladesh".__proto__.__proto__); // object
console.log("Bangladesh".__proto__); // string
console.log((123).__proto__); // number

//TODO:  --- 👇 make a function that sorts it's arguments without using loops

const myFunction2 = function () {
  // console.log([].slice.call(arguments));
  return [].slice.call(arguments).sort();
};

console.log(`sort function arguments to array ${myFunction2(5, 6, 1, 8)}`);
