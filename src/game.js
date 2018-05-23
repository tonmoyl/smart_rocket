import Rocket from './rocket';
import Barrier from './barrier';

export default class Game {
  constructor(ctx) {
    this.rocketLauncher = { height: 40, width: 40};
    this.canvasHeight = document.getElementById('canvas').height;
    this.canvasWidth = document.getElementById('canvas').width;
    this.totalRockets = 10;
    console.log("Coming from the game");
    this.rockets = {};
    this.ctx = ctx;
    this.draw = this.draw.bind(this);
    this.rocketIds = [];
    this.barrier = null;
    this.totalBarriers = 1;
  }

  createRockets(ctx) {
    for (var i = 0; i < this.totalRockets; i++) {
      let rocket = new Rocket(ctx);
      this.rocketIds.push(i);
      this.rockets[i] = rocket;
    }
  }

  createBarrier(ctx) {
    this.barrier = new Barrier(ctx);
  }

  drawRockets() {
    for (var i = 0; i < this.rocketIds.length; i++) {
      let rocketPos = this.rockets[i].pos;
      let collided = this.barrier.collisionDetection(this.rockets[i]);
      console.log(collided);
      if (
        // This stops the rockets from extending it outside of the canvas
        // (rocketPos[0] > 0 &&
        // rocketPos[0] < this.canvasWidth &&
        // rocketPos[1] > 0 ) ||
        !collided
        // this stops the rocket from extending past a barrier
      ) {
        this.rockets[i].launch();

      } else {
      }
    }
  }

  drawBarrier() {
    this.barrier.draw();
  }

  draw() {
    this.drawRockets();
    this.drawBarrier();
  }

}
