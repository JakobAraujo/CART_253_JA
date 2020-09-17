/**************************************************
Excersise 1
Jakob Araujo
**************************************************/

//Colours for Circle
let r1 = 255;
let g1 = 50;
let b1 = 0;
// Colours for Square
let r2 = 50;
let g2 = 50;
let b2 = 50;
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
  //Ellipse 1
  fill(r1, g1, b1);
  stroke(255, 0, 0);
  ellipse (69, 69, 69);

  //Rectangle 1
  fill(r2, g2, b2);
  noStroke();
  rect (100, 50, 70);

  //Triangle
  fill(r3, g3, b3);
  triangle(x1, y1, 100, 10, 40, 20);

}
