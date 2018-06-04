/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/barrier.js":
/*!************************!*\
  !*** ./src/barrier.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Barrier; });\n\nclass Barrier {\n  constructor(ctx, pos) {\n    this.width = 100;\n    this.height = 100;\n    this.canvasHeight = document.getElementById('canvas').height;\n    this.canvasWidth = document.getElementById('canvas').width;\n    this.ctx = ctx;\n    this.color = '#8D5406';\n    let [posX, posY] = pos;\n    this.pos = [posX, posY];\n    this.area = {\n      leftBarrier: posX,\n      rightBarrier: posX + this.width,\n      topBarrier: posY,\n      bottomBarrier: posY + this.height\n    };\n  }\n\n  draw() {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = '#ECECEC';\n    this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);\n\n    this.ctx.stroke();\n  }\n\n  collisionDetection(rocket) {\n    if (rocket.pos[0] < 0) {\n      return \"left border\";\n    } else if (rocket.pos[0] > this.canvasWidth) {\n      return \"right border\";\n    } else if (rocket.pos[1] < 0) {\n      return \"top border\";\n    } else if (rocket.pos[1] > this.canvasHeight) {\n      return \"bottom border\";\n    } else if (rocket.pos[0] + rocket.radius > this.area.leftBarrier && rocket.pos[0] - rocket.radius < this.area.rightBarrier && rocket.pos[1] - rocket.radius < this.area.bottomBarrier && rocket.pos[1] + rocket.radius > this.area.topBarrier) {\n      return this.area;\n    } else {\n      return false;\n    }\n    // if (rocket.pos[0] - rocket.radius > this.pos[0] &&\n    //     rocket.pos[0] - rocket.radius < this.pos[0] + this.width &&\n    //     rocket.pos[1] - rocket.radius > this.pos[1] &&\n    //     rocket.pos[1] - rocket.radius < this.pos[1] + this.height + 40\n    // ) {\n    //\n    //   rocket.lastPos.push(rocket.pos)\n    //   rocket.lastVel.push(this.vel);\n    //   return true;\n    // } else {\n    //   return false;\n    // }\n  }\n}\n\n//# sourceURL=webpack:///./src/barrier.js?");

/***/ }),

