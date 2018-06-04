import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  var buttonStart = document.getElementById('buttonStart');
  var buttonEnd = document.getElementById('buttonEnd');
  var buttonResume = document.getElementById('buttonResume');
  var interval = 20;
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  let game = new Game(ctx, interval);
  game.createRockets(ctx);
  game.createBarrier(ctx);
  var gameStart = false;

  // var runSimulation = setInterval(game.draw, interval);
  let runSimulation;
  let startSimulation = () => {
    clearInterval(runSimulation);
    game = new Game(ctx, interval);
    game.createRockets(ctx);
    game.createBarrier(ctx);
    runSimulation = setInterval(game.draw, interval);
    gameStart = true;
  }

  let endSimulation = () => {
    clearInterval(runSimulation);
    gameStart = false;
  }

  let resumeSimulation = () => {
    if (!gameStart) {
      runSimulation = setInterval(game.draw, interval);
      gameStart = true;
    }
  }

  // startSimulation(game, ctx, interval);

  buttonStart.addEventListener('click', startSimulation);
  buttonEnd.addEventListener('click', endSimulation);
  buttonResume.addEventListener('click', resumeSimulation);

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
