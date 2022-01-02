const clock = document.querySelector(".clock");

const GetTime = () => {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const seconds = time.getSeconds();

  const html = `<span>${hour}</span>:
  <span>${minute}</span>:
  <span>${seconds}</span>`;

  clock.innerHTML = html;
};

setInterval(GetTime, 1000);
