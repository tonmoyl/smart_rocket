

export default class Rocket {
  constructor(ctx) {
    console.log("Coming from the rocket")
    this.height = 30;
    this.weight = 10;
    this.canvasHeight = document.getElementById('canvas').height;
    this.canvasWidth = document.getElementById('canvas').width;
    this.pos = [this.canvasHeight/2, this.canvasWidth];
    this.ctx = ctx;
    this.dx = Math.random()*10;
    this.dy = Math.random()*10;
    this.vel = [this.dx, this.dy];
    this.color = this.getRandomColor();
  }

  launch() {
    // this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.ctx.beginPath();
    this.ctx.arc(this.pos[0], this.pos[1]-200, 10, 0, Math.PI*2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
    this.pos[0] += this.vel[0];
    this.pos[1] -= this.vel[1];
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
