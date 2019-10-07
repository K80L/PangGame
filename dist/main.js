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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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

/***/ "./src/bubble.js":
/*!***********************!*\
  !*** ./src/bubble.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bubble; });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\n\n\n\n\nclass Bubble extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options = {}) {\n    options.color = Bubble.COLORS[Math.floor(Math.random() * Bubble.COLORS.length)];\n    options.radius = options.radius || Bubble.RADII[0];\n    options.pos = options.pos || options.pang.randomPosition(); // Bubbles may not have random positions. Maybe render the bubble position based on the levels.\n    options.isBounceable = true;\n    options.vel = options.vel || _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].randomVec(Bubble.SPEED);   // Need to change Util.randomVec(Bubble.SPEED). Or not... only change if I want Bubble to spawn with set directions\n    super(options);\n    this.dir = 'down'\n    this.size = options.size || 'big'\n  }\n\n  collideWith(otherObject) {\n    if (otherObject instanceof _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      // Remove 1 life, reset the level\n      this.pang.lives--;\n      if (this.pang.lives === 0 ) {\n        // this.pang.gameOver();\n      } else {\n        this.pang.resetLevel();\n      }\n      return true;\n    } else if (otherObject instanceof _bullet__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n      //Split the bubble, remove the bullet\n      this.split();\n      // for now, just remove the bubble. work on split later\n      otherObject.remove();\n      // if (this.size === 'big') {\n      //   this.pang.numBubbles += 1;\n      // }\n      return true;\n    }\n    return false;\n  }\n\n  draw(ctx){\n    const img = new Image();\n    img.src = './assets/baloon1.png';\n    ctx.drawImage( img, this.pos[0]-this.radius, this.pos[1]-this.radius, this.radius*2, this.radius*2)\n  }\n\n\n  split() {\n    if (this.size === 'big') {\n      this.pang.addSplitBubbles('medium', Bubble.RADII[1], this.pos);\n      this.remove();\n    } else if (this.size === 'medium') {\n      this.pang.addSplitBubbles('small', Bubble.RADII[2], this.pos);\n      this.remove();\n    } else if (this.size === 'small') {\n      this.pang.addSplitBubbles('tiny', Bubble.RADII[3], this.pos);\n      this.remove();\n    } else {\n      this.remove();\n    }\n  }\n}\n\n\n// const blk = rgb(42, 45, 55);\n// const lb = rgb(127, 179, 225);\n// const lp = rgb(221, 162, 246);\n// const lg = rgb(138, 241, 234);\n\nBubble.COLORS = [\n  \"rgb(42, 45, 55)\",\n  \"rgb(127, 179, 225)\",\n  \"rgb(221, 162, 246)\",\n  \"rgb(138, 241, 234)\",\n  // \"red\"\n];\n// Bubble.COLORS = ['black', 'blue', 'green', 'purple', 'red'];\nBubble.SIZE = ['big', 'medium', 'small', 'tiny'];\nBubble.RADII = [75, 50, 25, 10];\nBubble.SPEED = 3;\n\n\n//# sourceURL=webpack:///./src/bubble.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bullet; });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bubble */ \"./src/bubble.js\");\n\n\n\nclass Bullet extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n  constructor(options) {\n    options.radius = Bullet.RADIUS;\n    super(options)\n    this.isBounceable = false;\n    this.height = Bullet.HEIGHT;\n    this.width = Bullet.WIDTH;\n  }\n\n  move(delta){\n    this.height -= 10;\n    if (Math.abs(this.height) >= 800){\n      this.remove()\n    }\n  }\n\n  draw(ctx) {\n    const img = new Image();\n    img.src = './assets/pang2.png';\n    ctx.drawImage(img, 19, 1, 14, 200, this.pos[0], this.pos[1]+20, this.width, this.height-20)\n  }\n\n  //if any point of the bullet is touching a bubble, pop it\n  isCollidedWith(otherObject) {\n    if (otherObject instanceof _bubble__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      //center X and Y of the rectangle\n      let centerX = Math.abs(this.pos[0] + (this.width * 0.5));\n      let centerY = Math.abs(this.pos[1] + (this.height * 0.5));\n      \n      //distance from center of circle to center of rectangle\n      let distX = Math.abs(otherObject.pos[0] - centerX);\n      let distY = Math.abs(otherObject.pos[1] - centerY);\n\n      //No collision if either of these are true\n      if (distX > ((this.width * 0.5) + otherObject.radius)) { return false };\n      if (distY > ((Math.abs(this.height) * 0.5) + otherObject.radius)) { return false };\n\n      //collision if both these are true. The circle and rectangle must be in the overlapping\n      if (distX <= (otherObject.radius * 0.5)) {\n        return true;\n      }\n\n      if (distY <= (Math.abs(this.height) * 0.5 )) {\n        return true\n      }\n\n      let dx = distX - this.pos[0] * 0.5;\n      let dy = distY - Math.abs(this.pos[1]) * 0.5;\n      return (dx*dx + dy*dy <= (otherObject.radius * otherObject.radius)) \n    }\n  }\n}\n\nBullet.WIDTH = 15;\nBullet.HEIGHT = 0;\nBullet.SPEED = 5;\n\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameView; });\nclass GameView{\n  constructor(pang, ctx){\n    this.ctx = ctx;\n    this.pang = pang;\n    this.lastTime = 0;\n    this.gameOver = false;\n    this.player = this.pang.addPlayer();\n  }\n\n  bindKeyHandlers() {\n    const player = this.player;\n\n    Object.keys(GameView.MOVES).forEach((k) => {\n      const dir = GameView.MOVES[k];\n      key(k, () => { player.shift(dir); });\n    });\n\n    key(\"z\", () => {player.fireBullet()})\n  };\n\n  start() {\n    this.bindKeyHandlers();\n    this.lastTime = 0;\n    requestAnimationFrame(this.animate.bind(this));\n  };\n\n  animate(time) {\n    requestAnimationFrame(this.animate.bind(this));\n    const timeDelta = time - this.lastTime;\n    this.pang.step(timeDelta);\n    this.pang.draw(this.ctx);\n    this.lastTime = time;\n  }\n}\n\nGameView.MOVES = {\n  // up: [0, -1],\n  left: [-3, 0], \n  // down: [0, 1],\n  right: [3, 0]\n}\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pang */ \"./src/pang.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\n\n//webpack --watch --mode=development\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  \n  const canvas = document.getElementById('game-canvas');\n  const ctx = canvas.getContext(\"2d\");\n  canvas.width = _pang__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIM_X;\n  canvas.height = _pang__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIM_Y;\n  \n  const pang = new _pang__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  new _game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](pang, ctx).start();\n  \n  console.log(\"webpack is workingggg\")\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MovingObject; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nclass MovingObject {\n  constructor(options){\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n    this.pang = options.pang;\n    this.isBounceable = options.isBounceable;\n  }\n\n  collideWith(otherObject) {\n    //if Bubble collides with Bullet, split the bubble, remove the bullet\n    //if Bubble collides with Player, reset the level\n  }\n\n  draw(ctx){\n    ctx.beginPath();\n    ctx.arc( this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true );\n    ctx.fillStyle = this.color;\n    ctx.fill();\n  }\n  \n  isCollidedWith(otherObject) {\n    const centerDist = _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dist(this.pos, otherObject.pos);\n    return centerDist < (this.radius + otherObject.radius);\n  }\n\n  move(timeDelta) {\n    //timeDelta = number of ms since last call of move(\n    //if computer is busy --> timeDelta will be larger\n    //--> moveObject should move MORE to make up for lag\n    //velocity of an object is how far it should move in 1/60th of a second\n    const velocityScale = timeDelta / MovingObject.NORMAL_FRAME_TIME_DELTA;\n    const offsetX = this.vel[0] * velocityScale;\n    const offsetY = this.vel[1] * velocityScale;\n\n    this.pos[0] = this.pos[0] + offsetX;\n    this.pos[1] = this.pos[1] + offsetY;\n\n    if (this.pang.isOutOfBounds(this.pos, this.radius)) {\n      if (this.isBounceable) {\n        this.vel = this.pang.bounce(this.pos, this.vel, this.radius);\n      } else {\n        this.remove();\n      }\n    }\n  }\n\n  // movePlayer() {\n  //   this.pos[0] += this.vel[0];\n  //   this.pos[1] += this.vel[1];\n  //   this.vel[0] *= 0.9; //friction\n  //   this.vel[1] *= 0.9; //friction\n\n  //   this.pos = this.pang.bounds(this.pos, this.vel, this.radius);\n  // }\n\n  remove() {\n    this.pang.remove(this);\n  }\n}\n\nMovingObject.NORMAL_FRAME_TIME_DELTA = 1000 / 60;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/pang.js":
