export default class Target {
  constructor(ctx){
    this.ctx = ctx;
    this.hit = false;
    this.radius = 25;
    // this.canvasHeight = document.getElementById('canvas').height;
    this.canvasWidth = document.getElementById('canvas').width;
    this.pos = [this.canvasWidth/2, 75]
    this.hit = false;
    // this.moon = new Image();
    // this.moonSrc = "../images/moon_sprite/moon-0000001.png";
    //
    // this.moonagain = this.sprite({
    //   context: this.ctx,
    //   width: 100,
    //   height: 100,
    //   image: this.moonSrc
    // });
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI);
    this.ctx.fillStyle = '#ECECEC';
    this.ctx.fill();
    this.ctx.stroke();
    // this.moonagain.render();
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

  // sprite(options) {
  //   var that = {};
  //
  //   that.context = options.context;
  //   that.width = options.width;
  //   that.height = options.height;
  //   that.image = options.image;
  //
  //   that.render = function () {
  //
  //       // Draw the animation
  //       that.context.drawImage(
  //          that.image,
  //          0,
  //          0,
  //          that.width,
  //          that.height,
  //          0,
  //          0,
  //          that.width,
  //          that.height);
  //   };
  //
  //   return that;
  // }


}
