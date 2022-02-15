//TODO: ---> Fix callback hell issue using promise (promise use hoy mainly async operation handle korar jonno)

//! ----Promise example----
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

//? promise use korte hole 2ta method lagbe promise.then  and promise.catch
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

//* ai promise ta ager promise er data niye kaj kore resolve korbe (multiple promise)
const addToCalendar = (data) => {
  const calendar = `${data.name} has been scheduled on ${data.location} at ${data.time}`;
  return Promise.resolve(calendar);
};

meeting
  .then(addToCalendar)
  .then((res) => {
    console.log(`res = ${res}`);
  })
  .catch((err) => {
    console.log(err.meeting);
  });

//?  how to get all promise result together example
const promise1 = Promise.resolve("return promise 1");
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("return promise 2");
  }, 2000);
});

Promise.all([promise1, promise2])
  .then((res) => {
    console.log(`show all promise = ${res}`);
  })
  .catch((err) => {
    console.log(`error == ${err}`);
  });

console.log("hello promise");
