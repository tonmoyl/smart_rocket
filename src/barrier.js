
export default class Barrier {
  constructor(ctx) {
    this.width = 600;
    this.height = 300;
    this.canvasHeight = document.getElementById('canvas').height;
    this.canvasWidth = document.getElementById('canvas').width;
    this.ctx = ctx;
    this.color = '#8D5406';
    this.pos = [20,20]
  };

  draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.pos[0],this.pos[1],this.width,this.height);
    this.ctx.stroke();
  }

  collisionDetection(rocket) {
    if (rocket.pos[0] > this.pos[0] &&
        rocket.pos[0] < this.pos[0] + this.width &&
        rocket.pos[1] > this.pos[1] &&
        rocket.pos[1] < this.pos[1] + this.height
    ) {
      console.log("collision happened");
      return true;
    } else {
      return false;
    }
  }
}