/*!*********************!*\
  !*** ./src/pang.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pang; });\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble */ \"./src/bubble.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n// import Level from './level';\n//Game holds my current level. \n// ==> Level should hold platforms & spawn bubbles? Or should I have game \n// hold all my bubbles for a given lavel and just spawn based on what level we're on\n\n\n\n\nclass Pang {\n  constructor(){\n    this.bubbles = [];\n    this.players = [];\n    this.bullets = [];\n    this.lives = 3;\n    this.addBubbles('big');\n    this.numBubbles = Pang.NUM_BUBBLES;\n  }\n\n  add(object) {\n    if (object instanceof _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      this.bubbles.push(object)\n    } else if (object instanceof _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.players.push(object)\n    } else if (object instanceof _bullet__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      this.bullets.push(object)\n    } else {\n      throw new Error(\"Unknown type of object\")\n    }\n  }\n\n  addBubbles(size) {\n    for (let i = 0; i < Pang.NUM_BUBBLES; i++) {\n      this.add(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ pang: this, size: size}))\n    }\n  }\n\n  addSplitBubbles(size, radius, pos) {\n    this.add(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ pang: this, size: size, radius: radius, pos: this.nearbyPos(pos) }));\n    this.add(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ pang: this, size: size, radius: radius, pos: this.nearbyPos(pos) }));\n  }\n\n  addPlayer() {\n    const player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ \n      pang: this,\n      pos: Pang.PLAYER_START_POS\n    })\n    this.add(player);\n    \n    return player;\n  }\n\n  allObjects() {\n    return [].concat(this.bullets, this.bubbles, this.players);\n  }\n\n  bounce(pos, vel, radius) {\n    if ((pos[0]+radius) >= Pang.DIM_X || (pos[0]-radius) <= 0) {\n      vel[0] *= -1\n    } \n    else if ((pos[1]+radius) >= Pang.DIM_Y || (pos[1]-radius) <= 0){\n      vel[1] *=-1\n    }\n    return vel;\n  };\n  \n  bounds(pos, radius) {\n    if (pos[0] + radius > Pang.DIM_X) {\n      pos[0] = Pang.DIM_X - radius;\n    } else if (pos[0] - radius < 0) {\n      pos[0] = radius;\n    } else if (pos[1] + radius > Pang.DIM_Y) {\n      pos[1] = Pang.DIM_Y - radius;\n    } else if (pos[1] - radius < 0) {\n      pos[1] = radius\n    } \n\n    return pos;\n  };\n\n  checkCollisions() {\n    const allObjects = this.allObjects();\n      for ( let i = 0; i < allObjects.length; i++ ) {\n        for ( let j = 0; j < allObjects.length; j++) {\n          const obj1 = allObjects[i];\n          const obj2 = allObjects[j];\n          if (obj1.isCollidedWith(obj2) && (obj1 !== obj2)) {\n            const collision = obj2.collideWith(obj1);\n            if (collision) return;\n          }\n        }\n      }\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, Pang.DIM_X, Pang.DIM_Y);\n    ctx.fillStyle = Pang.BG_Color;\n    ctx.clearRect(0, 0, Pang.DIM_X, Pang.DIM_Y);\n    this.allObjects().forEach(object => {\n      object.draw(ctx)\n    })\n  }\n\n  isOutOfBounds(pos, radius) {\n    if (pos[0] - radius <= 0 || pos[0] + radius >= Pang.DIM_X) return true;\n    if (pos[1] - radius <= 0 || pos[1] + radius >= Pang.DIM_Y) return true;\n    return false;\n  }\n\n  moveObjects(delta) {\n    this.allObjects().forEach(object => {\n      object.move(delta)\n    })\n  }\n\n  nearbyPos(pos) {\n    const dx = pos[0] + (Math.random() * (150) - 75);\n    const dy = pos[1] + (Math.random() * (150) - 75);\n    return [dx, dy]\n  }\n\n  randomPosition() {\n    return[100 + (1000 * Math.random()), 125 ]\n  }\n\n  remove(object) {\n    if (object instanceof _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      this.bubbles.splice(this.bubbles.indexOf(object), 1);\n    } else if (object instanceof _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.players.splice(this.players.indexOf(object), 1);\n    } else if (object instanceof _bullet__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      this.bullets.splice(this.bullets.indexOf(object), 1);\n    } \n  }\n\n  resetLevel() {\n    this.bubbles.forEach(bubble => {\n      this.bubbles = []\n    })\n    this.addBubbles('big');\n    this.players[0].pos = Pang.PLAYER_START_POS;\n  }\n\n  // restartLevel() {\n  //   this.resetAll();\n  // }\n\n  step(delta) {\n    this.moveObjects(delta);\n    this.checkCollisions();\n  }\n}\n\nPang.BG_Color = '#000000'\nPang.DIM_X = 1200;\nPang.DIM_Y = 800;\nPang.FPS = 60;\nPang.NUM_BUBBLES = 2;\nPang.PLAYER_START_POS = [Pang.DIM_X/2 - 40, Pang.DIM_Y-123];\n\n//# sourceURL=webpack:///./src/pang.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bubble */ \"./src/bubble.js\");\n\n\n\n\nclass Player extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options) {\n    options.radius = Player.RADIUS;\n    options.color = 'black';\n    options.vel = options.vel || [0,0];\n    super(options)\n    this.state = options.state || 'standingRight'\n    this.isBounceable = false;\n    this.tick = 0;\n    this.width = Player.WIDTH;\n    this.height = Player.HEIGHT;\n  }\n\n  bounds(pos) {\n    if (pos[0] < 0) {\n      pos[0] = 0;\n    } else if (pos[0] + Player.WIDTH > 1200) {\n      pos[0] = 1200-Player.WIDTH;\n    } else if (pos[1] > 800) {\n      pos[1] = 800-Player.HEIGHT;\n    }\n\n    return pos;\n  }\n\n  draw(ctx) {\n    // ctx.beginPath();\n    // ctx.rect(this.pos[0], this.pos[1], 70, 123);\n    // ctx.closePath();\n    // ctx.stroke();\n    if (this.tick >= 40) {\n      this.tick = 0;\n    }\n    const img = new Image();\n    img.src = \"./assets/pang.png\";\n    \n    //Set the state of the player\n    if (this.vel[0] < 0.3 && this.vel[0] > -0.3) {\n      this.tick = 0;\n      this.state = 'standingRight';\n    } else if (this.vel[0] >= 0.3 && this.vel[0] <= 4) {\n      this.state = 'walkingRight';\n    } else if (this.vel[0] <= -0.3 && this.vel[0] >= -4) {\n      this.state = 'walkingLeft';\n    } else if (this.vel[0] > 4) {\n      this.tick++;\n      if (this.tick === 8) {\n        this.state = 'runningRight'\n      } else if ( this.tick === 16) {\n        this.state = 'steppingRight'\n      } else if ( this.tick === 24) {\n        this.state = 'runningRight2'\n      } else if ( this.tick === 32) {\n        this.state = 'steppingRight2'\n      }\n    } else if (this.vel[0] < -4) {\n      this.tick++;\n      if (this.tick === 8) {\n        this.state = 'runningLeft'\n      } else if ( this.tick === 16) {\n        this.state = 'steppingLeft'\n      } else if ( this.tick === 24) {\n        this.state = 'runningLeft2'\n      } else if ( this.tick === 32) {\n        this.state = 'steppingLeft2'\n      }\n    }\n    //Draw appropriate sprite based on state\n    if (this.state === 'standingRight') {\n      ctx.drawImage( img, 172, 1.3, 29, 38, this.pos[0]-10, this.pos[1], 110, 150 )\n    } else if (this.state === 'walkingRight') {\n      ctx.drawImage( img, 0, 1.3, 30, 38, this.pos[0]-10, this.pos[1], 110, 150 )\n    } else if (this.state === 'walkingLeft') {\n      ctx.drawImage( img, 510.5, 1.3, 31, 38, this.pos[0]-10, this.pos[1], 110, 150 )\n    } else if (this.state === 'runningRight') {\n      ctx.drawImage( img, 35, 1.3, 30, 38, this.pos[0]-10, this.pos[1], 110, 150 )\n    } else if (this.state === 'runningLeft') {\n      ctx.drawImage( img, 476.5, 1.3, 31, 38, this.pos[0]-10, this.pos[1], 110, 150 )\n    } else if ( this.state === 'steppingRight') {\n      ctx.drawImage( img, 69.5, 1.3, 30, 38, this.pos[0]-10, this.pos[1], 110, 150 )  \n    } else if ( this.state === 'steppingLeft' ) {\n      ctx.drawImage( img, 442.5, 1.3, 31, 38, this.pos[0]-10, this.pos[1], 110, 150 )\n    } else if (this.state === 'runningRight2') {\n      ctx.drawImage( img, 102.5, 1.3, 30, 38, this.pos[0]-10, this.pos[1], 110, 150 )\n    } else if (this.state === 'runningLeft2') {\n      ctx.drawImage( img, 408.5, 1.3, 31, 38, this.pos[0]-10, this.pos[1], 110, 150 )\n    } else if ( this.state === 'steppingRight2') {\n      ctx.drawImage( img, 136.5, 1.3, 30, 38, this.pos[0]-10, this.pos[1], 110, 150 )   \n    } else if ( this.state === 'steppingLeft2' ) {\n      ctx.drawImage( img, 374.5, 1.3, 31, 38, this.pos[0]-10, this.pos[1], 110, 150 )\n    }\n  }\n\n  fireBullet() {\n    if (this.pang.bullets.length === 0) {\n      const bullet = new _bullet__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        pos: [this.pos[0] + 28, this.pos[1]+100],\n        vel: [0, -10],\n        color: 'pink',\n        pang: this.pang\n      });\n      this.pang.add(bullet);\n    }\n  }\n\n  isCollidedWith(otherObject) {\n    if (otherObject instanceof _bubble__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      //center X and Y of the rectangle\n      let centerX = Math.abs(this.pos[0] + (this.width * 0.5));\n      let centerY = Math.abs(this.pos[1] + (this.height * 0.5));\n      \n      //distance from center of circle to center of rectangle\n      let distX = Math.abs(otherObject.pos[0] - centerX);\n      let distY = Math.abs(otherObject.pos[1] - centerY);\n\n      //No collision if either of these are true\n      if (distX > ((this.width * 0.5) + otherObject.radius)) { return false };\n      if (distY > ((Math.abs(this.height) * 0.5) + otherObject.radius)) { return false };\n\n      //collision if both these are true. The circle and rectangle must be in the overlapping\n      if (distX <= (this.width * 0.5)) {\n        return true;\n      }\n\n      if (distY <= (Math.abs(this.height) * 0.5 )) {\n        return true\n      }\n\n      let dx = distX - this.pos[0] * 0.5;\n      let dy = distY - Math.abs(this.pos[1]) * 0.5;\n      return (dx*dx + dy*dy <= (otherObject.radius * otherObject.radius)) \n    }\n  }\n\n  move(delta) {\n    const velocityScale = delta / Player.NORMAL_FRAME_TIME_DELTA;\n    const offsetX = this.vel[0] * velocityScale;\n    const offsetY = this.vel[1] * velocityScale;\n\n    this.pos[0] = this.pos[0] + offsetX; //regular old moving\n    this.pos[1] = this.pos[1] + offsetY; //regular old moving\n    this.vel[0] *= 0.92; //friction\n    this.vel[1] *= 0.92; //friction\n    \n    this.pos = this.bounds(this.pos);\n  }\n\n  shift(unit) {\n    if (this.vel[0] > 0 && unit[0] < 0) {\n      this.vel[0] = 0;\n    } \n\n    if (this.vel[0] < 0 && unit[0] > 0) {\n      this.vel[0] = 0;\n    }\n    \n    this.vel[0] += unit[0];\n    // this.pos[0] = this.pos[0] + this.vel[0] + unit[0]\n  }\n};\n\nPlayer.WIDTH = 110;\nPlayer.HEIGHT = 125;\nPlayer.RADIUS = 0;\nPlayer.NORMAL_FRAME_TIME_DELTA = 1000 / 60;\nPlayer.STATES = ['standing', 'walking', 'shooting', 'climbing']\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Util = {\n  randomVec(length) {\n    const deg =  2 * Math.PI * Math.random();\n    return Util.scale( [Math.sin(deg), Math.cos(deg)], length )\n  },\n\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n\n  dist(pos1, pos2) {\n    //sqrt((x2 - x1)^2 + (y2-y1)^2)\n    return Math.sqrt(\n      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n    );\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Util);\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });