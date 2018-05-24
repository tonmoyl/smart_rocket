import Game from './game';


document.addEventListener('DOMContentLoaded', () => {
  console.log("coming from index");


  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  let game = new Game(ctx);
  game.createRockets(ctx);
  game.createBarrier(ctx);

  setInterval(game.draw, 100);
})
