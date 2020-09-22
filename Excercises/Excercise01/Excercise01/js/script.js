/**************************************************
Excersise 1
Jakob Araujo
**************************************************/
//Circle width
let cWid = 0;
//Colours for Circle
let r1 = 255;
let g1 = 0;
let b1 = 0;
//Square X
let sX = 1;
// Colours for Square
let rectS = 0;
//Colours for Triangle
let r3 = 30;
let g3 = 20;
let b3 = 100;
//co-ordinates for Triangle points.
let y1 = 0;
let x1 = 80;

function setup() {
  createCanvas(640, 640);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  //Connect Triangle Y postion and colour to mouse
  y1 = mouseY;
  g3 = mouseY;
  r3 = mouseX;

  //Have the Squares X co-ordinate steadily increase.
  sX = sX + random();
  
  //Map the x position of the square.
  rectS = mouseX;
  rectX = map(sX, 0, width, 20, 500);
  rectShade = map (rectS, 1, 255, 25, 200);

  //Connect the Circle's width to the mouse. And constrain it.
  cWCon = constrain(mouseX, 1, 400);
  cWid = cWCon + mouseY;

  //Colours for the circle.
  g1 = random(1, 100);
  b1 = random(1, 100);
  r1 = cWCon;
  //Ellipse 1
  fill(r1, g1, b1);
  stroke(255, 0, 0);
  ellipse (mouseX, mouseY, cWCon);

  //Rectangle 1
  fill(rectShade);
  noStroke();
  rect (rectX, 50, 70);

  //Triangle
  fill(r3, g3, b3);
  triangle(x1, y1, 100, 10, 40, 20);

}
