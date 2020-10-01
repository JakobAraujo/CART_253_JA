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
  covid.y = random(0, height);
  covid.x = random(0, width);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  //Draw the stars in the background.
  for (let i = 0; i < 1000; i ++){
    starX = random(0, width);
    starY = random(0, height);
    stroke(255);
    point(starX, starY);
  }
  noStroke();
  //COVID:
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
  fill(covid.fill.r, covid.fill.g, covid.fill.b);
  ellipse(covid.x, covid.y, covid.w);

  //Player:
  //Player is a blue circle
  ellipseMode(CENTER);
  fill(0, 0, 255);
  ellipse (mouseX, mouseY, plW);
  //Collision between Player and COVID
  let d = dist(mouseX, mouseY, covid.x, covid.y);

  if(d < covid.w + plW){
    noLoop();
  }

}
