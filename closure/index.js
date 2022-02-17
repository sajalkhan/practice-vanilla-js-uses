/**
 //? কিভাবে এই ক্লোজারস কাজ করে। আমরা জানি জাভাস্ক্রিপ্ট এ আপনি চাইলে ফাংশন থেকেও আরেকটা ফাংশন রিটার্ন করতে পারবেন। 
 //? আর তখনি তৈরী হয় প্যারেন্ট-চাইল্ড রিলেশন। আর রিটার্নকৃত ফাংশনের সবকিছু চাইল্ড ফাংশন চাইলেও অ্যাক্সেস করতে পারে ক্লোজারস এর কারণে।
 
 //*আগেই যেহেতু বলেছি এটাও জাভাস্ক্রিপ্ট এর ডিফল্ট বিহেভিয়ার। অর্থাৎ আমাদের ক্লোজারস আলাদা করে কোড করতে হবে না।
 */

//! Define the closure
const multFn = () => {
  var mult = 9;
  return (val) => {
    mult = mult * val;
    return mult;
  };
};

// Use the closure
var mult = multFn(); // this function return another function
console.log(mult(10));

/**
 1. Using private variables and methods: In JavaScript, we can use private variables and methods using closures. 
 The example below shows the use of private variables with closure.
 */

//! Define the closure
const rentPrice = (initialRent) => {
  var rent = initialRent;

  // Define private variables for
  // the closure
  return {
    getRent: () => {
      return console.log(rent);
    },
    incRent: (amount) => {
      rent += amount;
      console.log(rent);
    },
    decRent: (amount) => {
      rent -= amount;
      console.log(rent);
    },
  };
};

const Rent = rentPrice(8000);

// Access the private methods
Rent.incRent(2000);
Rent.decRent(1500);
Rent.decRent(1000);
Rent.incRent(2000);
Rent.getRent();

/**
 //* 2. Maintaining state between each function call: 
 Suppose there is a function and one would like it to multiply multiple values together. 
 This could be done with the help of a global variable as they are accessible throughout the program. 
 However, a drawback is that they are prone to change from anywhere in the code. This can be done alternatively using closures. 
 Closures help in maintaining the state between function calls without using a global variable.
*/

const multiply = () => {
  // This variable is local to
  // the closure and holds
  // its value inbetween
  // multiple calls
  var mult = 9;
  return (val) => {
    mult = mult * val;
    return mult;
  };
};

// multiple times
console.log(`multiply 2 = ${multiply()(2)}`);
console.log(`multiply 3 = ${multiply()(3)}`);
console.log(`multiply 5 = ${multiply()(5)}`);
