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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Barrier; });\n\nclass Barrier {\n  constructor(ctx, target) {\n    this.width = 300;\n    this.height = 10;\n    this.canvasHeight = document.getElementById('canvas').height;\n    this.canvasWidth = document.getElementById('canvas').width;\n    this.ctx = ctx;\n    this.color = '#8D5406';\n    let [posX, posY] = [0, 500];\n    this.pos = [posX, posY];\n    this.area = {\n      leftBarrier: posX,\n      rightBarrier: posX + this.width,\n      topBarrier: posY,\n      bottomBarrier: posY + this.height\n    };\n  }\n\n  draw() {\n    this.ctx.beginPath();\n    this.ctx.rect(this.pos[0], this.pos[1], this.width, this.height);\n    this.ctx.stroke();\n  }\n\n  collisionDetection(rocket) {\n    if (rocket.pos[0] < 0) {\n      return \"left border\";\n    } else if (rocket.pos[0] > this.canvasWidth) {\n      return \"right border\";\n    } else if (rocket.pos[1] < 0) {\n      return \"top border\";\n    } else if (rocket.pos[1] > this.canvasHeight) {\n      return \"bottom border\";\n    } else if (rocket.pos[0] + rocket.radius > this.pos[0] && rocket.pos[0] - rocket.radius < this.pos[0] + this.width && rocket.pos[1] + rocket.radius > this.pos[1] && rocket.pos[1] - rocket.radius < this.pos[1] + this.height) {\n      return this.area;\n    } else {\n      return false;\n    }\n    // if (rocket.pos[0] - rocket.radius > this.pos[0] &&\n    //     rocket.pos[0] - rocket.radius < this.pos[0] + this.width &&\n    //     rocket.pos[1] - rocket.radius > this.pos[1] &&\n    //     rocket.pos[1] - rocket.radius < this.pos[1] + this.height + 40\n    // ) {\n    //\n    //   rocket.lastPos.push(rocket.pos)\n    //   rocket.lastVel.push(this.vel);\n    //   return true;\n    // } else {\n    //   return false;\n    // }\n  }\n}\n\n//# sourceURL=webpack:///./src/barrier.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _rocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rocket */ \"./src/rocket.js\");\n/* harmony import */ var _barrier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barrier */ \"./src/barrier.js\");\n/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./target */ \"./src/target.js\");\n\n\n\n\nclass Game {\n  constructor(ctx) {\n    this.rocketLauncher = { height: 40, width: 40 };\n    this.canvasHeight = document.getElementById('canvas').height;\n    this.canvasWidth = document.getElementById('canvas').width;\n    this.totalRockets = 2;\n    this.rockets = {};\n    this.ctx = ctx;\n    this.draw = this.draw.bind(this);\n    this.barrier = null;\n    this.totalBarriers = 1;\n    this.path = [];\n    this.totalCollision = {};\n    this.target = new _target__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx);\n    this.additionalRockets = 2;\n    this.createRockets = this.createRockets.bind(this);\n    this.resetParams = this.resetParams.bind(this);\n  }\n\n  createRockets(ctx, startingPos, startingVel) {\n    if (startingPos) {\n      for (var i = this.totalRockets; i < this.totalRockets + this.additionalRockets; i++) {\n        let rocket = new _rocket__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n        console.log(this.totalRockets);\n        rocket.pos = startingPos.slice();\n        rocket.vel = rocket.generateRandomVelocityAll(6);\n        if (startingVel[0]) {\n          rocket.vel[0] = startingVel[0];\n        }\n        if (startingVel[1]) {\n          rocket.vel[1] = startingVel[1];\n        }\n        this.rockets[i] = rocket;\n      }\n      this.totalRockets = this.totalRockets + this.additionalRockets;\n    } else {\n      for (var i = 0; i < this.totalRockets; i++) {\n        let rocket = new _rocket__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n        this.rockets[i] = rocket;\n        this.path.push(rocket.vel);\n        console.log(this.path);\n      }\n    }\n  }\n\n  createBarrier(ctx) {\n    this.barrier = new _barrier__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n  }\n\n  drawRockets() {\n    let rocketKeys = Object.keys(this.rockets);\n    for (var i = 0; i < rocketKeys.length; i++) {\n\n      let rocketPos;\n      let currentKey = rocketKeys[i];\n      let currentRocket = this.rockets[currentKey];\n      rocketPos = currentRocket.pos;\n      // console.log(this.rockets[currentKey]);\n      let collided = this.barrier.collisionDetection(currentRocket);\n      let targetHit = this.target.collisionDetection(currentRocket);\n\n      if (targetHit) {\n        console.log(targetHit);\n        return targetHit;\n      }\n      if (\n      // This stops the rockets from extending it outside of the canvas\n      rocketPos[0] > 0 && rocketPos[0] < this.canvasWidth && rocketPos[1] > 0 &&\n      // this stops the rocket from extending past a barrier\n      !collided) {\n        this.rockets[currentKey].launch();\n      } else {\n        let newVelocity = currentRocket.vel;\n        let newPosition = currentRocket.pos;\n        currentRocket.pos = [newPosition[0] - newVelocity[0], newPosition[1] + newVelocity[1]];\n        newPosition = currentRocket.pos;\n        switch (collided) {\n          case \"left border\":\n          case \"right border\":\n            newVelocity = [newVelocity[0] * -1, null];\n            this.createRockets(this.ctx, newPosition, newVelocity);\n            // this.createRockets(this.ctx, newPosition);\n\n            // currentRocket.pos = [newPosition[0] - newVelocity[0], newPosition[1] - newVelocity[1]]\n            break;\n          case \"top border\":\n          case \"bottom border\":\n            // currentRocket.vel = [newVelocity[0],newVelocity[1]*-1]\n            newVelocity = [null, newVelocity[1] * -1];\n            this.createRockets(this.ctx, newPosition, newVelocity);\n            break;\n          default:\n            console.log('collision');\n            console.log(currentRocket.pos);\n            console.log(currentRocket.vel);\n            console.log(collided);\n\n            // currentRocket.vel = [newVelocity[0]*-1,newVelocity[1]*-1];\n            // newVelocity = [newVelocity[0]*-1, newVelocity[1]*-1];\n            // this.createRockets(this.ctx, newPosition, newVelocity);\n            debugger;\n            let posX = currentRocket.pos[0];\n            let posY = currentRocket.pos[1];\n            let diameter = currentRocket.radius * 2;\n            if (posX > collided.leftBarrier && posX < collided.rightBarrier && (posY < collided.bottomBarrier + diameter || posY > collided.topBarrier - diameter)) {\n              newVelocity = [null, newVelocity[1] * -1];\n              this.createRockets(this.ctx, newPosition, newVelocity);\n            }\n\n            break;\n        }\n        currentRocket.vel = [0, 0];\n        // console.log(this.rockets);\n        //\n      }\n    }\n  }\n\n  drawBarrier() {\n    this.barrier.draw();\n  }\n\n  drawTarget() {\n    this.target.draw();\n  }\n\n  draw() {\n    if (this.target.hit) {\n      this.resetParams();\n    }\n    this.drawRockets();\n    // this.drawTarget();\n    this.drawBarrier();\n  }\n\n  resetParams() {\n    this.totalRockets = 2;\n    this.rockets = {};\n    this.totalCollision = {};\n    this.additionalRockets = 2;\n    this.target.hit = false;\n    this.totalRockets = 2;\n    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);\n    this.createRockets(this.ctx);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log(\"coming from index\");\n\n  var canvas = document.getElementById(\"canvas\");\n  var ctx = canvas.getContext(\"2d\");\n  let game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  game.createRockets(ctx);\n  game.createBarrier(ctx);\n\n  setInterval(game.draw, 100);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/rocket.js":
/*!***********************!*\
  !*** ./src/rocket.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Rocket; });\n\n\nclass Rocket {\n  constructor(ctx) {\n    this.height = 30;\n    this.width = 10;\n    this.radius = 10;\n    this.canvasHeight = document.getElementById('canvas').height;\n    this.canvasWidth = document.getElementById('canvas').width;\n    this.pos = [this.canvasWidth / 2, this.canvasHeight];\n    this.ctx = ctx;\n    this.vel = this.generateRandomVelocity(10);\n    this.color = this.getRandomColor();\n    this.lastPos = [];\n    this.lastVel = [];\n    this.distanceToTarget = 0;\n    this.findTargetDistance = this.findTargetDistance.bind(this);\n  }\n\n  findTargetDistance(target) {\n    this.distanceToTarget = Math.sqrt((target.pos[0] - this.pos[0]) ** 2 + (target.pos[1] - this.pos[1]) ** 2);\n    return this.distanceToTarget;\n  }\n\n  launch() {\n    // this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);\n    this.ctx.fillStyle = this.color;\n    this.ctx.fill();\n    this.ctx.closePath();\n    this.pos[0] += this.vel[0];\n    this.pos[1] -= this.vel[1];\n  }\n\n  getRandomColor() {\n    var letters = '0123456789ABCDEF';\n    var color = '#';\n    for (var i = 0; i < 6; i++) {\n      color += letters[Math.floor(Math.random() * 16)];\n    }\n    return color;\n  }\n\n  generateRandomVelocity(factor) {\n    let dx = Math.floor(Math.random() * 1000);\n    let dy = Math.sqrt(1000000 - dx ** 2);\n    if (dx % 2) {\n      dx = dx * -1;\n    };\n    return [dx / 1000 * factor, dy / 1000 * factor];\n  }\n\n  generateRandomVelocityAll(factor) {\n    let dx = Math.floor(Math.random() * 1000);\n    let dy = Math.floor(Math.random() * 1000);\n    if (dx % 2) {\n      dx = dx * -1;\n    };\n    if (dy % 2) {\n      dy = dy * -1;\n    };\n    return [dx / 1000 * factor, dy / 1000 * factor];\n  }\n}\n\n//# sourceURL=webpack:///./src/rocket.js?");

/***/ }),

/***/ "./src/target.js":
/*!***********************!*\
  !*** ./src/target.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Target; });\nclass Target {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.hit = false;\n    this.radius = 25;\n    // this.canvasHeight = document.getElementById('canvas').height;\n    this.canvasWidth = document.getElementById('canvas').width;\n    this.pos = [this.canvasWidth / 2, 75];\n    this.hit = false;\n  }\n\n  draw() {\n    this.ctx.beginPath();\n    this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    this.ctx.stroke();\n  }\n\n  collisionDetection(rocket) {\n    if (rocket.pos[0] - rocket.radius > this.pos[0] && rocket.pos[0] - rocket.radius < this.pos[0] + this.radius && rocket.pos[1] - rocket.radius > this.pos[1] && rocket.pos[1] - rocket.radius < this.pos[1] + this.radius + 40) {\n      this.hit = true;\n      console.log(\"collision with target\");\n      return true;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/target.js?");

/***/ })

/******/ });