/***/ "./src/crash_rocket.js":
/*!*****************************!*\
  !*** ./src/crash_rocket.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CrashRocket; });\n/* harmony import */ var _rocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rocket */ \"./src/rocket.js\");\n\n\nclass CrashRocket extends _rocket__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(ctx, lineage) {\n    super(ctx);\n    this.lineage = lineage;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/crash_rocket.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _rocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rocket */ \"./src/rocket.js\");\n/* harmony import */ var _barrier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barrier */ \"./src/barrier.js\");\n/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./target */ \"./src/target.js\");\n/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time */ \"./src/time.js\");\n/* harmony import */ var _crash_rocket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crash_rocket */ \"./src/crash_rocket.js\");\n\n\n\n\n\n\n\nclass Game {\n  constructor(ctx, interval) {\n    this.canvasHeight = document.getElementById('canvas').height;\n    this.canvasWidth = document.getElementById('canvas').width;\n    this.ctx = ctx;\n    this.rockets = {};\n    this.totalRockets = 2;\n    this.additionalRockets = 2;\n    this.barriers = {};\n    this.target = new _target__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx);\n    this.time = 0;\n    this.interval = interval;\n    this.draw = this.draw.bind(this);\n    this.createRockets = this.createRockets.bind(this);\n    this.resetParams = this.resetParams.bind(this);\n    this.drawBarriers = this.drawBarriers.bind(this);\n  }\n\n  createRockets(ctx, startingPos, startingVel, parentRocket) {\n    if (startingPos) {\n      for (let i = this.totalRockets; i < this.totalRockets + this.additionalRockets; i++) {\n        let rocket = new _rocket__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n        rocket.addParent(parentRocket);\n        rocket.pos = startingPos.slice();\n        rocket.vel = Object(_rocket__WEBPACK_IMPORTED_MODULE_0__[\"generateRandomVelocityAll\"])(5);\n        if (startingVel[0]) {\n          if (startingVel[0] < 0) {\n            rocket.vel[0] = -1 * Math.abs(rocket.vel[0]);\n          } else {\n            rocket.vel[0] = Math.abs(rocket.vel[0]);\n          }\n        }\n        if (startingVel[1]) {\n          if (startingVel[1] < 0) {\n            rocket.vel[1] = -1 * Math.abs(rocket.vel[1]);\n          } else {\n            rocket.vel[1] = Math.abs(rocket.vel[1]);\n          }\n        }\n        this.rockets[i] = rocket;\n      }\n      this.totalRockets = this.totalRockets + this.additionalRockets;\n    } else {\n      for (var i = 0; i < this.totalRockets; i++) {\n        let rocket = new _rocket__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n        console.log(rocket);\n        if (i % 2 === 0) {\n          rocket.vel[0] *= -1;\n        }\n        this.rockets[i] = rocket;\n      }\n    }\n    if (this.crashRocket) {\n      this.ancestorPath = this.crashRocket.lineage();\n      let rocket = new _rocket__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx);\n      rocket.vel = this.ancestorPath[0].vel;\n      this.rockets[this.totalRockets] = rocket;\n      this.totalRockets += 1;\n      rocket.ancestors = this.ancestorPath;\n      this.crashRocketTurn = 0;\n      this.crashRocket = false;\n    }\n  }\n\n  createCrashRocket(currentRocket) {\n    this.crashRocketTurn += 1;\n\n    let originalRocket = this.ancestorPath[this.crashRocketTurn];\n    this.rockets[this.totalRockets] = originalRocket;\n    this.rockets[this.totalRockets].pos = currentRocket.pos;\n    this.rockets[this.totalRockets].ancestors = true;\n\n    this.totalRockets += 1;\n  }\n\n  drawRockets() {\n    let rocketKeys = Object.keys(this.rockets);\n    let barrierKeys = Object.keys(this.barriers);\n\n    for (let i = 0; i < rocketKeys.length; i++) {\n      let currentRocket = this.rockets[rocketKeys[i]];\n      currentRocket.launch();\n      for (let j = 0; j < barrierKeys.length; j++) {\n        let currentBarrier = this.barriers[barrierKeys[j]];\n\n        let rocketPos = currentRocket.pos;\n        let rocketVel = currentRocket.vel;\n        let collided = currentBarrier.collisionDetection(currentRocket);\n        let targetHit = this.target.collisionDetection(currentRocket);\n\n        if (targetHit) {\n          return targetHit;\n        }\n\n        if (\n        // This stops the rockets from extending it outside of the canvas\n        rocketPos[0] > 0 && rocketPos[0] < this.canvasWidth && rocketPos[1] > 0 &&\n        // this stops the rocket from extending past a barrier\n        !collided) {} else {\n          delete this.rockets[rocketKeys[i]];\n          currentRocket.pos = [rocketPos[0] - rocketVel[0], rocketPos[1] + rocketVel[1]];\n          rocketPos = currentRocket.pos;\n          let newRocketVel;\n          if (currentRocket.ancestors) {\n            console.log(currentRocket);\n            this.createCrashRocket(currentRocket);\n          } else {\n            switch (collided) {\n              case \"left border\":\n              case \"right border\":\n                newRocketVel = [rocketVel[0] * -1, null];\n                break;\n              case \"top border\":\n              case \"bottom border\":\n                newRocketVel = [null, rocketVel[1] * -1];\n                break;\n              default:\n                let diameter = currentRocket.radius * 2;\n                if (rocketPos[0] > collided.leftBarrier && rocketPos[0] < collided.rightBarrier && (rocketPos[1] < collided.bottomBarrier + diameter || rocketPos[1] > collided.topBarrier - diameter)) {\n                  newRocketVel = [null, rocketVel[1] * -1];\n                } else if (rocketPos[1] > collided.topBarrier && rocketPos[1] < collided.bottomBarrier && (rocketPos[0] < collided.leftBarrier + diameter || rocketPos[0] > collided.rightBarrier - diameter)) {\n                  newRocketVel = [rocketVel[0] * -1, null];\n                } else {\n                  newRocketVel = [rocketVel[0] * -1, rocketVel[1] * -1];\n                }\n                break;\n            }\n            this.createRockets(this.ctx, rocketPos, newRocketVel, currentRocket);\n          }\n        }\n      }\n    }\n  }\n\n  createBarrier(ctx) {\n    this.barrier = new _barrier__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, [this.canvasWidth / 2, 250]);\n    this.barrier2 = new _barrier__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, [350, 250]);\n    this.barrier3 = new _barrier__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, [700, 250]);\n    this.barrier4 = new _barrier__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, [450, 250]);\n    this.barrier5 = new _barrier__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, [550, 250]);\n    this.barrier6 = new _barrier__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, [200, 150]);\n    this.barrier7 = new _barrier__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, [0, 200]);\n    this.barrier8 = new _barrier__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, [500, 400]);\n    this.barrier9 = new _barrier__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, [600, 200]);\n    this.barrier10 = new _barrier__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, [200, 300]);\n    this.barriers = {\n      // 0: this.barrier,\n      1: this.barrier2,\n      2: this.barrier3,\n      // 3: this.barrier4,\n      // 4: this.barrier5,\n      5: this.barrier6,\n      6: this.barrier7,\n      7: this.barrier8,\n      8: this.barrier9,\n      9: this.barrier10\n    };\n  }\n\n  drawBarriers(ctx) {\n    let barrierId = Object.keys(this.barriers);\n    for (let i = 0; i < barrierId.length; i++) {\n      const currentBarrier = this.barriers[barrierId[i]];\n\n      currentBarrier.draw(this.ctx);\n    }\n  }\n\n  draw() {\n    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);\n    if (this.target.hit) {\n      Object(_time__WEBPACK_IMPORTED_MODULE_3__[\"appendTime\"])(this.time);\n      this.crashRocket = this.target.crashRocket;\n      this.resetParams();\n    } else if (this.totalRockets > 1000) {\n      this.resetParams();\n    }\n    this.drawRockets();\n    this.target.draw();\n    this.time = Object(_time__WEBPACK_IMPORTED_MODULE_3__[\"drawTime\"])(this.time, this.interval);\n    this.drawBarriers(this.ctx);\n  }\n\n  resetParams() {\n    this.totalRockets = 2;\n    this.rockets = {};\n    this.totalCollision = {};\n    this.target.hit = false;\n    this.totalRockets = 2;\n    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);\n    this.createRockets(this.ctx);\n    this.time = 0;\n    this.crashRocketTurn = false;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  var buttonStart = document.getElementById('buttonStart');\n  var buttonEnd = document.getElementById('buttonEnd');\n  var buttonResume = document.getElementById('buttonResume');\n  var interval = 20;\n  var canvas = document.getElementById(\"canvas\");\n  var ctx = canvas.getContext(\"2d\");\n  let game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, interval);\n  game.createRockets(ctx);\n  game.createBarrier(ctx);\n  var gameStart = false;\n\n  // var runSimulation = setInterval(game.draw, interval);\n  let runSimulation;\n  let startSimulation = () => {\n    clearInterval(runSimulation);\n    game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, interval);\n    game.createRockets(ctx);\n    game.createBarrier(ctx);\n    runSimulation = setInterval(game.draw, interval);\n    gameStart = true;\n  };\n\n  let endSimulation = () => {\n    clearInterval(runSimulation);\n    gameStart = false;\n  };\n\n  let resumeSimulation = () => {\n    if (!gameStart) {\n      runSimulation = setInterval(game.draw, interval);\n      gameStart = true;\n    }\n  };\n\n  // startSimulation(game, ctx, interval);\n\n  buttonStart.addEventListener('click', startSimulation);\n  buttonEnd.addEventListener('click', endSimulation);\n  buttonResume.addEventListener('click', resumeSimulation);\n});\n\n// let endSimulation = () => {\n//   console.log(runSimulation);\n//   clearInterval(runSimulation);\n// }\n\n\n// document.addEventListener('DOMContentLoaded', () => {\n//\n//\n//   var canvas = document.getElementById(\"canvas\");\n//   var ctx = canvas.getContext(\"2d\");\n//   let interval = 20;\n//   let game = new Game(ctx, interval);\n//   game.createRockets(ctx);\n//   game.createBarrier(ctx);\n//\n//   setInterval(game.draw, interval);\n// })\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/rocket.js":
