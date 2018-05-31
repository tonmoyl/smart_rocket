

export default class Rocket {
  constructor(ctx) {
    this.parent = null;
    this.children = [];
    this.radius = 7;
    this.canvasHeight = document.getElementById('canvas').height;
    this.canvasWidth = document.getElementById('canvas').width;
    this.pos = [this.canvasWidth/2, this.canvasHeight];
    this.ctx = ctx;
    this.vel = generateRandomVelocity(5);
    this.color = this.getRandomColor();
    this.distanceToTarget = 0;
    this.findTargetDistance = this.findTargetDistance.bind(this);
    this.height = 30;
    this.width = 10;
    this.path = [];
  }

  addParent(parent) {
    if (this.parent === parent) { return }
    this.parent = parent;
    if (this.parent) {
      this.parent.children.push(this);
    }
    // this.parent.children.push(this);
  }

  lineage() {
    let currentRocket = this;
    while (currentRocket.parent) {
      this.path.push(currentRocket);
      currentRocket = currentRocket.parent;
    }
    return this.path;
    // console.log(currentRocket);
  }

  findTargetDistance(target) {
    this.distanceToTarget = Math.sqrt((target.pos[0]-this.pos[0])**2 + (target.pos[1]-this.pos[1])**2)
    return this.distanceToTarget;
  }

  launch() {
    // this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.ctx.beginPath();
    this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI*2);
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

export const generateRandomVelocity = function(factor) {
  let dx = Math.random() * factor;
  let dy = Math.sqrt(factor**2-(dx**2));
  return [dx,dy];
}

export const generateRandomVelocityAll = function(factor) {
  let dx = Math.random();
  let dy = Math.sqrt(1-(dx**2));
  dx = Math.floor(dx*1000); dy = Math.floor(dy*1000);
  if (dx%2 === 0) { dx *= -1};
  if (dy%2 === 0) { dy *= -1};

  const vel = [(dx/1000) * factor, (dy/1000) * factor];
  return vel;
}
