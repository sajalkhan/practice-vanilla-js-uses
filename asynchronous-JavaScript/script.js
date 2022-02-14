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

//TODO: ---> Fix callback hell issue using promise (promise use hoy mainly async operation handle korar jonno)

//Promise example
//? promise takes two func as a argument. it it pass call resolve if fail call reject
//*-----------------func(resolve👇)--func(👇reject)------
const promise = new Promise((resolve, reject) => {
  //do something
});

//* promise Example
const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical meeting",
      location: "dhaka",
      time: "10:00 Am",
    };

    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting already scheduled!"));
  }
});

//promise use korte hole 2ta method lagbe promise.then/ promise.catch
// meeting
//   .then() // jodi resolve hoy
//   .catch(); // jodi reject hoy

meeting
  .then((res) => {
    // resolve data
    console.log(JSON.stringify(res));
  })
  .catch((err) => {
    //rejected data
    console.log(err.meeting);
  });
