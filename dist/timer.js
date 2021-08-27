
let startTime = null;
let stopTime = null;
let duration = 0;
let flag = false;
let startInterval = null;


document.querySelector(".timer-wrapper").addEventListener("click", () => {
  if (!flag) {
    startTimer();
    flag = true;
  }
  else {
    stopTimer();
    flag = false;
  }
});

document.querySelector(".timer-wrapper").addEventListener("dblclick", () => {
  resetTimer()
})

//To start the timer
const startTimer = () => {
  if (startTime === null) {
    startTime = new Date();
  }

  if (stopTime !== null) {
    duration += (new Date() + stopTime);
  }
  startInterval = setInterval(clockRunning, 10);
}

//stop the timer
const stopTimer = () => {
  stopTime = new Date();
  clearInterval(startInterval)
}


//setting the clock
const clockRunning = () => {
  let currentTime = new Date();
  let timeElapsed = new Date(currentTime - startTime - duration);

  let minutes = timeElapsed.getUTCMinutes();
  let seconds = timeElapsed.getUTCSeconds();
  let milliseconds = timeElapsed.getUTCMilliseconds();

  milliseconds = Math.floor(milliseconds / 10)

  document.querySelector("#display_timer").textContent =
    (minutes = minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds = seconds < 10 ? "0" + seconds : seconds) + ":" +
    (milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds);
}

const resetTimer = () => {
  clearInterval(startInterval);
  startTime = null;
  stopTime = null;
  duration = 0;
  document.querySelector("#display_timer").textContent = "00:00:00";
  flag = false;
}

