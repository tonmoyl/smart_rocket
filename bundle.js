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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Barrier = function () {\n  function Barrier(ctx, pos) {\n    _classCallCheck(this, Barrier);\n\n    this.width = 50;\n    this.height = 50;\n    this.canvasHeight = document.getElementById('canvas').height;\n    this.canvasWidth = document.getElementById('canvas').width;\n    this.ctx = ctx;\n    this.color = '#8D5406';\n\n    var _pos = _slicedToArray(pos, 2),\n        posX = _pos[0],\n        posY = _pos[1];\n\n    this.pos = [posX, posY];\n    this.area = {\n      leftBarrier: posX,\n      rightBarrier: posX + this.width,\n      topBarrier: posY,\n      bottomBarrier: posY + this.height\n    };\n  }\n\n  _createClass(Barrier, [{\n    key: 'draw',\n    value: function draw() {\n      this.ctx.beginPath();\n      this.ctx.fillStyle = '#ECECEC';\n      this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);\n\n      this.ctx.stroke();\n    }\n  }, {\n    key: 'collisionDetection',\n    value: function collisionDetection(rocket) {\n      if (rocket.pos[0] < 0) {\n        return \"left border\";\n      } else if (rocket.pos[0] > this.canvasWidth) {\n        return \"right border\";\n      } else if (rocket.pos[1] < 0) {\n        return \"top border\";\n      } else if (rocket.pos[1] > this.canvasHeight) {\n        return \"bottom border\";\n      } else if (rocket.pos[0] + rocket.radius > this.area.leftBarrier && rocket.pos[0] - rocket.radius < this.area.rightBarrier && rocket.pos[1] - rocket.radius < this.area.bottomBarrier && rocket.pos[1] + rocket.radius > this.area.topBarrier) {\n        return this.area;\n      } else {\n        return false;\n      }\n      // if (rocket.pos[0] - rocket.radius > this.pos[0] &&\n      //     rocket.pos[0] - rocket.radius < this.pos[0] + this.width &&\n      //     rocket.pos[1] - rocket.radius > this.pos[1] &&\n      //     rocket.pos[1] - rocket.radius < this.pos[1] + this.height + 40\n      // ) {\n      //\n      //   rocket.lastPos.push(rocket.pos)\n      //   rocket.lastVel.push(this.vel);\n      //   return true;\n      // } else {\n      //   return false;\n      // }\n    }\n  }]);\n\n  return Barrier;\n}();\n\nexports.default = Barrier;\n\n//# sourceURL=webpack:///./src/barrier.js?");

/***/ }),

/***/ "./src/crash_rocket.js":
/*!*****************************!*\
  !*** ./src/crash_rocket.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _rocket = __webpack_require__(/*! ./rocket */ \"./src/rocket.js\");\n\nvar _rocket2 = _interopRequireDefault(_rocket);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CrashRocket = function (_Rocket) {\n  _inherits(CrashRocket, _Rocket);\n\n  function CrashRocket(ctx, lineage) {\n    _classCallCheck(this, CrashRocket);\n\n    var _this = _possibleConstructorReturn(this, (CrashRocket.__proto__ || Object.getPrototypeOf(CrashRocket)).call(this, ctx));\n\n    _this.lineage = lineage;\n    return _this;\n  }\n\n  return CrashRocket;\n}(_rocket2.default);\n\nexports.default = CrashRocket;\n\n//# sourceURL=webpack:///./src/crash_rocket.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _rocket3 = __webpack_require__(/*! ./rocket */ \"./src/rocket.js\");\n\nvar _rocket4 = _interopRequireDefault(_rocket3);\n\nvar _barrier = __webpack_require__(/*! ./barrier */ \"./src/barrier.js\");\n\nvar _barrier2 = _interopRequireDefault(_barrier);\n\nvar _target = __webpack_require__(/*! ./target */ \"./src/target.js\");\n\nvar _target2 = _interopRequireDefault(_target);\n\nvar _time = __webpack_require__(/*! ./time */ \"./src/time.js\");\n\nvar _crash_rocket = __webpack_require__(/*! ./crash_rocket */ \"./src/crash_rocket.js\");\n\nvar _crash_rocket2 = _interopRequireDefault(_crash_rocket);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = function () {\n  function Game(ctx, interval) {\n    _classCallCheck(this, Game);\n\n    this.canvasHeight = document.getElementById('canvas').height;\n    this.canvasWidth = document.getElementById('canvas').width;\n    this.ctx = ctx;\n    this.rockets = {};\n    this.totalRockets = 2;\n    this.additionalRockets = 2;\n    this.barriers = {};\n    this.target = new _target2.default(ctx);\n    this.time = 0;\n    this.interval = interval;\n    this.draw = this.draw.bind(this);\n    this.createRockets = this.createRockets.bind(this);\n    this.resetParams = this.resetParams.bind(this);\n    this.drawBarriers = this.drawBarriers.bind(this);\n    this.bestTime = false;\n    this.barriersCount = 0;\n    this.barriers = {};\n  }\n\n  _createClass(Game, [{\n    key: 'createRockets',\n    value: function createRockets(ctx, startingPos, startingVel, parentRocket) {\n      if (startingPos) {\n        for (var _i = this.totalRockets; _i < this.totalRockets + this.additionalRockets; _i++) {\n          var rocket = new _rocket4.default(ctx);\n          rocket.addParent(parentRocket);\n          rocket.pos = startingPos.slice();\n          rocket.vel = (0, _rocket3.generateRandomVelocityAll)(5);\n          if (startingVel[0]) {\n            if (startingVel[0] < 0) {\n              rocket.vel[0] = -1 * Math.abs(rocket.vel[0]);\n            } else {\n              rocket.vel[0] = Math.abs(rocket.vel[0]);\n            }\n          }\n          if (startingVel[1]) {\n            if (startingVel[1] < 0) {\n              rocket.vel[1] = -1 * Math.abs(rocket.vel[1]);\n            } else {\n              rocket.vel[1] = Math.abs(rocket.vel[1]);\n            }\n          }\n          this.rockets[_i] = rocket;\n        }\n        this.totalRockets = this.totalRockets + this.additionalRockets;\n      } else {\n        for (var i = 0; i < this.totalRockets; i++) {\n          var _rocket = new _rocket4.default(ctx);\n          if (i % 2 === 0) {\n            _rocket.vel[0] *= -1;\n          }\n          this.rockets[i] = _rocket;\n        }\n      }\n      if (this.crashRocket) {\n        this.ancestorPath = this.crashRocket.lineage();\n        var _rocket2 = new _rocket4.default(this.ctx);\n        _rocket2.vel = this.ancestorPath[0].vel;\n        this.rockets[this.totalRockets] = _rocket2;\n        _rocket2.color = '#6d201e';\n        this.totalRockets += 1;\n        _rocket2.ancestors = this.ancestorPath;\n        this.crashRocketTurn = 0;\n        this.crashRocket = false;\n      }\n    }\n  }, {\n    key: 'createCrashRocket',\n    value: function createCrashRocket(currentRocket) {\n      this.crashRocketTurn += 1;\n\n      var originalRocket = this.ancestorPath[this.crashRocketTurn];\n      originalRocket.color = '#6d201e';\n      this.rockets[this.totalRockets] = originalRocket;\n      this.rockets[this.totalRockets].pos = currentRocket.pos;\n      this.rockets[this.totalRockets].ancestors = true;\n\n      this.totalRockets += 1;\n    }\n  }, {\n    key: 'drawRockets',\n    value: function drawRockets() {\n      var rocketKeys = Object.keys(this.rockets);\n      var barrierKeys = Object.keys(this.barriers);\n\n      for (var i = 0; i < rocketKeys.length; i++) {\n        var currentRocket = this.rockets[rocketKeys[i]];\n        currentRocket.launch();\n        for (var j = 0; j < barrierKeys.length; j++) {\n          var currentBarrier = this.barriers[barrierKeys[j]];\n\n          var rocketPos = currentRocket.pos;\n          var rocketVel = currentRocket.vel;\n          var collided = currentBarrier.collisionDetection(currentRocket);\n          var targetHit = this.target.collisionDetection(currentRocket);\n\n          if (targetHit) {\n            return targetHit;\n          }\n\n          if (\n          // This stops the rockets from extending it outside of the canvas\n          rocketPos[0] > 0 && rocketPos[0] < this.canvasWidth && rocketPos[1] > 0 &&\n          // this stops the rocket from extending past a barrier\n          !collided) {} else {\n            delete this.rockets[rocketKeys[i]];\n            currentRocket.pos = [rocketPos[0] - rocketVel[0], rocketPos[1] + rocketVel[1]];\n            rocketPos = currentRocket.pos;\n            var newRocketVel = void 0;\n            if (currentRocket.ancestors) {\n              this.createCrashRocket(currentRocket);\n            } else {\n              switch (collided) {\n                case \"left border\":\n                case \"right border\":\n                  newRocketVel = [rocketVel[0] * -1, null];\n                  break;\n                case \"top border\":\n                case \"bottom border\":\n                  newRocketVel = [null, rocketVel[1] * -1];\n                  break;\n                default:\n                  var diameter = currentRocket.radius * 2;\n                  if (rocketPos[0] > collided.leftBarrier && rocketPos[0] < collided.rightBarrier && (rocketPos[1] < collided.bottomBarrier + diameter || rocketPos[1] > collided.topBarrier - diameter)) {\n                    newRocketVel = [null, rocketVel[1] * -1];\n                  } else if (rocketPos[1] > collided.topBarrier && rocketPos[1] < collided.bottomBarrier && (rocketPos[0] < collided.leftBarrier + diameter || rocketPos[0] > collided.rightBarrier - diameter)) {\n                    newRocketVel = [rocketVel[0] * -1, null];\n                  } else {\n                    newRocketVel = [rocketVel[0] * -1, rocketVel[1] * -1];\n                  }\n                  break;\n              }\n              this.createRockets(this.ctx, rocketPos, newRocketVel, currentRocket);\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: 'createBarrier',\n    value: function createBarrier(ctx) {\n      this.barrier = new _barrier2.default(ctx, [this.canvasWidth / 2, 250]);\n      this.barrier2 = new _barrier2.default(ctx, [350, 250]);\n      this.barrier3 = new _barrier2.default(ctx, [700, 250]);\n      this.barrier4 = new _barrier2.default(ctx, [450, 250]);\n      this.barrier5 = new _barrier2.default(ctx, [550, 250]);\n      this.barrier6 = new _barrier2.default(ctx, [200, 150]);\n      this.barrier7 = new _barrier2.default(ctx, [0, 200]);\n      this.barrier8 = new _barrier2.default(ctx, [500, 400]);\n      this.barrier9 = new _barrier2.default(ctx, [600, 200]);\n      this.barrier10 = new _barrier2.default(ctx, [200, 300]);\n      this.barriers = {\n        // 0: this.barrier,\n        1: this.barrier2,\n        2: this.barrier3,\n        // 3: this.barrier4,\n        // 4: this.barrier5,\n        5: this.barrier6,\n        6: this.barrier7,\n        7: this.barrier8,\n        8: this.barrier9,\n        9: this.barrier10\n      };\n    }\n  }, {\n    key: 'createNewBarrier',\n    value: function createNewBarrier(ctx, x, y) {\n      this.barriers[this.barriersCount] = new _barrier2.default(ctx, [x - 25, y - 25]);\n      this.barriersCount += 1;\n      console.log(this.barriers);\n    }\n  }, {\n    key: 'createCustomBarrier',\n    value: function createCustomBarrier(ctx) {}\n  }, {\n    key: 'drawBarriers',\n    value: function drawBarriers(ctx) {\n      var barrierId = Object.keys(this.barriers);\n      for (var i = 0; i < barrierId.length; i++) {\n        var currentBarrier = this.barriers[barrierId[i]];\n\n        currentBarrier.draw(this.ctx);\n      }\n    }\n  }, {\n    key: 'draw',\n    value: function draw() {\n      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);\n      if (this.target.hit) {\n        if (!this.bestTime || this.time < this.bestTime) {\n          (0, _time.appendTime)(this.time);\n          this.bestTime = this.time;\n        }\n        this.crashRocket = this.target.crashRocket;\n        this.resetParams();\n      } else if (this.totalRockets > 1000) {\n        this.resetParams();\n      }\n      this.drawRockets();\n      this.target.draw();\n      this.time = (0, _time.drawTime)(this.time, this.interval);\n      this.drawBarriers(this.ctx);\n    }\n  }, {\n    key: 'resetParams',\n    value: function resetParams() {\n      this.totalRockets = 2;\n      this.rockets = {};\n      this.totalCollision = {};\n      this.target.hit = false;\n      this.totalRockets = 2;\n      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);\n      this.createRockets(this.ctx);\n      this.time = 0;\n      this.crashRocketTurn = false;\n    }\n  }]);\n\n  return Game;\n}();\n\nexports.default = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nvar _game2 = _interopRequireDefault(_game);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var buttonStart = document.getElementById('buttonStart');\n  var buttonEnd = document.getElementById('buttonEnd');\n  var buttonResume = document.getElementById('buttonResume');\n\n  var interval = 20;\n  var canvas = document.getElementById(\"canvas\");\n  var ctx = canvas.getContext(\"2d\");\n  var game = new _game2.default(ctx, interval);\n  game.createRockets(ctx);\n  game.createBarrier(ctx);\n  var gameStart = false;\n\n  // Feed in an argument that shows where the position of the barrier is going to be\n  function createBarrier(event) {\n    var x = event.x;\n    var y = event.y;\n\n    var canvas = document.getElementById(\"canvas\");\n\n    x -= canvas.offsetLeft;\n    x += window.scrollX;\n    y -= canvas.offsetTop;\n    y += window.scrollY;\n\n    console.log(\"x:\" + x + \" y:\" + y);\n    game.createNewBarrier(ctx, x, y);\n  }\n\n  // var runSimulation = setInterval(game.draw, interval);\n  var runSimulation = void 0;\n  var startSimulation = function startSimulation() {\n    clearInterval(runSimulation);\n    game = new _game2.default(ctx, interval);\n    game.createRockets(ctx);\n    game.createBarrier(ctx);\n    runSimulation = setInterval(game.draw, interval);\n    gameStart = true;\n  };\n\n  var endSimulation = function endSimulation() {\n    clearInterval(runSimulation);\n    gameStart = false;\n  };\n\n  var resumeSimulation = function resumeSimulation() {\n    if (!gameStart) {\n      runSimulation = setInterval(game.draw, interval);\n      gameStart = true;\n    }\n  };\n\n  // startSimulation(game, ctx, interval);\n\n  buttonStart.addEventListener('click', startSimulation);\n  buttonEnd.addEventListener('click', endSimulation);\n  buttonResume.addEventListener('click', resumeSimulation);\n\n  canvas.addEventListener('click', createBarrier);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/rocket.js":
/*!***********************!*\
  !*** ./src/rocket.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Rocket = function () {\n  function Rocket(ctx) {\n    _classCallCheck(this, Rocket);\n\n    this.parent = null;\n    this.children = [];\n    this.radius = 7;\n    this.canvasHeight = document.getElementById('canvas').height;\n    this.canvasWidth = document.getElementById('canvas').width;\n    this.pos = [this.canvasWidth / 2, this.canvasHeight];\n    this.ctx = ctx;\n    this.vel = generateRandomVelocity(5);\n    this.color = this.getRandomColor();\n    this.distanceToTarget = 0;\n    this.findTargetDistance = this.findTargetDistance.bind(this);\n    this.height = 30;\n    this.width = 10;\n    this.path = [];\n  }\n\n  _createClass(Rocket, [{\n    key: 'addParent',\n    value: function addParent(parent) {\n      if (this.parent === parent) {\n        return;\n      }\n      this.parent = parent;\n      if (this.parent) {\n        this.parent.children.push(this);\n      }\n      // this.parent.children.push(this);\n    }\n  }, {\n    key: 'lineage',\n    value: function lineage() {\n      var currentRocket = this;\n      while (currentRocket.parent) {\n        this.path.unshift(currentRocket);\n        currentRocket = currentRocket.parent;\n      }\n      this.path.unshift(currentRocket);\n      // this.path.unshift(currentRocket);\n      return this.path;\n      // console.log(currentRocket);\n    }\n  }, {\n    key: 'findTargetDistance',\n    value: function findTargetDistance(target) {\n      this.distanceToTarget = Math.sqrt(Math.pow(target.pos[0] - this.pos[0], 2) + Math.pow(target.pos[1] - this.pos[1], 2));\n      return this.distanceToTarget;\n    }\n  }, {\n    key: 'launch',\n    value: function launch() {\n      // this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);\n      this.ctx.save();\n      this.ctx.beginPath();\n      if (this.ancestors) {\n        this.ctx.shadowBlur = 40;\n        this.ctx.shadowColor = \"white\";\n      }\n      this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);\n      this.ctx.fillStyle = this.color;\n      // this.ctx.arc(this.pos[0], this.pos[1], this.radius * 2, 0, Math.PI*2);\n      if (this.ancestors) {\n        this.ctx.lineWidth = 5;\n        this.ctx.strokeStyle = \"white\";\n        this.ctx.stroke();\n      }\n      this.ctx.fill();\n      this.ctx.restore();\n      this.pos[0] += this.vel[0];\n      this.pos[1] -= this.vel[1];\n    }\n  }, {\n    key: 'getRandomColor',\n    value: function getRandomColor() {\n      var letters = '0123456789ABCDEF';\n      var color = '#';\n      for (var i = 0; i < 6; i++) {\n        color += letters[Math.floor(Math.random() * 16)];\n      }\n      return color;\n    }\n  }]);\n\n  return Rocket;\n}();\n\nexports.default = Rocket;\nvar generateRandomVelocity = exports.generateRandomVelocity = function generateRandomVelocity(factor) {\n  var dx = Math.random() * factor;\n  var dy = Math.sqrt(Math.pow(factor, 2) - Math.pow(dx, 2));\n  return [dx, dy];\n};\n\nvar generateRandomVelocityAll = exports.generateRandomVelocityAll = function generateRandomVelocityAll(factor) {\n  var dx = Math.random();\n  var dy = Math.sqrt(1 - Math.pow(dx, 2));\n  dx = Math.floor(dx * 1000);dy = Math.floor(dy * 1000);\n  if (dx % 2 === 0) {\n    dx *= -1;\n  };\n  if (dy % 2 === 0) {\n    dy *= -1;\n  };\n\n  var vel = [dx / 1000 * factor, dy / 1000 * factor];\n  return vel;\n};\n\n//# sourceURL=webpack:///./src/rocket.js?");

/***/ }),

