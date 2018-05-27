


const drawTime = (currentTime, interval) => {
  const newTime = currentTime + interval;
  const displayTime = `${currentTime/1000} s`
  document.getElementById("current-time").innerHTML = displayTime;
  return newTime;
}

export default drawTime;
