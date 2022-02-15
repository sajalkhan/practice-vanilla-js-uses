//TODO:  ---> Example 3: Fix async task executation order issue using callback

const takeOrder = (customer, callback) => {
  console.log(`\n\n\ntake order for ${customer}`);
  callback(customer);
};

const processOrder3 = (customer, callback) => {
  console.log(`processing order for ${customer}`);

  setTimeout(() => {
    console.log(`cooking completed! for ${customer}`);
    console.log(`order processed for ${customer}`);
    callback(customer);
  }, 3000);
};

const completeOrder = (customer) => {
  console.log(`completed order for ${customer}`);
};

takeOrder("customer 3", (customer) => {
  //-------------callback-----👆👇-----
  processOrder3(customer, (customer) => {
    completeOrder(customer);
  });
});

takeOrder("customer 4", (customer) => {
  processOrder3(customer, (customer) => {
    completeOrder(customer);
  });
});

//! output:
/**
 take order for customer 3
 processing order for customer 
 cooking completed! for customer 3
 order processed for customer 3
 completed order for customer 3
*/