/***/ "./src/target.js":
/*!***********************!*\
  !*** ./src/target.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Target = function () {\n  function Target(ctx) {\n    _classCallCheck(this, Target);\n\n    this.ctx = ctx;\n    this.hit = false;\n    this.radius = 25;\n    this.canvasWidth = document.getElementById('canvas').width;\n    this.pos = [this.canvasWidth / 2, 75];\n    this.hit = false;\n    this.crashRocket = null;\n  }\n\n  _createClass(Target, [{\n    key: 'draw',\n    value: function draw() {\n      this.ctx.beginPath();\n      this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n      this.ctx.fillStyle = '#ECECEC';\n      this.ctx.fill();\n      this.ctx.stroke();\n    }\n  }, {\n    key: 'collisionDetection',\n    value: function collisionDetection(rocket) {\n      var canvas = document.getElementById('canvas');\n      var explosion = document.getElementById('explosion');\n\n      if (rocket.pos[0] > this.pos[0] - this.radius && rocket.pos[0] < this.pos[0] + this.radius && rocket.pos[1] > this.pos[1] - this.radius && rocket.pos[1] < this.pos[1] + this.radius) {\n        this.hit = true;\n        this.crashRocket = rocket;\n        explosion.style.top = canvas.offsetTop + 75 - 100 + 'px';\n        explosion.style.left = canvas.offsetLeft + 400 - 100 + 'px';\n        explosion.style.visibility = \"visible\";\n        setTimeout(function () {\n          explosion.style.visibility = \"hidden\";\n        }, 500);\n        explosion;\n        return true;\n      }\n    }\n  }]);\n\n  return Target;\n}();\n\nexports.default = Target;\n\n//# sourceURL=webpack:///./src/target.js?");

/***/ }),

/***/ "./src/time.js":
/*!*********************!*\
  !*** ./src/time.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar drawTime = exports.drawTime = function drawTime(currentTime, interval) {\n  var newTime = currentTime + interval;\n  var displayTime = currentTime / 1000;\n  displayTime = displayTime.toFixed(2);\n  displayTime = displayTime + \" s\";\n  document.getElementById(\"current-time\").innerHTML = displayTime;\n  return newTime;\n};\n\nvar appendTime = exports.appendTime = function appendTime(currentTime) {\n  var timelog = document.getElementById(\"time-logger\");\n  var bestTime = document.getElementById(\"best-value\");\n  var newLi = document.createElement('li');\n  var displayTime = currentTime / 1000;\n  displayTime = displayTime.toFixed(2);\n  bestTime.innerHTML = displayTime + \" s\";\n  newLi.appendChild(document.createTextNode(displayTime + \" s\"));\n  timelog.appendChild(newLi);\n  return currentTime;\n};\n\n//# sourceURL=webpack:///./src/time.js?");

/***/ })

/******/ });