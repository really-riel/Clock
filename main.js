const initApp = () => {
  const secondsHand = document.querySelector(".secondsHand");
  const minutesHand = document.querySelector(".minutesHand");
  const hoursHand = document.querySelector(".hoursHand");
  const digitalClockElem = document.querySelector(".digitalClock");
  const digitalClock = document.querySelector(".digitalClockCover");
  const analogClock = document.querySelector(".analogClockCover");
  const digitalClockBtn = document.querySelector(".digitalClockBtn");
  const analogClockBtn = document.querySelector(".analogClockBtn");
  const clockSelectElem = document.querySelector(".clockSelect");
  const closeBtnDigital = document.querySelector(".closeBtnDigital");
  const closeBtnAnalog = document.querySelector(".closeBtnAnalog");
  const getTime = () => {
    const now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let date = now.getDate();
    let day = now.getDay();
    let month = now.getMonth();
    let year = now.getFullYear();

    // Analog Clock

    const secondsInteval = 6 * seconds;
    const minutesInterval = 6 * minutes + secondsInteval / 60;
    const hoursInterval = 30 * hours + minutesInterval / 12;

    secondsHand.style.transform = `rotate(${secondsInteval}deg)`;
    minutesHand.style.transform = `rotate(${minutesInterval}deg)`;
    hoursHand.style.transform = `rotate(${hoursInterval}deg)`;

    // digital clock
    hours = hours > 12 ? hours - 12 : hours;

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;
    const months = [
      "January",
      "Feburary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December",
    ];

    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    const daySpecific = days[day - 1];
    const monthSpecific = months[month - 1];

    const html = `
    
    <p class="dayDetails">${daySpecific}, ${monthSpecific} ${date}, ${year}</p>
    <div class="cover">
        <p class="time">${hours}:${minutes}:${seconds}</p>
        <p class="pm">pm</p>
    
    `;

    digitalClockElem.innerHTML = html;
  };

  setInterval(getTime, 100);
  getTime();

  digitalClockBtn.addEventListener("click", () => {
    digitalClock.classList.add("block");
    clockSelectElem.classList.add("none");
  });
  analogClockBtn.addEventListener("click", () => {
    analogClock.classList.add("block");
    clockSelectElem.classList.add("none");
  });
  closeBtnDigital.addEventListener("click", () => {
    digitalClock.classList.remove("block");
    clockSelectElem.classList.remove("none");
  });
  closeBtnAnalog.addEventListener("click", () => {
    analogClock.classList.remove("block");
    clockSelectElem.classList.remove("none");
  });
};
document.addEventListener("DOMContentLoaded", initApp);
