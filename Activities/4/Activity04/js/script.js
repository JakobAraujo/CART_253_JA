/**************************************************
Activiy 04
Jakob Araujo
**************************************************/


//The Y position for COVID
let covY = 0;
//The X position for COVID
let covX = 0;
//The radius of the COVID circle
let covW = 64;
//The radius of the Player circle
let plW = 64;
//The X position for the stars
let starX = 0;
//The Y position for the stars
let starY = 0;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(640, 640);
  covY = random(0, height);
  covX = random(0, width);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  for (let i = 0; i < 1000; i ++){
    starX = random(0, width);
    starY = random(0, height);
    stroke(255);
    point(starX, starY);
  }
  noStroke();
  //COVID:
  //Steadily increase COVID'S X postion
  covX ++;
  //loops COVID across the screen
  if(covX > width){
    covX = 0;
  }
  //Randomize the Y position for COVID
  if(covY > height){
  covY = random(0, height);
}

  //COVID is a red circle.
  fill(255, 0, 0);
  ellipse(covX, covY, covW);

  //Player:
  //Player is a blue circle
  ellipseMode(CENTER);
  fill(0, 0, 255);
  ellipse (mouseX, mouseY, plW);
  //Collision between Player and COVID
  let d = dist(mouseX, mouseY, covX, covY);

  if(d < covW + plW){
    noLoop();
  }

}
