import Game from './game';


document.addEventListener('DOMContentLoaded', () => {


  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  let game = new Game(ctx, 0);
  game.createRockets(ctx);
  game.createBarrier(ctx);

  setInterval(game.draw, 10);

})
