export default class Target {
  constructor(ctx){
    this.ctx = ctx;
    this.hit = false;
    this.radius = 25;
    // this.canvasHeight = document.getElementById('canvas').height;
    this.canvasWidth = document.getElementById('canvas').width;
    this.pos = [this.canvasWidth/2, 75]
    this.hit = false;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI);
    this.ctx.stroke();
  }

  collisionDetection(rocket) {
    if (rocket.pos[0] > this.pos[0] - this.radius &&
        rocket.pos[0] < this.pos[0] + this.radius &&
        rocket.pos[1] > this.pos[1] - this.radius &&
        rocket.pos[1] < this.pos[1] + this.radius
    ) {
      this.hit = true;
      console.log("collision with target");
      return true;
    }
  }
}
