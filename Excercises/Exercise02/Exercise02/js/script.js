/**************************************************
Exercise 2
Jakob Araujo
**************************************************/

let covid = {
  x: 0,
  y: 0,
  w: 64,
  fill:{
      r: 250,
      g: 60,
      b: 60
    }
}

let player = {
  x:0,
  y:0,
  w:64,
  vx:0,
  vy:0,
  s:5
}

let backFill = 0;

//The X position for the stars
let starX = 0;
//The Y position for the stars
let starY = 0;


function preload(){
  img = loadImage('assets/images/clown.png');
}

function setup() {
  createCanvas(640, 640);
  covid.y = random(0, height);
  covid.x = random(0, width);
}

function draw() {
  background(covid.w);
  image(img, 0, 0);
  push();
    stroke(0, 255, 0);
    fill(0, 0, 255);
    textSize(50);
    textAlign(CENTER);
    text('Arrows Keys to move', width / 2, height / 2);
  pop();
  //Draw the stars in the background.
  for (let i = 0; i < 5; i ++){
    starX = random(0, width);
    starY = random(0, height);
    stroke(255, 0, 0);
    rect(starX, starY, 80);
  }

////////////////////////////////
push();
  //COVID:
  covid.w = constrain(covid.w, 64, 200);
  let d1 = dist(player.x, player.y, covid.x, covid.y);
  if(d1 < 300){
    covid.w ++;
  } else {
    covid.w --;
  }
  //Steadily increase COVID'S X postion
  covid.x ++;
  //loops COVID across the screen
  if(covid.x > width){
    covid.x = 0;
  }
  //Randomize the Y position for COVID
  if(covid.y > height){
  covid.y = random(0, height);
}

  //COVID is a red circle.
  noStroke();
  fill(covid.fill.r, covid.fill.g, covid.fill.b);
  ellipse(covid.x, covid.y, covid.w);
pop();

/////////////////////////////////////
  //Player:
  //Player movement
  //Left and Right:
  if(keyIsDown(LEFT_ARROW)){
    player.vx = player.s;
  }
  if(keyIsDown(RIGHT_ARROW)){
    player.vx = -player.s;
  }

  player.x = player.x + player.vx;

  //Screen Wrap
  if(player.x < width){
    player.x = player.x + width;
  }
  if(player.x > width){
    player.x = player.x - width;
  }

  //Up and Down
  if(keyIsDown(UP_ARROW)){
    player.vy = player.s;
  }
  if(keyIsDown(DOWN_ARROW)){
    player.vy = -player.s;
  }

  player.y = player.y + player.vy;

  //Screen Wrap
  if(player.y < height){
    player.y = player.y + height;
  }

  if(player.y > height){
    player.y = player.y - height;
  }
  //Draw
  //Player is a blue circle
  ellipseMode(CENTER);
  fill(0, 0, 255);
  ellipse (player.x, player.y, player.w);

  //Collision between Player and COVID
  let d = dist(player.x, player.y, covid.x, covid.y);

  if(d < covid.w + player.w / 25){
    noLoop();
  }

}
