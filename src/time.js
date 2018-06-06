export const drawTime = (currentTime, interval) => {
  const newTime = currentTime + interval;
  let displayTime = currentTime/1000;
  displayTime = displayTime.toFixed(2);
  displayTime = `${displayTime} s`
  document.getElementById("current-time").innerHTML = displayTime;
  return newTime;
}

export const appendTime = (currentTime) => {
  let timelog = document.getElementById("time-logger");
  let bestTime = document.getElementById("best-value");
  let newLi = document.createElement('li');
  let displayTime = currentTime/1000;
  displayTime = displayTime.toFixed(2);
  bestTime.innerHTML = `${displayTime} s`;
  newLi.appendChild(document.createTextNode(`${displayTime} s`));
  timelog.appendChild(newLi);
  return currentTime;
}
