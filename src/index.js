import UTIL from "lodash";

document.addEventListener('DOMContentLoaded', () => {
  console.log("coming from index");
  var canvas = document.getElementById("canvas");
  canvas.style.border = "1px dotted red";
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(20, 20, 150, 100);
})
