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

  lover1.x = width / 2;
  lover1.y = height / 2;
  lover1.speed = random(-5, 5);

  lover2.x = width  / 2;
  lover2.y = height / 3;
  lover2.speed = random(-5, 5);

  console.log(lover2.speed);
  console.log(lover1.speed);
}

function draw() {
  background(0);

  lover1.yv = lover1.speed;
  lover1.y = lover1.y + lover1.yv;
  lover1.xv = lover1.speed;
  lover1.x = lover1.x + lover1.xv;
  //Draw lover1
  push();
    ellipseMode(CENTER);
    stroke(50, 255, 0);
    fill (245, 66, 236);
    ellipse(lover1.x, lover1.y, lover1.w);
  pop();

  lover2.yv = lover2.speed;
  lover2.y = lover2.y + lover2.yv;
  lover2.xv = lover2.speed;
  lover2.x = lover2.x + lover2.xv;
  //Draw lover2
  push();
    ellipseMode(CENTER);
    stroke(50, 255, 0);
    fill (245, 66, 236);
    ellipse(lover2.x, lover2.y, lover2.w);
  pop();
}
