import Rocket from './rocket';
import { generateRandomVelocity, generateRandomVelocityAll } from './rocket';
import Barrier from './barrier';
import Target from './target';
import { drawTime, appendTime } from './time';


export default class Game {
  constructor(ctx, interval) {
    this.canvasHeight = document.getElementById('canvas').height;
    this.canvasWidth = document.getElementById('canvas').width;
    this.ctx = ctx;
    this.rocketLauncher = { height: 40, width: 40};
    this.rockets = {};
    this.totalRockets = 2;
    this.additionalRockets = 2;
    this.barriers = {};
    this.totalBarriers = 1;
    this.target = new Target(ctx);
    this.time = 0;
    this.interval = interval;
    this.draw = this.draw.bind(this);
    this.createRockets = this.createRockets.bind(this);
    this.resetParams = this.resetParams.bind(this);
    this.drawBarriers = this.drawBarriers.bind(this);
  }

  createRockets(ctx, startingPos, startingVel) {
    if (startingPos) {
      for (let i = this.totalRockets; i < this.totalRockets + this.additionalRockets; i++) {
        let rocket = new Rocket(ctx);
        rocket.pos = startingPos.slice();
        rocket.vel = generateRandomVelocityAll(5);

        if (startingVel[0]) { rocket.vel[0] = startingVel[0]}
        if (startingVel[1]) { rocket.vel[1] = startingVel[1]}
        // if (!startingVel[0]) { rocket.vel[1] *= -1}
        // if (!startingVel[1]) { rocket.vel[0] *= -1}
        this.rockets[i] = rocket;
        debugger
      }
      this.totalRockets = this.totalRockets + this.additionalRockets;
    } else {
      for (var i = 0; i < this.totalRockets; i++) {
        let rocket = new Rocket(ctx);
        if (i % 2 === 0) { rocket.vel[0] *= -1}
        this.rockets[i] = rocket;
      }
    }
  }

  drawRockets() {
    let rocketKeys = Object.keys(this.rockets);
    let barrierKeys = Object.keys(this.barriers);

    for (let i = 0; i < rocketKeys.length; i++) {
      for (let j = 0; j < barrierKeys.length; j++) {
        let currentBarrier = this.barriers[barrierKeys[j]];

        let currentRocket = this.rockets[rocketKeys[i]];
        let rocketPos = currentRocket.pos;
        let rocketVel = currentRocket.vel;
        let collided = currentBarrier.collisionDetection(currentRocket);
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
          currentRocket.launch();
        } else {
          currentRocket.pos = [rocketPos[0] - rocketVel[0], rocketPos[1] + rocketVel[1]];
          rocketPos = currentRocket.pos;
          switch (collided) {
            case "left border":
            case "right border":
              rocketVel = [rocketVel[0]*-1, null];
              break;
            case "top border":
            case "bottom border":
              rocketVel = [null, rocketVel[1]*-1];
              break;
            default:
              let diameter = currentRocket.radius * 2;
              if (
                rocketPos[0] > collided.leftBarrier &&
                rocketPos[0] < collided.rightBarrier &&
                (rocketPos[1] < collided.bottomBarrier + diameter ||
                  rocketPos[1] > collided.topBarrier-diameter)
              ) {
                rocketVel = [null, rocketVel[1]*-1];
              } else if (
                rocketPos[1] > collided.topBarrier &&
                rocketPos[1] < collided.bottomBarrier &&
                (rocketPos[0] < collided.leftBarrier + diameter ||
                  rocketPos[0] > collided.rightBarrier-diameter)
              ) {
                rocketVel = [rocketVel[0]*-1, null];
              } else {
                rocketVel = [0,0];
              }
              break;
          }
          this.createRockets(this.ctx, rocketPos, rocketVel);
          currentRocket.vel = [0,0];
        }
      }
    }
  }

  createBarrier(ctx) {
    this.barrier = new Barrier(ctx, [this.canvasWidth/2,250]);
    this.barrier2 = new Barrier(ctx, [0,250]);
    this.barrier3 = new Barrier(ctx, [700,250]);
    this.barriers = {0: this.barrier};
  }

  drawBarriers(ctx) {
    let barrierId = Object.keys(this.barriers);
    for (let i = 0; i < barrierId.length; i++) {
      const currentBarrier = this.barriers[barrierId[i]];

      currentBarrier.draw(this.ctx);
      console.log(currentBarrier)
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    if (this.target.hit){
      console.log(this.target.hit)
      this.resetParams();
    }
    this.drawRockets();
    this.target.draw();
    this.barrier.draw(this.ctx);
    this.time = drawTime(this.time, this.interval);
    this.drawBarriers(this.ctx)
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
