
export default class Barrier {
  constructor(ctx, pos) {
    this.width = 50;
    this.height = 50;
    this.canvasHeight = document.getElementById('canvas').height;
    this.canvasWidth = document.getElementById('canvas').width;
    this.ctx = ctx;
    this.color = '#8D5406';
    let [posX, posY] = pos;
    this.pos = [posX, posY];
    this.area = {
      leftBarrier: posX,
      rightBarrier: posX+this.width,
      topBarrier: posY,
      bottomBarrier: posY+this.height
    };
  };

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = '#ECECEC';
    this.ctx.fillRect(this.pos[0],this.pos[1],this.width,this.height);

    this.ctx.stroke();
  }

  collisionDetection(rocket) {
    if (rocket.pos[0] < 0) {
      return "left border";
    } else if (rocket.pos[0] > this.canvasWidth) {
      return "right border";
    } else if (rocket.pos[1] < 0) {
      return "top border";
    } else if (rocket.pos[1] > this.canvasHeight) {
      return "bottom border";
    } else if (rocket.pos[0] + rocket.radius > this.pos[0] &&
        rocket.pos[0] - rocket.radius < this.pos[0] + this.width &&
        rocket.pos[1] + rocket.radius > this.pos[1] &&
        rocket.pos[1] - rocket.radius < this.pos[1] + this.height
    ) {
      return this.area;
    } else {
      return false;
    }
    // if (rocket.pos[0] - rocket.radius > this.pos[0] &&
    //     rocket.pos[0] - rocket.radius < this.pos[0] + this.width &&
    //     rocket.pos[1] - rocket.radius > this.pos[1] &&
    //     rocket.pos[1] - rocket.radius < this.pos[1] + this.height + 40
    // ) {
    //
    //   rocket.lastPos.push(rocket.pos)
    //   rocket.lastVel.push(this.vel);
    //   return true;
    // } else {
    //   return false;
    // }
  }
}
