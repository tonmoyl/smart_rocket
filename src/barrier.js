
export default class Barrier {
  constructor(ctx, target) {
    this.width = 40;
    this.height = 10;
    this.canvasHeight = document.getElementById('canvas').height;
    this.canvasWidth = document.getElementById('canvas').width;
    this.ctx = ctx;
    this.color = '#8D5406';
    this.pos = [30,300];
  };

  draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.pos[0],this.pos[1],this.width,this.height);
    this.ctx.stroke();
  }

  collisionDetection(rocket) {
    if (rocket.pos[0] - rocket.radius > this.pos[0] &&
        rocket.pos[0] - rocket.radius < this.pos[0] + this.width &&
        rocket.pos[1] - rocket.radius > this.pos[1] &&
        rocket.pos[1] - rocket.radius < this.pos[1] + this.height + 40
    ) {

      rocket.lastPos.push(rocket.pos)
      rocket.lastVel.push(this.vel);
      return true;
    } else {
      return false;
    }
  }
}
