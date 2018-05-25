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
    this.target = new Target(ctx);
    this.additionalRockets = 2;
    this.createRockets = this.createRockets.bind(this);
    this.resetParams = this.resetParams.bind(this);
  }

  createRockets(ctx, startingPos, startingVel) {
    if (startingPos) {
      for (var i = this.totalRockets; i < this.totalRockets + this.additionalRockets; i++) {
        let rocket = new Rocket(ctx);
        console.log(this.totalRockets);
        rocket.pos = startingPos.slice();
        rocket.vel = rocket.generateRandomVelocityAll(6);
        if (startingVel[0]) { rocket.vel[0] = startingVel[0]}
        if (startingVel[1]) { rocket.vel[1] = startingVel[1]}
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
      rocketPos = this.rockets[currentKey].pos;
      // console.log(this.rockets[currentKey]);
      let collided = this.barrier.collisionDetection(this.rockets[currentKey]);
      let targetHit = this.target.collisionDetection(this.rockets[currentKey]);

      if (targetHit) {
        console.log(targetHit)
        return targetHit;
      }
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
        let newVelocity = this.rockets[currentKey].vel;
        let newPosition = this.rockets[currentKey].pos;
        this.rockets[currentKey].pos = [newPosition[0] - newVelocity[0], newPosition[1] + newVelocity[1]];
        newPosition = this.rockets[currentKey].pos;
        switch (collided) {
          case "left border":
          case "right border":
            newVelocity = [newVelocity[0]*-1, null];
            this.createRockets(this.ctx, newPosition, newVelocity);
            // this.createRockets(this.ctx, newPosition);

            // this.rockets[currentKey].pos = [newPosition[0] - newVelocity[0], newPosition[1] - newVelocity[1]]
            break;
          case "top border":
          case "bottom border":
            // this.rockets[currentKey].vel = [newVelocity[0],newVelocity[1]*-1]
            newVelocity = [null, newVelocity[0]*-1];
            this.createRockets(this.ctx, newPosition, newVelocity);
            break;
          case "collision":
            console.log('collision')
            // this.rockets[currentKey].vel = [newVelocity[0]*-1,newVelocity[1]*-1];
            break;
        }
        this.rockets[currentKey].vel = [0,0];
        // console.log(this.rockets);
        //
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
    if (this.target.hit){
      // this.rockets = {};
      // this.totalCollision = {};
      //
      // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      // this.target.hit = false;
      // this.totalRockets = 2;
      // this.createRockets(this.ctx);
      this.resetParams();
    }
    this.drawRockets();
    this.drawTarget();
    this.drawBarrier();
  }

  resetParams() {
    this.totalRockets = 2;
    this.rockets = {};
    this.totalCollision = {};
    this.additionalRockets = 2;
    this.target.hit = false;
    this.totalRockets = 2;
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    this.createRockets(this.ctx);
  }

}
