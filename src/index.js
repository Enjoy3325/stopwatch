// Time fields and button
refs = {
  // Fields
  dayElement: document.querySelector('.day'),
  hourElemen: document.querySelector('.hour'),
  minutesElemen: document.querySelector('.minutes'),
  secondsElemen: document.querySelector('.seconds'),
  millisecondsElemen: document.querySelector('.milliseconds'),
  // Button
  buttonStart: document.querySelector('.start'),
  buttonPause: document.querySelector('.pause'),
  buttonStop: document.querySelector('.stop'),
  buttonNew: document.querySelector('.new'),
};
// Listeners
console.log(refs.buttonNew);
// Button Start
refs.buttonStart.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});
// Button Pause
refs.buttonPause.addEventListener('click', () => {
  clearInterval(interval);
});
// Button Stop
refs.buttonStop.addEventListener('click', () => {
  clearInterval(interval);
  clearFields();
  interval = setInterval(startTimer, 10);
  disabledButton();
});
// Button Results
refs.buttonNew.addEventListener('click', () => {
  clearInterval(interval);
  counter += 1;
  const results = document.querySelector('.results');
  const block = document.createElement('div');
  block.classList.add('.results__info');
  block.innerText = `Result: ${counter}: ${day}: ${hour}: ${minutes}: ${seconds}: ${milliseconds}`;

  results.append(block);
  clearFields();
  clearInterval(interval);
});

// Variables
let day = 00,
  hour = 00,
  minutes = 00,
  seconds = 00,
  milliseconds = 00,
  interval,
  counter = 0,
  disabled = true;

function startTimer() {
  milliseconds += 1;
}
function setInterval() {
  // Milliseconds

  if (milliseconds < 9) {
    refs.millisecondsElemen.innerText = '0' + milliseconds;
  }
  if (milliseconds > 9) {
    refs.millisecondsElemen.innerText = milliseconds;
  }
  if (milliseconds > 100) {
    refs.secondsElemen.innerText = '0' + seconds;
    milliseconds = 0;
    refs.millisecondsElemen.innerText = '0' + milliseconds;
  }

  // Seconds

  if (seconds < 9) {
    refs.secondsElemen.innerText = '0' + seconds;
  }
  if (seconds > 9) {
    refs.millisecondsElemen.innerText = seconds;
  }
  if (seconds > 59) {
    minutes += 1;
    refs.minutesElemen.innerText = '0' + minutes;
    seconds = 0;
    refs.secondsElemen.innerText = '0' + minutes;
  }

  // Minutes
  if (minutes < 9) {
    refs.secondsElemen.innerText = '0' + minutes;
  }
  if (minutes > 9) {
    refs.minutesElemen.innerText = seconds;
  }
  if (minutes > 59) {
    hour += 1;
    refs.secondsElemen.innerText = '0' + minutes;
    refs.minutesElemen.innerText = '0' + seconds;
  }
  // Hours
  if (hour < 9) {
    refs.minutesElemen.innerText = '0' + hour;
  }
  if (hour > 9) {
    refs.hourElemen.innerText = hour;
  }
  if (hour > 24) {
    day += 1;
    refs.minutesElemen.innerText = '0' + hour;
    refs.hourElemen.innerText = '0' + minutes;
  }
  refs.buttonNew.disabled = false;
}

function clearFields() {
  day = 00;
  hour = 00;
  minutes = 00;
  seconds = 00;
  milliseconds = 00;
  refs.dayElement.textContent = '00';
  refs.hourElemen.textContent = '00';
  refs.minutesElemen.textContent = '00';
  refs.secondsElemen.textContent = '00';
  refs.millisecondsElemen.textContent = '00';
}

function disabledButton() {
  if (disabled) {
    refs.buttonNew.disabled = true;
  }
}
disabledButton();
