import UTIL from "lodash";
import Game from './game';


document.addEventListener('DOMContentLoaded', () => {
  console.log("coming from index");
  let game = new Game(ctx);


  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  game.createRockets(ctx);
  game.createBarrier(ctx);

  setInterval(game.draw, 10);
})
