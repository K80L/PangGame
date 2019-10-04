import MovingObject from "./moving_object";
import Bullet from './bullet';

export default class Player extends MovingObject {
  constructor(options) {
    options.radius = Player.RADIUS;
    options.color = 'black';
    options.vel = options.vel || [0,0];
    super(options)
    this.state = options.state || 'standingRight'
    this.isBounceable = false;
    this.tick = 0;
  }

  draw(ctx) {
    // ctx.beginPath();
    // ctx.rect(this.pos[0], this.pos[1], 50, 120);
    // ctx.closePath();
    // ctx.stroke();
    if (this.tick >= 40) {
      this.tick = 0;
    }
    const img = new Image();
    img.src = "../assets/pang.png";
    //Set the state of the player
    if (this.vel[0] < 0.3 && this.vel[0] > -0.3) {
      this.tick = 0;
      this.state = 'standingRight';
    } else if (this.vel[0] >= 0.3 && this.vel[0] <= 4) {
      this.state = 'walkingRight';
    } else if (this.vel[0] <= -0.3 && this.vel[0] >= -4) {
      this.state = 'walkingLeft';
    } else if (this.vel[0] > 4) {
      this.tick++;
      if (this.tick === 8) {
        this.state = 'runningRight'
        // this.state = this.state === 'runningRight' ? 'steppingRight' : 'runningRight'
      } else if ( this.tick === 16) {
        this.state = 'steppingRight'
      } else if ( this.tick === 24) {
        this.state = 'runningRight2'
      } else if ( this.tick === 32) {
        this.state = 'steppingRight2'
      }
    } else if (this.vel[0] < -4) {
      this.tick++;
      if (this.tick === 8) {
        this.state = 'runningLeft'
        // this.state = this.state === 'runningLeft' ? 'steppingLeft' : 'runningLeft'
      } else if ( this.tick === 16) {
        this.state = 'steppingLeft'
      } else if ( this.tick === 24) {
        this.state = 'runningLeft2'
      } else if ( this.tick === 32) {
        this.state = 'steppingLeft2'
      }
    }
    //Draw appropriate sprite based on state
    if (this.state === 'standingRight') {
      ctx.drawImage( img, 172, 1.3, 29, 38, this.pos[0]-10, this.pos[1], 110, 150 )
    } else if (this.state === 'walkingRight') {
      ctx.drawImage( img, 0, 1.3, 30, 38, this.pos[0]-10, this.pos[1], 110, 150 )
    } else if (this.state === 'walkingLeft') {
      ctx.drawImage( img, 510.5, 1.3, 31, 38, this.pos[0]-10, this.pos[1], 110, 150 )
    } else if (this.state === 'runningRight') {
      ctx.drawImage( img, 35, 1.3, 30, 38, this.pos[0]-10, this.pos[1], 110, 150 )
    } else if (this.state === 'runningLeft') {
      ctx.drawImage( img, 476.5, 1.3, 31, 38, this.pos[0]-10, this.pos[1], 110, 150 )
    } else if ( this.state === 'steppingRight') {
      ctx.drawImage( img, 69.5, 1.3, 30, 38, this.pos[0]-10, this.pos[1], 110, 150 )  
    } else if ( this.state === 'steppingLeft' ) {
      ctx.drawImage( img, 442.5, 1.3, 31, 38, this.pos[0]-10, this.pos[1], 110, 150 )
    } else if (this.state === 'runningRight2') {
      ctx.drawImage( img, 102.5, 1.3, 30, 38, this.pos[0]-10, this.pos[1], 110, 150 )
    } else if (this.state === 'runningLeft2') {
      ctx.drawImage( img, 408.5, 1.3, 31, 38, this.pos[0]-10, this.pos[1], 110, 150 )
    } else if ( this.state === 'steppingRight2') {
      ctx.drawImage( img, 136.5, 1.3, 30, 38, this.pos[0]-10, this.pos[1], 110, 150 )   
    } else if ( this.state === 'steppingLeft2' ) {
      ctx.drawImage( img, 374.5, 1.3, 31, 38, this.pos[0]-10, this.pos[1], 110, 150 )
    }
  }

  fireBullet() {
    if (this.pang.bullets.length === 0) {
      const bullet = new Bullet({
        pos: [this.pos[0] + 28, this.pos[1]+100],
        vel: [0, -10],
        color: 'pink',
        pang: this.pang
      });
      this.pang.add(bullet);
    }
  }

  move(delta) {
    const velocityScale = delta / Player.NORMAL_FRAME_TIME_DELTA;
    const offsetX = this.vel[0] * velocityScale;
    const offsetY = this.vel[1] * velocityScale;

    this.pos[0] = this.pos[0] + offsetX; //regular old moving
    this.pos[1] = this.pos[1] + offsetY; //regular old moving
    this.vel[0] *= 0.92; //friction
    this.vel[1] *= 0.92; //friction
    this.pos = this.pang.bounds(this.pos, this.radius);
  }

  shift(unit) {
    this.vel[0] += unit[0];
  }
};

Player.RADIUS = 25;
Player.NORMAL_FRAME_TIME_DELTA = 1000 / 60;
Player.STATES = ['standing', 'walking', 'shooting', 'climbing']