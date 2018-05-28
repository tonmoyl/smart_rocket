import Game from './game';


document.addEventListener('DOMContentLoaded', () => {


  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  let interval = 20;
  let game = new Game(ctx, interval);
  game.createRockets(ctx);
  game.createBarrier(ctx);

  setInterval(game.draw, interval);

})
