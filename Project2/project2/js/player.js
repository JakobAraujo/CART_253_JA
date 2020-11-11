/**************************************************
Player Object
Jakob Araujo
**************************************************/

class Player{
  constructor(x, y, v, size, speed){
    this.x = x;
    this.y = y;
    this.v = v;
    this.size = size;
    this.speed = speed;
  }

  playerMove(){
    if(keyIsDown(RIGHT_ARROW)){ //Move right
      this.v = this.speed;
      this.x = this.x + this.v;
    }
    if(keyIsDown(LEFT_ARROW)){ //Move left
      this.v = this.speed;
      this.x = this.x - this.v;
    }
    if(keyIsDown(UP_ARROW)){ //Move up
      this.v = this.speed;
      this.y = this.y - this.v;
    }
    if(keyIsDown(DOWN_ARROW)){ //Move up
      this.v = this.speed;
      this.y = this.y + this.v;
    }
  }

  playerDraw() {
    fill(0);
    ellipse(this.x, this.y, this.size);
  }

}
