/**************************************************
Project 1: "Save the Bangladeshi Flag!"
Jakob Araujo
**************************************************/
"use strict";
//The states of the simulation
let start = `Press Click to Feed the Bangladeshi Flag.
Watch out! It's stuborn!`;
let simulation = `Go`;
let end = `The End`;
let state = `start`;

let conS = 0;
//the red circle
let circle = {
  x: 300,
  y: 300,
  size: 100,

}

//The otline for the red circle
let circle2 = {
  size: 200,
}
//Controlled by the user
let feeder = {
  y: 100,
  size: 100,
}
//the food pellet send by the player
let rectangle ={
  x: 0,
  y: 300,
  size: 30,
}
//Perlin noise for moving the red circle.
let noiseX = 1;
let n = 0;
//holds the image of the flag
let img = 0;

function preload(){
  img = loadImage('assets/images/flag.png');
}


function setup() {
  createCanvas(640, 640);
  noCursor();

}


function draw() {
  console.log(circle.size);
  background(0, 103, 71);
  stateChange();
  //If the state is in 'Simulation' run the rest of the program.
  if(state === `simulation`){
    circleOutline();
    redCircle();
    player();
    rectSpawn();
    touch();
    win();
  }

}

//draws and moves the user. A blue circle
function player(){
  push();
  noStroke();
  fill(0,0,255);
  ellipseMode(CENTER);
  ellipse(mouseX, feeder.y, feeder.size);
  pop();
}
//Draws and shrinks the red circle.
function redCircle(){
  noiseX = noiseX + 0.01;
  let n = noise(noiseX) * width;
    //Circle
  push();
  noStroke();
  fill(255,0,0);
  ellipseMode(CENTER);
  circle.size = circle.size - 0.3;
  ellipse(n, circle.y, circle.size);
  if(circle.size < 50){
    circle.size = 50;
  }
  pop();
}
//draws and moves the outline of the red circle
function circleOutline(){
  //The noise which dictates the movement of the outline.
  noiseX = noiseX + 0.01;
  let n = noise(noiseX) * width;
  //Circle Outline
  push();
  fill(0, 103, 71);
  ellipseMode(CENTER);
  ellipse(n, circle.y, circle2.size);
  pop();
}

//spawns and moves the rectangle if the mouse is pressed
function rectSpawn(){
  if(mouseIsPressed){
    fill(255);
    rectMode(CENTER);
    rect(mouseX, rectangle.y, rectangle.size);
    rectangle.y = rectangle.y + 5;
  } else{ rectangle.y = 100}
}

//detects if the rectangle intersects with the red circle
//Makes the red circle grow if there is intersection
function touch(){
  let d = dist(mouseX, rectangle.y, circle.y, circle.x);
  if(d < circle.size + rectangle.size /2){
    circle.size ++;
  }
}
//changes which state the simulation is in.
function stateChange(){
  //Start of simulation
  if(state === `start`){
    startScreen();
  }
  //End the simulation
  if(state === `end`){
    endScreen();
  }
}
//the start screen for the simulation
function startScreen(){
    fill(255);
    textAlign(CENTER);
    textSize(15);
    text(start, width/2, 100);
}
//The end screen for the simulation with the flag image
function endScreen(){
      imageMode(CENTER);
      image(img, width/2, height/2, 800, 476);
      fill(255);
      textAlign(CENTER);
      textSize(65);
      text(end, width/2, 100);
      noLoop();
}

//If the red circle gets big enough the player wins.
function win(){
  if(circle.size > 200){
    state = `end`
  }
}
//if the mouse is clicked the simulation starts
function mouseClicked(){
  state = `simulation`;
}
