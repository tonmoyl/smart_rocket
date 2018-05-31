import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  var buttonStart = document.getElementById('buttonStart');
  var buttonEnd = document.getElementById('buttonEnd');
  var interval = 20;
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  let game = new Game(ctx, interval);
  game.createRockets(ctx);
  game.createBarrier(ctx);
  var gameStart = true;

  var runSimulation = setInterval(game.draw, interval);
  let startSimulation = () => {
    if (!gameStart) {
      game = new Game(ctx, interval);
      game.createRockets(ctx);
      game.createBarrier(ctx);
      runSimulation = setInterval(game.draw, interval);
      gameStart = true;
    }
  }
  let endSimulation = () => {
    clearInterval(runSimulation);
    gameStart = false;
  }

  // startSimulation(game, ctx, interval);

  buttonStart.addEventListener('click', startSimulation);
  buttonEnd.addEventListener('click', endSimulation);
});




// let endSimulation = () => {
//   console.log(runSimulation);
//   clearInterval(runSimulation);
// }


// document.addEventListener('DOMContentLoaded', () => {
//
//
//   var canvas = document.getElementById("canvas");
//   var ctx = canvas.getContext("2d");
//   let interval = 20;
//   let game = new Game(ctx, interval);
//   game.createRockets(ctx);
//   game.createBarrier(ctx);
//
//   setInterval(game.draw, interval);
// })
