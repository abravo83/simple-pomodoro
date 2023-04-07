// File for the logic of the clock

function startPomodoro() {
  let startTime = Date.now();

  document.querySelector('#pomodoro-btn').innerHTML = "Stop";
  document.querySelector('#pomodoro-btn').setAttribute("onClick", "stopPomodoro()");

  setInterval(() => {
    refreshDisplay(startTime);
    checkPomodoroPeriod(startTime);
  }, 1000);
}


function stopPomodoro() {
  var highestId = setInterval(";");
    for (var i = 0 ; i < highestId ; i++) {
    clearInterval(i); 
  }

  document.querySelector('#pomodoro-display').innerHTML = "00:00:00";
  document.querySelector('#label').innerHTML = "";

  document.querySelector('#pomodoro-btn').innerHTML = "Start";
  document.querySelector('#pomodoro-btn').setAttribute("onClick", "startPomodoro()");
}


function refreshDisplay(startTime) {
  document.querySelector('#pomodoro-display').innerHTML = getElapsedClockString(startTime);
}


function getElapsedClockString(startTime) {
  let result = "";
  
  let now = Date.now();
  
  
  let elapsedSecs = (now - startTime) / 1000;
  let elapsedMins = elapsedSecs / 60;
  let elapsedHours = elapsedMins / 60;

  let clockSecs = Math.floor(elapsedSecs % 60);
  let clockMins = Math.floor(elapsedMins % 60);
  let clockHours = Math.floor(elapsedHours % 24);
  
  if (clockSecs < 10) clockSecs = "0" + clockSecs;
  if (clockMins < 10) clockMins = "0" + clockMins;
  if (clockHours < 10) clockHours = "0" + clockHours;

  result = clockHours + ":" + clockMins + ":" + clockSecs;

  return result  
}


function checkPomodoroPeriod(startTime){
  let now = Date.now();
  if(((now - startTime)/1000/60) % 60 < 25 || ((now - startTime)/1000/60) % 60 > 30) { 
    setPomodoroPeriod("study")
  } else {
    setPomodoroPeriod("rest");
  }
  if(((now - startTime)/1000/60) % 60 < 55 || ((now - startTime)/1000/60) % 60 > 60) { 
    setPomodoroPeriod("study")
  } else {
    setPomodoroPeriod("rest");
  }
}

function setPomodoroPeriod(
  state) {
  if (state === "study") {
    document.querySelector('#label').innerHTML = "Is time to study";
  } else {
    document.querySelector('#label').innerHTML = "Is time to rest! - Move it!";
  }
}
