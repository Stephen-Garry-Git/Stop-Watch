let startTime, updatedTime, difference, timerInterval;
let running = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function startTimer() {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    timerInterval = setInterval(updateTime, 10);
    running = true;
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  difference = new Date().getTime() - startTime;
  running = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  display.textContent = '00:00:00';
  difference = 0;
  running = false;
}

function updateTime() {
  updatedTime = new Date().getTime() - startTime;
  let milliseconds = parseInt((updatedTime % 1000) / 10);
  let seconds = parseInt((updatedTime / 1000) % 60);
  let minutes = parseInt((updatedTime / (1000 * 60)) % 60);

  display.textContent =
    (minutes < 10 ? '0' + minutes : minutes) + ':' +
    (seconds < 10 ? '0' + seconds : seconds) + ':' +
    (milliseconds < 10 ? '0' + milliseconds : milliseconds);
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
