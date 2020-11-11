/**************************************************
Project 2
Jakob Araujo
**************************************************/
"use strict"

let player = 0;
let playerAt = {
  x: 100,
  y: 100,
  v: 5,
  size: 100,
  speed: 5,
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player(playerAt.x, playerAt.y, playerAt.v, playerAt.size, playerAt.speed);
}

function draw() {
background(255);
player.playerMove();
player.playerDraw();
}
