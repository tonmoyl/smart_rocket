export default class Target {
  constructor(ctx){
    this.ctx = ctx;
    this.hit = false;
    this.radius = 25;
    // this.canvasHeight = document.getElementById('canvas').height;
    this.canvasWidth = document.getElementById('canvas').width;
    this.pos = [this.canvasWidth/2,75]
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI);
    this.ctx.stroke();
  }
}
