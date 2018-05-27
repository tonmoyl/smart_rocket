export const drawTime = (currentTime, interval) => {
  const newTime = currentTime + interval;
  const displayTime = `${currentTime/1000} s`
  document.getElementById("current-time").innerHTML = displayTime;
  return newTime;
}

export const appendTime = (currentTime) => {
  let timelog = document.getElementById("time-logger");
  let newLi = document.createElement('li');
  newLi.appendChild(document.createTextNode(`${currentTime/1000} s`));
  timelog.appendChild(newLi);
  return currentTime;
}
