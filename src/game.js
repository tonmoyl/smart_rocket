import Rocket from './rocket';
import { generateRandomVelocity, generateRandomVelocityAll } from './rocket';
import Barrier from './barrier';
import Target from './target';
import { drawTime, appendTime } from './time';
import CrashRocket from './crash_rocket';


export default class Game {
  constructor(ctx, interval) {
    this.canvasHeight = document.getElementById('canvas').height;
    this.canvasWidth = document.getElementById('canvas').width;
    this.ctx = ctx;
    this.rockets = {};
    this.totalRockets = 2;
    this.additionalRockets = 2;
    this.barriers = {};
    this.target = new Target(ctx);
    this.time = 0;
    this.interval = interval;
    this.draw = this.draw.bind(this);
    this.createRockets = this.createRockets.bind(this);
    this.resetParams = this.resetParams.bind(this);
    this.drawBarriers = this.drawBarriers.bind(this);
    this.bestTime = false;
  }

  createRockets(ctx, startingPos, startingVel, parentRocket) {
    if (startingPos) {
      for (let i = this.totalRockets; i < this.totalRockets + this.additionalRockets; i++) {
        let rocket = new Rocket(ctx);
        rocket.addParent(parentRocket);
        rocket.pos = startingPos.slice();
        rocket.vel = generateRandomVelocityAll(5);
        if (startingVel[0]) {
          if (startingVel[0] < 0) {
            rocket.vel[0] = -1*Math.abs(rocket.vel[0]);
          } else {
            rocket.vel[0] = Math.abs(rocket.vel[0]);
          }
        }
        if (startingVel[1]) {
          if (startingVel[1] < 0) {
            rocket.vel[1] = -1*Math.abs(rocket.vel[1]);
          } else {
            rocket.vel[1] = Math.abs(rocket.vel[1]);
          }
        }
        this.rockets[i] = rocket;
      }
      this.totalRockets = this.totalRockets + this.additionalRockets;
    } else {
      for (var i = 0; i < this.totalRockets; i++) {
        let rocket = new Rocket(ctx);
        if (i % 2 === 0) { rocket.vel[0] *= -1}
        this.rockets[i] = rocket;
      }
    }
    if (this.crashRocket){
      this.ancestorPath = this.crashRocket.lineage();
      let rocket = new Rocket(this.ctx);
      rocket.vel = this.ancestorPath[0].vel;
      this.rockets[this.totalRockets] = rocket;
      rocket.color = '#6d201e'
      this.totalRockets += 1;
      rocket.ancestors = this.ancestorPath;
      this.crashRocketTurn = 0;
      this.crashRocket = false;
    }
  }

  createCrashRocket(currentRocket) {
    this.crashRocketTurn += 1;

    let originalRocket = this.ancestorPath[this.crashRocketTurn];
    originalRocket.color = '#6d201e';
    this.rockets[this.totalRockets] = originalRocket;
    this.rockets[this.totalRockets].pos = currentRocket.pos;
    this.rockets[this.totalRockets].ancestors = true;

    this.totalRockets += 1;
  }

  drawRockets() {
    let rocketKeys = Object.keys(this.rockets);
    let barrierKeys = Object.keys(this.barriers);

    for (let i = 0; i < rocketKeys.length; i++) {
      let currentRocket = this.rockets[rocketKeys[i]];
      currentRocket.launch();
      for (let j = 0; j < barrierKeys.length; j++) {
        let currentBarrier = this.barriers[barrierKeys[j]];

        let rocketPos = currentRocket.pos;
        let rocketVel = currentRocket.vel;
        let collided = currentBarrier.collisionDetection(currentRocket);
        let targetHit = this.target.collisionDetection(currentRocket);

        if (targetHit) {
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
        } else {
          delete this.rockets[rocketKeys[i]];
          currentRocket.pos = [rocketPos[0] - rocketVel[0], rocketPos[1] + rocketVel[1]];
          rocketPos = currentRocket.pos;
          let newRocketVel;
          if (currentRocket.ancestors) {
            this.createCrashRocket(currentRocket);
          } else {
            switch (collided) {
              case "left border":
              case "right border":
                newRocketVel = [rocketVel[0]*-1, null];
                break;
              case "top border":
              case "bottom border":
                newRocketVel = [null, rocketVel[1]*-1];
                break;
              default:
                let diameter = currentRocket.radius * 2;
                if (
                  rocketPos[0] > collided.leftBarrier &&
                  rocketPos[0] < collided.rightBarrier &&
                  (rocketPos[1] < collided.bottomBarrier + diameter ||
                    rocketPos[1] > collided.topBarrier-diameter)
                ) {
                  newRocketVel = [null, rocketVel[1]*-1];
                } else if (
                  rocketPos[1] > collided.topBarrier &&
                  rocketPos[1] < collided.bottomBarrier &&
                  (rocketPos[0] < collided.leftBarrier + diameter ||
                    rocketPos[0] > collided.rightBarrier-diameter)
                ) {
                  newRocketVel = [rocketVel[0]*-1, null];
                } else {
                  newRocketVel = [rocketVel[0]*-1,rocketVel[1]*-1];
                }
                break;
            }
            this.createRockets(this.ctx, rocketPos, newRocketVel, currentRocket);
          }
        }
      }
    }
  }

  createBarrier(ctx) {
    this.barrier = new Barrier(ctx, [this.canvasWidth/2,250]);
    this.barrier2 = new Barrier(ctx, [350,250]);
    this.barrier3 = new Barrier(ctx, [700,250]);
    this.barrier4 = new Barrier(ctx, [450,250]);
    this.barrier5 = new Barrier(ctx, [550,250]);
    this.barrier6 = new Barrier(ctx, [200,150]);
    this.barrier7 = new Barrier(ctx, [0,200]);
    this.barrier8 = new Barrier(ctx, [500,400]);
    this.barrier9 = new Barrier(ctx, [600,200]);
    this.barrier10 = new Barrier(ctx, [200,300]);
    this.barriers = {
      // 0: this.barrier,
      1: this.barrier2,
      2: this.barrier3,
      // 3: this.barrier4,
      // 4: this.barrier5,
      5: this.barrier6,
      6: this.barrier7,
      7: this.barrier8,
      8: this.barrier9,
      9: this.barrier10
    };
  }

  drawBarriers(ctx) {
    let barrierId = Object.keys(this.barriers);
    for (let i = 0; i < barrierId.length; i++) {
      const currentBarrier = this.barriers[barrierId[i]];

      currentBarrier.draw(this.ctx);
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    if (this.target.hit){
      if (!this.bestTime || this.time < this.bestTime) {
        appendTime(this.time);
        this.bestTime = this.time;
      }
      this.crashRocket = this.target.crashRocket;
      this.resetParams();
    } else if (this.totalRockets > 1000) {
      this.resetParams();
    }
    this.drawRockets();
    this.target.draw();
    this.time = drawTime(this.time, this.interval);
    this.drawBarriers(this.ctx)
  }

  resetParams() {
    this.totalRockets = 2;
    this.rockets = {};
    this.totalCollision = {};
    this.target.hit = false;
    this.totalRockets = 2;
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.createRockets(this.ctx);
    this.time = 0;
    this.crashRocketTurn = false;
  }

}
