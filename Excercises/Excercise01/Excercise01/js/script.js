/**************************************************
Excersise 1
Jakob Araujo
**************************************************/
//Circle width
let cWid = 0;
//Colours for Circle
let r1 = 255;
let g1 = 50;
let b1 = 0;
//Square X
let sX = 1;
// Colours for Square
let rectShade = 255;
//Colours for Triangle
let r3 = 30;
let g3 = 20;
let b3 = 100;
//co-ordinates for Triangle points.
let y1 = 0;
let x1 = 80;

function setup() {
  createCanvas(640, 640);
  background(0);

}

// draw()
//
// Description of draw() goes here.
function draw() {

  //Connect Triangle to mouse
  y1 = mouseY;
  r3 = mouseX;
  //Connect the Circle's width to the mouse.
  cWid = mouseX + mouseY;
  //Have the Squares X co-ordinate steadily increase.
  sX ++;
  //Map the shade of the square.
  rectX = map(sX, 0, width, 20, 60);
  //Ellipse 1
  fill(r1, g1, b1);
  stroke(255, 0, 0);
  ellipse (mouseX, mouseY, cWid);

  //Rectangle 1
  fill(rectShade);
  noStroke();
  rect (rectX, 50, 70);

  //Triangle
  fill(r3, g3, b3);
  triangle(x1, y1, 100, 10, 40, 20);

}
