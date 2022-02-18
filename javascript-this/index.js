//TODO:   --link: js.zonayed.me/advance/post-0

/**
 //? সাধারণত একটা ফাংশনকে কিভাবে কল করা হচ্ছে সেটার উপর ভিত্তি করে this এর ভ্যালু ডিটারমাইন করা হয়।
 //? আর এটার ভ্যালু ডিটারমাইন করা হয় এক্সিকিউশনের সময়।

 //*শুধুমাত্র নিচের এই চারটা রুলস মনে রাখবেন যেগুলো দিয়ে this এর ভ্যালু ডিটারমাইন করা যাবেঃ

    //! ১। গ্লোবাল রুলস

    //! ২। অবজেক্ট রুলস

    //! ৩। স্পষ্ট রুলস

    //! ৪। new কীওয়ার্ড রুলস
 */

/**
 //* ১। গ্লোবাল রুলসঃ
 যদি আপনি this কীওয়ার্ড যেকোনো জায়গায় ইউজ করেন, আপনার কাস্টমভাবে ডিফাইন করা কোনো অবজেক্ট এর ভিতরে ছাড়া,
 তাহলে সেটা সবসময় আপনার গ্লোবাল অবজেক্টকে ইন্ডিকেট করবে। ব্রাউজারের ক্ষেত্রে গ্লোবাল অবজেক্ট হচ্ছে window অবজেক্ট।
 অন্য এনভারোমেন্ট এ যেমন নোড জেএস এ গ্লোবাল অবজেক্ট হচ্ছে global
*/

//!example 1:
https: function getName() {
  this.name = "sajal add as global name";
}

getName();
console.log(`get name = ${name}`);

//! example 2:
function func1() {
  let name = "kabir";

  return function () {
    console.log(this, " --- ", this === global || this === window);
  };
}

func1()();

/*
//* ২। অবজেক্ট রুলসঃ
   এখন কাস্টমভাবে কোনো অবজেক্ট ডিফাইন করে সেটার ভিতর this কীওয়ার্ড ইউজ করলে
   সেটার ভ্যালু আর গ্লোবাল অবজেক্টকে ইন্ডিকেট করবে না। এখানে এটার ভ্যালু চেঞ্জ হয়ে যাবে।
*/

//! Example 1:
var myCustomObj = {
  name: "sajal khan",
  age: 21,
  job: "Student",
  msg: function () {
    console.log("My name is " + this.name);
  },
};

myCustomObj.msg();

//! Example 2:
var myCustomObj = {
  name: "Zonayed Ahmed",
  age: 21,
  job: "Student",
  isTrue: function () {
    console.log(this === myCustomObj);
  },
};

myCustomObj.isTrue();
/**
 this আর আমাদের ডিফাইনকৃত অবজেক্ট myCustomObj কি সেইম জিনিসই?
 হ্যাঁ এটা সত্য বলছে, তার মানে এটা আমাদের কাস্টম অবজেক্ট টাকেই ইন্ডিকেট করছে এখানে।
*/

//! Example 3:
var myCustomObj = {
  name: "Zonayed Ahmed",
  age: 21,
  job: "Student",
  anotherObj: {
    name: "Ahmed Zonayed",
    msg: function () {
      console.log("My name is: " + this.name);
    },
  },
};

myCustomObj.anotherObj.msg();

/**
 this কীওয়ার্ডের ভ্যালু ডিটারমাইন করা হয় কাছের অবজেক্টটাকে দেখে।
 এখানে কাছের অবজেক্ট anotherObj , তাই এখানে this.name anotherObj এর name টাকেই ইন্ডিকেট করবেঃ
 */

/**
//* ৩। স্পষ্ট রুলসঃ
আপনারা হয়তো call, bind, apply মেথডের কথা শুনেছেন। এগুলোই আসলে স্পষ্টভাবে this কীওয়ার্ডের ভ্যালু সেট করতে ইউজ করা হয়।
কোথাও যদি দেখেন এগুলো ইউজ হয়েছে তাহলে খুব সহজেই সেখানে this কীওয়ার্ড কাকে ইন্ডিকেট করছে সেটা ধরে ফেলতে পারবেন।
কারণ এই call, bind, apply মেথডগুলো ইউজ করে প্রথম প্যারামিটারেই this কীওয়ার্ড কাকে ইন্ডিকেট করবে সেটা সেট করা যায়।
*/

