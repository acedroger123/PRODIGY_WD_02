let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let lapCounter = 0;

function updateDisplay() {
  const time = new Date(elapsedTime);
  const minutes = String(time.getUTCMinutes()).padStart(2, '0');
  const seconds = String(time.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, '0');
  document.getElementById('time').textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 10);
  logAction("Started stopwatch");
}

function pauseStopwatch() {
  clearInterval(timerInterval);
  logAction("Paused stopwatch");
}

function resetStopwatch() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
  document.getElementById('lapList').innerHTML = '';
  lapCounter = 0;
  logAction("Reset stopwatch");
}

function recordLap() {
  lapCounter++;
  const lapTime = document.getElementById('time').textContent;
  const lapItem = document.createElement('li');
  lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
  document.getElementById('lapList').appendChild(lapItem);
  logAction(`Recorded Lap ${lapCounter}`);
}

function logAction(action) {
  const timeStamp = new Date().toLocaleTimeString();
  const actionItem = document.createElement('li');
  actionItem.textContent = `[${timeStamp}] ${action}`;
  document.getElementById('actionList').appendChild(actionItem);
}