/*!***********************!*\
  !*** ./src/rocket.js ***!
  \***********************/
/*! exports provided: default, generateRandomVelocity, generateRandomVelocityAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Rocket; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateRandomVelocity\", function() { return generateRandomVelocity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateRandomVelocityAll\", function() { return generateRandomVelocityAll; });\n\n\nclass Rocket {\n  constructor(ctx) {\n    this.parent = null;\n    this.children = [];\n    this.radius = 7;\n    this.canvasHeight = document.getElementById('canvas').height;\n    this.canvasWidth = document.getElementById('canvas').width;\n    this.pos = [this.canvasWidth / 2, this.canvasHeight];\n    this.ctx = ctx;\n    this.vel = generateRandomVelocity(5);\n    this.color = this.getRandomColor();\n    this.distanceToTarget = 0;\n    this.findTargetDistance = this.findTargetDistance.bind(this);\n    this.height = 30;\n    this.width = 10;\n    this.path = [];\n  }\n\n  addParent(parent) {\n    if (this.parent === parent) {\n      return;\n    }\n    this.parent = parent;\n    if (this.parent) {\n      this.parent.children.push(this);\n    }\n    // this.parent.children.push(this);\n  }\n\n  lineage() {\n    let currentRocket = this;\n    while (currentRocket.parent) {\n      this.path.unshift(currentRocket);\n      currentRocket = currentRocket.parent;\n    }\n    this.path.unshift(currentRocket);\n    // this.path.unshift(currentRocket);\n    return this.path;\n    // console.log(currentRocket);\n  }\n\n  findTargetDistance(target) {\n    this.distanceToTarget = Math.sqrt((target.pos[0] - this.pos[0]) ** 2 + (target.pos[1] - this.pos[1]) ** 2);\n    return this.distanceToTarget;\n  }\n\n  launch() {\n    // this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);\n    this.ctx.fillStyle = this.color;\n    this.ctx.fill();\n    this.ctx.closePath();\n    this.pos[0] += this.vel[0];\n    this.pos[1] -= this.vel[1];\n  }\n\n  getRandomColor() {\n    var letters = '0123456789ABCDEF';\n    var color = '#';\n    for (var i = 0; i < 6; i++) {\n      color += letters[Math.floor(Math.random() * 16)];\n    }\n    return color;\n  }\n\n}\n\nconst generateRandomVelocity = function (factor) {\n  let dx = Math.random() * factor;\n  let dy = Math.sqrt(factor ** 2 - dx ** 2);\n  return [dx, dy];\n};\n\nconst generateRandomVelocityAll = function (factor) {\n  let dx = Math.random();\n  let dy = Math.sqrt(1 - dx ** 2);\n  dx = Math.floor(dx * 1000);dy = Math.floor(dy * 1000);\n  if (dx % 2 === 0) {\n    dx *= -1;\n  };\n  if (dy % 2 === 0) {\n    dy *= -1;\n  };\n\n  const vel = [dx / 1000 * factor, dy / 1000 * factor];\n  return vel;\n};\n\n//# sourceURL=webpack:///./src/rocket.js?");

/***/ }),