//! Example 1:
var myCustomObj = {
  name: "Zonayed Ahmed",
  age: 21,
  job: "Student",
  anotherObj: {
    name: "Ahmed Zonayed",
    msg: function () {
      console.log("sport rule My name is: " + this.name);
    },
  },
};

myCustomObj.anotherObj.msg.call(myCustomObj);
/**
 call, bind, apply এই মেথডগুলো শুধুমাত্র ফাংশনের সাথে ইউজ করা যায় যেমনটা আমরা উদাহরণটায় করেছি।
 অন্য কোনো ডাটা টাইপ যেমন অবজেক্ট, স্ট্রিং, নাম্বার বা বুলিয়ানের সাথে ইউজ করা যাবে না।
*/

//! Example 2:
var myObj = {
  name: "Zonayed Ahmed",
  age: 21,
  timer: function () {
    setTimeout(function () {
      console.log("my function -- ", this); //ai this ta global object k point korce karon setTimeout ekta global object er option
    }, 1000);
  },
};

myObj.timer();

//fix: above

var myObj = {
  name: "Zonayed Ahmed",
  age: 21,
  timer: function () {
    setTimeout(
      function () {
        console.log(this.name);
      }.bind(myObj),
      1000
    );
  },
};

myObj.timer();

//* Lexical this keyword

/**
 অ্যারো ফাংশনের সবচেয়ে বড় ডিফারেন্সটা যেখানে সেটা হচ্ছে this কীওয়ার্ডের সাথে। আমরা জানি, ইএস৫ এর বেলায় একটা ফাংশন কিভাবে কল করা হচ্ছে সেটার উপর
 this কীওয়ার্ডের ভ্যালু অনেকটা নির্ভর করে। ইএস৫ এ প্রত্যেকটা ডিফাউনকৃত ফাংশনের নিজস্ব this এর ভ্যালু থাকে। কিন্তু ইএস৬ এর এই অ্যারো ফাংশনের নিজস্ব কোনো প্রভাব থাকে না
 this কীওয়ার্ডের উপর। বরং এই অ্যারে ফাংশন এর আশেপাশে যেটা থাকে, ঠিক সেখানকার this এর ভ্যালুই অ্যারো ফাংশনের ভিতরেও থাকে।
 */

//! Example 1:

const object = {
  name: "sajal",
  age: 28,
  dob: 1994,
  calculateAge: function (year) {
    // setTimeout(function () {
    //   console.log(`${this.name} current age is ${this.dob - year}`);
    // }, 1000); //! Error code

    // setTimeout(function () {
    //   console.log(`${this.name} current age is ${this.dob - year}`);
    // }.bind(object), 1000); //* Fix with bind method

    setTimeout(() => {
      console.log(`${this.name} current age is ${this.dob - year}`);
    }, 1000); //* fix with lexical this keyword
  },
};

console.log(object.calculateAge(2022));

//! Example 2
function timeGame() {
  this.start = 0;
  // var that = this;
  this.addLevel = function () {
    // setTimeout(function () {
    //   console.log(`game start from = ${++this.start}`);  // here this points to the global function
    // }, 1000); //! Error code

    // setTimeout(function () {
    //   console.log(`game start from = ${++that.start}`);
    // }, 1000); //! fix with using that as a pointer

    setTimeout(() => {
      console.log(`game start from = ${++this.start}`);
    }, 1000);
  };
}

const game = new timeGame();
game.addLevel();

//! Example 3
const lex5 = {
  aFunc: function () {
    console.log(this); // eita lex5 k point korce
    return function () {
      console.log(this); // eita global k point korce
    };
  },
};

// lex5.aFunc()();

const lex6 = {
  name: "sajal",
  aFunc: function () {
    console.log(this);
    return () => console.log(this);
  },
};

lex6.aFunc()();
