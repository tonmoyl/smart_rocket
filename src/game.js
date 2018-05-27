import Rocket from './rocket';
import Barrier from './barrier';
import Target from './target';
import { drawTime, appendTime } from './time';


export default class Game {
  constructor(ctx) {
    this.rocketLauncher = { height: 40, width: 40};
    this.canvasHeight = document.getElementById('canvas').height;
    this.canvasWidth = document.getElementById('canvas').width;
    this.totalRockets = 2;
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
    this.time = 0;
    this.interval = 100;
    this.drawTime = drawTime.bind(this);
  }

  createRockets(ctx, startingPos, startingVel) {
    if (startingPos) {
      for (var i = this.totalRockets; i < this.totalRockets + this.additionalRockets; i++) {
        let rocket = new Rocket(ctx);
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
    this.barrier = new Barrier(ctx, [50,250]);
  }

  drawRockets() {
    let rocketKeys = Object.keys(this.rockets);
    for (var i = 0; i < rocketKeys.length; i++) {


      let rocketPos;
      let currentKey = rocketKeys[i];
      let currentRocket = this.rockets[currentKey];
      rocketPos = currentRocket.pos;
      // console.log(this.rockets[currentKey]);
      let collided = this.barrier.collisionDetection(currentRocket);
      let targetHit = this.target.collisionDetection(currentRocket);

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
        let newVelocity = currentRocket.vel;
        let newPosition = currentRocket.pos;
        currentRocket.pos = [newPosition[0] - newVelocity[0], newPosition[1] + newVelocity[1]];
        newPosition = currentRocket.pos;
        switch (collided) {
          case "left border":
          case "right border":
            newVelocity = [newVelocity[0]*-1, null];
            this.createRockets(this.ctx, newPosition, newVelocity);
            // this.createRockets(this.ctx, newPosition);

            // currentRocket.pos = [newPosition[0] - newVelocity[0], newPosition[1] - newVelocity[1]]
            break;
          case "top border":
          case "bottom border":
            // currentRocket.vel = [newVelocity[0],newVelocity[1]*-1]
            newVelocity = [null, newVelocity[1]*-1];
            this.createRockets(this.ctx, newPosition, newVelocity);
            break;
          default:
            console.log('collision')
            console.log(currentRocket.pos);
            console.log(currentRocket.vel);
            console.log(collided);

            // currentRocket.vel = [newVelocity[0]*-1,newVelocity[1]*-1];
            // newVelocity = [newVelocity[0]*-1, newVelocity[1]*-1];
            // this.createRockets(this.ctx, newPosition, newVelocity);
            let posX = currentRocket.pos[0];
            let posY = currentRocket.pos[1];
            let diameter = currentRocket.radius * 2;
            if (
              posX > collided.leftBarrier &&
              posX < collided.rightBarrier &&
              (posY < collided.bottomBarrier + diameter || posY > collided.topBarrier-diameter)
            ) {
              newVelocity = [null, newVelocity[1]*-1];
              this.createRockets(this.ctx, newPosition, newVelocity);
            } else {
              newVelocity = [newVelocity[0]*-1, null];
              this.createRockets(this.ctx, newPosition, newVelocity);
            }


            break;
        }
        currentRocket.vel = [0,0];
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
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    if (this.target.hit){
      console.log(this.target.hit)
      this.resetParams();
    }
    this.drawRockets();
    this.drawTarget();
    this.drawBarrier();
    this.time = this.drawTime(this.time, this.interval);

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
    appendTime(this.time);
    this.time = 0;

  }

}