/***/ "./src/target.js":
/*!***********************!*\
  !*** ./src/target.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Target; });\nclass Target {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.hit = false;\n    this.radius = 25;\n    // this.canvasHeight = document.getElementById('canvas').height;\n    this.canvasWidth = document.getElementById('canvas').width;\n    this.pos = [this.canvasWidth / 2, 75];\n    this.hit = false;\n    this.crashRocket = null;\n\n    // this.moon = new Image();\n    // this.moonSrc = \"../images/moon_sprite/moon-0000001.png\";\n    //\n    // this.moonagain = this.sprite({\n    //   context: this.ctx,\n    //   width: 100,\n    //   height: 100,\n    //   image: this.moonSrc\n    // });\n  }\n\n  draw() {\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    this.ctx.fillStyle = '#ECECEC';\n    this.ctx.fill();\n    this.ctx.stroke();\n    // this.moonagain.render();\n  }\n\n  collisionDetection(rocket) {\n    const canvas = document.getElementById('canvas');\n    const explosion = document.getElementById('explosion');\n\n    //     explosion.style.top = `${canvas.offsetTop + 75 - 75}px`;\n    //     explosion.style.left = `${canvas.offsetLeft + 400 - 75}px`;\n    if (rocket.pos[0] > this.pos[0] - this.radius && rocket.pos[0] < this.pos[0] + this.radius && rocket.pos[1] > this.pos[1] - this.radius && rocket.pos[1] < this.pos[1] + this.radius) {\n      this.hit = true;\n      this.crashRocket = rocket;\n      // const canvas = document.getElementById('canvas');\n      // const explosion = document.getElementById('explosion');\n      explosion.style.top = `${canvas.offsetTop + 75 - 100}px`;\n      explosion.style.left = `${canvas.offsetLeft + 400 - 100}px`;\n      explosion.style.visibility = \"visible\";\n      setTimeout(function () {\n        explosion.style.visibility = \"hidden\";\n      }, 500);\n      explosion;\n      return true;\n    }\n  }\n\n  // sprite(options) {\n  //   var that = {};\n  //\n  //   that.context = options.context;\n  //   that.width = options.width;\n  //   that.height = options.height;\n  //   that.image = options.image;\n  //\n  //   that.render = function () {\n  //\n  //       // Draw the animation\n  //       that.context.drawImage(\n  //          that.image,\n  //          0,\n  //          0,\n  //          that.width,\n  //          that.height,\n  //          0,\n  //          0,\n  //          that.width,\n  //          that.height);\n  //   };\n  //\n  //   return that;\n  // }\n\n\n}\n\n//# sourceURL=webpack:///./src/target.js?");

/***/ }),

/***/ "./src/time.js":
/*!*********************!*\
  !*** ./src/time.js ***!
  \*********************/
/*! exports provided: drawTime, appendTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawTime\", function() { return drawTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendTime\", function() { return appendTime; });\nconst drawTime = (currentTime, interval) => {\n  const newTime = currentTime + interval;\n  const displayTime = `${currentTime / 1000} s`;\n  document.getElementById(\"current-time\").innerHTML = displayTime;\n  return newTime;\n};\n\nconst appendTime = currentTime => {\n  let timelog = document.getElementById(\"time-logger\");\n  let newLi = document.createElement('li');\n  newLi.appendChild(document.createTextNode(`${currentTime / 1000} s`));\n  timelog.appendChild(newLi);\n  return currentTime;\n};\n\n//# sourceURL=webpack:///./src/time.js?");

/***/ })

/******/ });