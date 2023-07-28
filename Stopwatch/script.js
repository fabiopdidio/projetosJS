let seconds = 0;
let minutes = 0;
let hours = 0;
let displayTime = document.getElementById("displayTime");
let timer = null;

function formatTime(value) {
  return value.toString().padStart(2, "0");
}

function updateDisplay() {
  let h = formatTime(hours);
  let m = formatTime(minutes);
  let s = formatTime(seconds);
  displayTime.innerHTML = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}

function watchStop() {
  clearInterval(timer);
  timer = null;
}

function watchReset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
}
