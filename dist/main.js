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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bubble; });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\n\n\n\n\nclass Bubble extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options = {}) {\n    options.color = Bubble.COLORS[Math.floor(Math.random() * Bubble.COLORS.length)];\n    options.radius = Bubble.RADIUS;\n    options.pos = options.pos || options.pang.randomPosition(); // Bubbles may not have random positions. Maybe render the bubble position based on the levels.\n    options.vel = options.vel || _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].randomVec(Bubble.SPEED);   // Need to change Util.randomVec(Bubble.SPEED). Or not... only change if I want Bubble to spawn with set directions\n    options.isBounceable = true;\n    super(options);\n    this.dir = 'down'\n  }\n\n  collideWith(otherObject) {\n    if (otherObject instanceof _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      // Remove 1 life, reset the level\n      return true;\n    } else if (otherObject instanceof _bullet__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n      //Split the bubble, remove the bullet\n      // this.split();\n      // for now, just remove the bubble. work on split later\n      // debugger\n      this.remove();\n      otherObject.remove();\n      return true;\n    }\n    return false;\n  }\n}\n\n\n// const blk = rgb(42, 45, 55);\n// const lb = rgb(127, 179, 225);\n// const lp = rgb(221, 162, 246);\n// const lg = rgb(138, 241, 234);\n\nBubble.COLORS = [\n  \"rgb(42, 45, 55)\",\n  \"rgb(127, 179, 225)\",\n  \"rgb(221, 162, 246)\",\n  \"rgb(138, 241, 234)\",\n  // \"red\"\n];\n// Bubble.COLORS = ['black', 'blue', 'green', 'purple', 'red'];\nBubble.SIZE = ['big', 'medium', 'small'];\nBubble.RADIUS = 75;\nBubble.RADII = [75, 50, 25, 10];\nBubble.SPEED = 1;\n\n\n//# sourceURL=webpack:///./src/bubble.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bullet; });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bubble */ \"./src/bubble.js\");\n\n\n\nclass Bullet extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n  constructor(options) {\n    options.radius = Bullet.RADIUS;\n    super(options)\n    this.isBounceable = false;\n    this.height = Bullet.HEIGHT;\n    this.width = Bullet.WIDTH;\n  }\n\n  move(){\n    this.height -= 10;\n    if (Math.abs(this.height) >= 800){\n      this.remove()\n    }\n  }\n\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.rect(this.pos[0], this.pos[1], this.width, this.height)\n    ctx.fill();\n  }\n\n  //if any point of the bullet is touching a bubble, pop it\n  //how to check that?\n  isCollidedWith(otherObject) {\n\n    if (otherObject instanceof _bubble__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      //center X and Y of the rectangle\n      let centerX = Math.abs(this.pos[0] + (this.width * 0.5));\n      let centerY = Math.abs(this.pos[1] + (this.height * 0.5));\n      \n      //distance from center of circle to center of rectangle\n      let distX = Math.abs(otherObject.pos[0] - centerX);\n      let distY = Math.abs(otherObject.pos[1] - centerY);\n\n      //No collision if either of these are true\n      if (distX > ((this.width * 0.5) + otherObject.radius)) { return false };\n      if (distY > ((Math.abs(this.height) * 0.5) + otherObject.radius)) { return false };\n\n      //collision if both these are true. The circle and rectangle must be in the overlapping\n      //NEED TO CLEAN THIS UP\n      if (distX <= (otherObject.radius * 0.5)) {\n        return true;\n      }\n\n      if (distY <= (Math.abs(this.height) * 0.5 )) {\n        return true\n      }\n\n      let dx = distX - this.pos[0] * 0.5;\n      let dy = distY - Math.abs(this.pos[1]) * 0.5;\n      return (dx*dx + dy*dy <= (otherObject.radius * otherObject.radius)) \n    }\n  }\n}\n\nBullet.WIDTH = 8;\nBullet.HEIGHT = 0;\nBullet.SPEED = 5;\n\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameView; });\nclass GameView{\n  constructor(pang, ctx){\n    this.ctx = ctx;\n    this.pang = pang;\n    this.player = this.pang.addPlayer();\n  }\n\n  bindKeyHandlers() {\n    const player = this.player;\n\n    Object.keys(GameView.MOVES).forEach((k) => {\n      const dir = GameView.MOVES[k];\n      key(k, () => { player.shift(dir); });\n    });\n\n    key(\"z\", () => {player.fireBullet()})\n  };\n\n  start() {\n    this.bindKeyHandlers();\n\n    setInterval(() => {\n      this.pang.step(),\n      this.pang.draw(this.ctx)\n    }, 20)\n  };\n}\n\nGameView.MOVES = {\n  // up: [0, -1],\n  left: [-5, 0], \n  // down: [0, 1],\n  right: [5, 0]\n}\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pang */ \"./src/pang.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bubble */ \"./src/bubble.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n// import GameView from './game_view';\n\n\n\n\n//webpack --watch --mode=development\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  \n  const canvas = document.getElementById('game-canvas');\n  const ctx = canvas.getContext(\"2d\");\n  canvas.width = _pang__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIM_X;\n  canvas.height = _pang__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIM_Y;\n  \n  const pang = new _pang__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  new _game_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"](pang, ctx).start();\n  // const mo = new MovingObject({pos: [75, 75], radius: 20, vel: [5, 1], color: 'blue', game: true, isBounceable: true});\n  // const mo2 = new MovingObject({pos: [500, 350], radius: 35, vel: [5, 1], color: 'blue', game: true, isBounceable: true});\n  // const b1 = new Bubble({ pos: [200, 200] });\n  // mo.draw(ctx);\n  // mo2.draw(ctx);\n  // b1.draw(ctx);\n  \n  console.log(\"webpack is workingggg\")\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MovingObject; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nclass MovingObject {\n  constructor(options){\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n    this.pang = options.pang;\n    this.isBounceable = options.isBounceable;\n  }\n\n  collideWith(otherObject) {\n    //if Bubble collides with Bullet, split the bubble, remove the bullet\n    //if Bubble collides with Player, reset the level\n  }\n\n  draw(ctx){\n    ctx.beginPath();\n    ctx.arc( this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true );\n    ctx.fillStyle = this.color;\n    ctx.fill();\n  }\n\n  isCollidedWith(otherObject) {\n    const centerDist = _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dist(this.pos, otherObject.pos);\n    return centerDist < (this.radius + otherObject.radius);\n  }\n\n  move() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n\n    if (this.pang.isOutOfBounds(this.pos, this.radius)) {\n      if (this.isBounceable) {\n        this.vel = this.pang.bounce(this.pos, this.vel, this.radius);\n      } else {\n        this.remove();\n      }\n    }\n  }\n\n  movePlayer() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    this.vel[0] *= 0.9; //friction\n    this.vel[1] *= 0.9; //friction\n\n    this.pos = this.pang.bounds(this.pos, this.vel, this.radius);\n    \n  }\n\n  remove() {\n    this.pang.remove(this);\n  }\n\n\n}\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/pang.js":
/*!*********************!*\
  !*** ./src/pang.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pang; });\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble */ \"./src/bubble.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n// import Level from './level';\n//Game holds my current level. \n// ==> Level should hold platforms & spawn bubbles? Or should I have game \n// hold all my bubbles for a given lavel and just spawn based on what level we're on\n\n\n\n\nclass Pang {\n  constructor(){\n    this.bubbles = [];\n    this.players = [];\n    this.bullets = [];\n\n    this.addBubbles();\n  }\n\n  add(object) {\n    if (object instanceof _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      this.bubbles.push(object)\n    } else if (object instanceof _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.players.push(object)\n    } else if (object instanceof _bullet__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      this.bullets.push(object)\n    } else {\n      throw new Error(\"Unknown type of object\")\n    }\n  }\n\n  addBubbles() {\n    for (let i = 0; i < Pang.NUM_BUBBLES; i++) {\n      this.add(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ pang: this }))\n    }\n  }\n\n  addPlayer() {\n    const player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ \n      pang: this,\n      pos: [Pang.DIM_X/2, Pang.DIM_Y-100] \n    })\n    this.add(player);\n    \n    return player;\n  }\n\n  allObjects() {\n    return [].concat(this.bullets, this.bubbles, this.players);\n  }\n\n  bounce(pos, vel, radius) {\n    if ((pos[0]+radius) >= Pang.DIM_X || (pos[0]-radius) <= 0) {\n      vel[0] *= -1\n    } \n    else if ((pos[1]+radius) >= Pang.DIM_Y || (pos[1]-radius) <= 0){\n      vel[1] *=-1\n    }\n    return vel;\n  };\n  \n  bounds(pos, vel, radius) {\n    if (pos[0] + radius > Pang.DIM_X) {\n      // vel[0] = 0;\n      pos[0] = Pang.DIM_X - radius;\n    } else if (pos[0] - radius < 0) {\n      // vel[0] = 0;\n      pos[0] = radius;\n    } else if (pos[1] + radius > Pang.DIM_Y) {\n      // vel[1] = 0;\n      pos[1] = Pang.DIM_Y - radius;\n    } else if (pos[1] - radius < 0) {\n      // vel[1] = 0;\n      pos[1] = radius + 1\n    } \n\n    return pos;\n    // return vel, pos;\n  };\n\n  checkCollisions() {\n    const allObjects = this.allObjects();\n    allObjects.forEach(object => {\n      for ( let i = 0; i < allObjects.length; i++ ) {\n        for ( let j = 0; j < allObjects.length; j++) {\n          const obj1 = allObjects[i];\n          const obj2 = allObjects[j];\n          if (obj1.isCollidedWith(obj2) && (obj1 !== obj2)) {\n            const collision = obj2.collideWith(obj1);\n            if (collision) return;\n          }\n        }\n      }\n    })\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, Pang.DIM_X, Pang.DIM_Y);\n    ctx.fillStyle = Pang.BG_Color;\n    ctx.clearRect(0, 0, Pang.DIM_X, Pang.DIM_Y);\n    this.allObjects().forEach(object => {\n      object.draw(ctx)\n    })\n  }\n\n  isOutOfBounds(pos, radius) {\n    if (pos[0] - radius <= 0 || pos[0] + radius >= Pang.DIM_X) return true;\n    if (pos[1] - radius <= 0 || pos[1] + radius >= Pang.DIM_Y) return true;\n    return false;\n  }\n\n  moveObjects() {\n    this.allObjects().forEach(object => {\n      if (object instanceof _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"] ){\n        object.movePlayer()\n      } else {\n        object.move()\n      }\n    })\n  }\n\n  randomPosition() {\n    return[100 + (1000 * Math.random()), 125 ]\n  }\n\n  remove(object) {\n    if (object instanceof _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      this.bubbles.splice(this.bubbles.indexOf(object), 1);\n    } else if (object instanceof _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.players.splice(this.players.indexOf(object), 1);\n    } else if (object instanceof _bullet__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      this.bullets.splice(this.bullets.indexOf(object), 1);\n    } \n  }\n\n  step() {\n    this.moveObjects();\n    this.checkCollisions();\n  }\n}\n\nPang.BG_Color = '#000000'\nPang.DIM_X = 1200;\nPang.DIM_Y = 800;\nPang.FPS = 60;\nPang.NUM_BUBBLES = 1;\n\n//# sourceURL=webpack:///./src/pang.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\n\n\nclass Player extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options){\n    options.radius = Player.RADIUS;\n    options.color = 'black';\n    options.vel = options.vel || [0,0];\n    super(options)\n    this.isBounceable = false;\n  }\n\n  draw(ctx) {\n    // ctx.beginPath();\n    // ctx.rect(this.pos[0], this.pos[1], 50, 100)\n    // ctx.closePath();\n\n    const img = new Image();\n    img.src = \"../assets/pang.png\";\n    ctx.drawImage( img, 0, 1.3, 31, 38, this.pos[0], this.pos[1], 80, 125 )\n    // ctx.stroke();\n  }\n\n  shift(unit) {\n    this.vel[0] += unit[0];\n    this.vel[1] += unit[1];\n  }\n\n  fireBullet(){\n    if (this.pang.bullets.length === 0) {\n      const bullet = new _bullet__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        pos: [this.pos[0] + 28, this.pos[1]+100],\n        vel: [0, -10],\n        color: 'pink',\n        pang: this.pang\n      });\n      this.pang.add(bullet);\n    }\n  }\n\n};\n\nPlayer.RADIUS = 25;\n\n//# sourceURL=webpack:///./src/player.js?");

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