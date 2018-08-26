export default class Target {
  constructor(ctx){
    this.ctx = ctx;
    this.hit = false;
    this.radius = 25;
    this.canvasWidth = document.getElementById('canvas').width;
    this.pos = [this.canvasWidth/2, 75]
    this.hit = false;
    this.crashRocket = null;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI);
    this.ctx.fillStyle = '#ECECEC';
    this.ctx.fill();
    this.ctx.stroke();
  }

  collisionDetection(rocket) {
    const canvas = document.getElementById('canvas');
    const explosion = document.getElementById('explosion');


    if (rocket.pos[0] > this.pos[0] - this.radius &&
        rocket.pos[0] < this.pos[0] + this.radius &&
        rocket.pos[1] > this.pos[1] - this.radius &&
        rocket.pos[1] < this.pos[1] + this.radius
    ) {
      this.hit = true;
      this.crashRocket = rocket;
      explosion.style.top = `${canvas.offsetTop + 75 - 100}px`;
      explosion.style.left = `${canvas.offsetLeft + (this.canvasWidth/2) - 100}px`;
      explosion.style.visibility = "visible";
      setTimeout(function(){
        explosion.style.visibility = "hidden";
      }, 500);
      explosion
      return true;
    }
  }

}
