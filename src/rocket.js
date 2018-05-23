

export default class Rocket {
  constructor(ctx) {
    console.log("Coming from the rocket")
    this.height = 30;
    this.weight = 10;
    this.canvasHeight = document.getElementById('canvas').height;
    this.canvasWidth = document.getElementById('canvas').width;
    this.pos = [this.canvasWidth/2, this.canvasHeight];
    this.ctx = ctx;
    this.vel = this.generateRandomVelocity(5);
    this.color = this.getRandomColor();

  }

  launch() {
    // this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.ctx.beginPath();
    this.ctx.arc(this.pos[0], this.pos[1]-50, 10, 0, Math.PI*2);
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

  generateRandomVelocity(factor) {
    let dx = Math.floor(Math.random() * 1000);
    let dy = Math.sqrt(1000000-(dx**2));
    if (dx % 2) {dx = dx * -1};
    return [(dx/1000) * factor, (dy/1000) * factor];
  }
}
