/**************************************************
Activiy 05
Jakob Araujo
**************************************************/
let lover1={
  x: 0,
  y: 0,
  w: 69,
  xv: 0,
  yv: 0,
  speed: 5
}

let lover2={
  x: 0,
  y: 0,
  w: 69,
  xv: 0,
  yv: 0,
  speed: 5
}


function setup() {
  createCanvas(1000, 1000);
  lover1.x = width / 3;
  lover1.y = height / 2;

  lover2.x = width  / 6;
  lover2.y = height / 4;
}

function draw() {
  background(0);

  //Draw lover1
  push();
    ellipseMode(CENTER);
    stroke(50, 255, 0);
    fill (245, 66, 236);
    ellipse(lover1.x, lover1.y, lover1.w);
  pop();

  //Draw lover2
  push();
    ellipseMode(CENTER);
    stroke(50, 255, 0);
    fill (245, 66, 236);
    ellipse(lover2.x, lover2.y, lover2.w);
  pop();
}
