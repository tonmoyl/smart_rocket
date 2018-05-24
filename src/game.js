import Rocket from './rocket';
import Barrier from './barrier';
import Target from './target';

export default class Game {
  constructor(ctx) {
    this.rocketLauncher = { height: 40, width: 40};
    this.canvasHeight = document.getElementById('canvas').height;
    this.canvasWidth = document.getElementById('canvas').width;
    this.totalRockets = 2;
    console.log("Coming from the game");
    this.rockets = {};
    this.ctx = ctx;
    this.draw = this.draw.bind(this);
    this.barrier = null;
    this.totalBarriers = 1;
    this.path = [];
    this.totalCollision = {};
    this.createRockets = this.createRockets.bind(this);
    this.target = new Target(ctx);
    this.additionalRockets = 3;
  }

  createRockets(ctx, startingPos) {
    if (startingPos) {
      for (var i = this.totalRockets; i < this.totalRockets + this.additionalRockets; i++) {
        let rocket = new Rocket(ctx);
        console.log(this.rockets);
        rocket.pos = [startingPos[0]-20,startingPos[1]+20];
        this.rockets[i] = rocket;
      }
      this.totalRockets = this.totalRockets + this.additionalRockets;

    } else {
      for (var i = 0; i < this.totalRockets; i++) {
        let rocket = new Rocket(ctx);
        this.rockets[i] = rocket;
      }
    }
  }

  createBarrier(ctx) {
    this.barrier = new Barrier(ctx);
  }

  drawRockets() {
    let rocketKeys = Object.keys(this.rockets);
    for (var i = 0; i < rocketKeys.length; i++) {
      let rocketPos;
      let currentKey = rocketKeys[i];
      debugger
      rocketPos = this.rockets[currentKey].pos;

      let collided = this.barrier.collisionDetection(this.rockets[currentKey]);
      if (
        // This stops the rockets from extending it outside of the canvas
        (rocketPos[0] > 0 &&
        rocketPos[0] < this.canvasWidth &&
        rocketPos[1] > 0 ) &&
        // this stops the rocket from extending past a barrier
        !collided
      ) {
        this.rockets[currentKey].launch();
      } else {
        this.totalCollision[currentKey] = this.rockets[currentKey];
        this.createRockets(this.ctx, this.rockets[currentKey].pos);
        delete this.rockets[currentKey];

      }
    }
  }



  drawBarrier() {
    this.barrier.draw();
  }

  drawTarget() {
    this.target.draw();
  }

  draw() {
    if (Object.keys(this.totalCollision).length >= 2500){
      this.rockets = {};
      this.rocketIds = [];
      this.path = [];
      this.totalCollision = {};

      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    this.drawRockets();
    this.drawTarget();
    this.drawBarrier();
  }

}
