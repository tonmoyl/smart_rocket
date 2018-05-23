import Rocket from './rocket';

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
  }

  createRockets(ctx) {
    for (var i = 0; i < this.totalRockets; i++) {
      let rocket = new Rocket(ctx);
      this.rocketIds.push(i);
      this.rockets[i] = rocket;
    }
    console.log(this.rockets)

  }

  draw() {
    for (var i = 0; i < this.rocketIds.length; i++) {
      this.rockets[i].launch();
    }
  }

}
