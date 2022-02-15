const second = () => console.log("second");
const third = () => console.log("third");

//TODO: ---> 1 goto call stack
const first = () => {
  console.log("first");

  //TODO: ---> 2 goto webApi/c++ api cause it's asynchronous then goto 👉 callback queue
  setTimeout(second, 0);

  //TODO: ---> 3 goto 👉 microtask queue [this queue priority is higher than callback queue and it's execute first]
  //promise/async await work in the same way
  new Promise((resolve, reject) =>
    resolve("I am right after third before second!")
  ).then((resolve) => console.log(resolve));

  //TODO: ---> 4 goto call stack
  third();
};

first();

//TODO:  ---Output:---
/**
 1. first
 2. third
 3. I am right after third before second!
 4. second
*/
