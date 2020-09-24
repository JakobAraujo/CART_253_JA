/**************************************************
Activiy 04
Jakob Araujo
**************************************************/


//The Y position for COVID
let covY = 0;
//The X position for COVID
let covX = 0;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(640, 640);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
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
} else {covY ++}

  fill(255, 0, 0);
  ellipse(covX, covY, 64);

  //Player

}
