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

const addToCalendar = (data) => {
  const calendar = `${data.name} has been scheduled on ${data.location} at ${data.time}`;
  return Promise.resolve(calendar);
};

//TODO: ---> Fix promise code readability issue using async/await

const myMeeting = async () => {
  try {
    const details = await meeting;
    const calendar = await addToCalendar(details);
    console.log(`use async awit res = ${calendar}`);
  } catch (error) {
    console.log(`async await error = ${error}`);
  }
};

myMeeting();
