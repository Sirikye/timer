startBtn = document.querySelector(".start-btn");
resetBtn = document.querySelector(".reset-btn")


document.querySelector(".play-btn").addEventListener("click", () => {
  if (document.querySelector("i.fas").classList.contains("fa-play")) {
    if (!flag) {
      startTimer();
      flag = true;
    }
    document.querySelector(".reset-btn").classList.add("hide");
    document.querySelector(".play-btn").classList.remove("outer-shadow");
    document.querySelector(".play-btn").classList.add("inner-shadow");
    document.querySelector("i.fas").classList.remove("fa-play");
    document.querySelector("i.fas").classList.add("fa-stop");
  } else if (document.querySelector("i.fas").classList.contains("fa-stop")) {
    if (flag) {
      stopTimer();
      flag = false;
    }
    document.querySelector(".reset-btn").classList.remove("hide");
    document.querySelector(".play-btn").classList.remove("inner-shadow");
    document.querySelector(".play-btn").classList.add("outer-shadow");
    document.querySelector("i.fas").classList.add("fa-play");
    document.querySelector("i.fas").classList.remove("fa-stop");
  }
});

document.querySelector(".reset-btn").addEventListener("click", () => {
  resetTimer()
});


let startTime = null;
let stopTime = null;
let duration = 0;
let flag = false
let startInterval = null;

function startTimer() {

  if (startTime === null) {
    startTime = new Date();
  } else {
    resetTimer()
    startTime = new Date();
  }

  if (stopTime !== null) {
    duration += (new Date() + stopTime);
  }
  startInterval = setInterval(clockCounting, 10)
}

function stopTimer() {
  stopTime = new Date();
  clearInterval(startInterval)
}

function resetTimer() {
  clearInterval(startInterval);
  startTime = null;
  stopTime = null;
  duration = 0;
  document.querySelector("#display_timer").textContent = "00:00:00";
  flag = false;
}

function clockCounting() {
  let currentTime = new Date()
  let timeElapsed = new Date(currentTime - startTime - duration)

  let minutes = timeElapsed.getUTCMinutes();
  let seconds = timeElapsed.getUTCSeconds();
  let milliseconds = timeElapsed.getUTCMilliseconds();

  milliseconds = Math.floor(milliseconds / 10);

  document.querySelector("#display_timer").textContent =
    (minutes = minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds = seconds < 10 ? "0" + seconds : seconds) + ":" +
    (milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds);
}

