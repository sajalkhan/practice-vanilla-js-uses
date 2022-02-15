//TODO: ---> Example 2: Fix above issue Asynchronous (non blocking)
const processOrder2 = (customer) => {
  console.log(`processing order for customer 2`);

  setTimeout(() => {
    console.log("cooking completed!");
  }, 3000);
  /** 
   👆 jokhon ai line execute korbe tokhon se dekhbe j eta async operation tai
      1) web api te process korar jonno diye dibe.
      2) web api 3s por se callback queue te process korar jonno pathay dibe
      3) event loop callback queu r call stack er process check kore 
        jokhon call stack faka thake tokhon event loop callback queue theke call stack a data processing er jonno diye dei
   */

  console.log(`order processed for customer 2`);
};

console.log(`\n\n\ntake order for customer 2`);
processOrder2();
console.log(`completed order for customer 2`);

//! output:
/**
  take order for customer 2
  processing order for customer 2
  order processed for customer 2
  completed order for customer 2
  cooking completed!
*/
