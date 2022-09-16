// Time fields and button
refs = {
  dayElement: document.querySelector('.day'),
  hourElemen: document.querySelector('.hour'),
  minutesElemen: document.querySelector('.minutes'),
  secondsElemen: document.querySelector('.seconds'),
  millisecondsElemen: document.querySelector('.milliseconds'),

  buttonStart: document.querySelector('.start'),
  buttonPause: document.querySelector('.pause'),
  buttonStop: document.querySelector('.stop'),
  //   buttonNew: document.querySelector('.new'),
};
// Listeners
buttonStart.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

let hour = 00,
  minutes = 00,
  seconds = 00,
  milliseconds = 00,
  interval;

function setInterval() {
  milliseconds += 1;

  // Milliseconds

  if (milliseconds < 9) {
    millisecondsElemen.innerText = '0' + milliseconds;
  }
  if (milliseconds > 9) {
    millisecondsElemen.innerText = milliseconds;
  }
  if (milliseconds > 100) {
    secondsElemen.innerText = '0' + seconds;
    milliseconds = 0;
    millisecondsElemen.innerText = '0' + milliseconds;
  }

  // Seconds

  if (seconds < 9) {
    secondsElemen.innerText = '0' + seconds;
  }
  if (seconds > 9) {
    millisecondsElemen.innerText = seconds;
  }
  if (seconds > 59) {
    minutes += 1;
    minutesElemen.innerText = '0' + minutes;
    seconds = 0;
    secondsElemen.innerText = '0' + minutes;
  }

  // Minutes
  if (minutes < 9) {
    secondsElemen.innerText = '0' + minutes;
  }
  if (minutes > 9) {
    minutesElemen.innerText = seconds;
  }
  if (minutes > 59) {
    hour += 1;
    secondsElemen.innerText = '0' + minutes;
    minutesElemen.innerText = '0' + seconds;
  }
  // Hours
  if (hour < 9) {
    minutesElemen.innerText = '0' + hour;
  }
  if (hour > 9) {
    hourElemen.innerText = hour;
  }
  if (hour > 24) {
    day += 1;
    minutesElemen.innerText = '0' + hour;
    hourElemen.innerText = '0' + minutes;
  }
}
