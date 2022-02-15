//TODO: ---> Example 1: synchronous example (blocking)

const processOrder = (customer) => {
  console.log(`processing order for customer 1`);

  var currentTime = new Date().getTime();
  while (currentTime + 3000 >= new Date().getTime());
  //*👆 here code will block for 3s

  console.log(`order processed for customer 1`);
};

console.log(`take order for customer 1`);
processOrder();
console.log(`completed order for customer 1`);

//! output:
/**
  take order for customer 1
  processing order for customer 1
  order processed for customer 1
  completed order for customer 1
*/
