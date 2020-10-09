/**************************************************
Activiy 05
Jakob Araujo
**************************************************/
let state = `start`;
let end = `You Die Alone`;
let love = `<3Love Springs Eternal<3`;
let start = `I Wanna Know What Love Is!`;

let lover1={
  x: 0,
  y: 0,
  w: 69,
  xv: 0,
  yv: 0,
  speedX: 0,
  seedY: 0
}

let lover2={
  x: 0,
  y: 0,
  w: 69,
  xv: 0,
  yv: 0,
  speedX: 0,
  speedY: 0
}


function startPositions1(){
  lover1.x = width / 2;
  lover1.y = height / 2;
  lover1.speedX = random(-1, 1);
  lover1.speedY = random(-1, 1);
}
function startPositions2(){
  lover2.x = width  / 2;
  lover2.y = height / 4;
  lover2.speedX = random(-1, 1);
  lover2.speedY = random(-1, 1);
}

function mousePressed(){
  if(state === `start`){
    state = `simulation`;
  }
}

function setup() {
  createCanvas(1000, 500);
  startPositions1();
  startPositions2();
}

function draw() {
  background(0);
  stateChange();
  if(state === `simulation`){
  move1();
  display1();

  move2();
  //Draw lover2
  display2();

  collision();
  edgeDetect();
}


/////////////////////////////////////////////////
  function stateChange(){
    if(state === `start`){
      titleScreen();
    } else if (state === `end`) {
      endScreen();
    } else if (state === `love`){
      loveScreen();
    }
  }

  function endScreen(){
    fill(255);
    textAlign(CENTER);
    textSize(65);
    text(end, width/2, height/2);
  }

  function loveScreen(){
    fill(255);
    textAlign(CENTER);
    textSize(65);
    text(love, width/2, height/2);
  }
  function titleScreen(){
    fill(255);
    textAlign(CENTER);
    textSize(65);
    text(start, width/2, height/2);
  }

  function edgeDetect(){
    //Screen wrap
    if(lover1.x > width) {
      state = `end`
    }
    if(lover1.x < 0){
      state = `end`
    }

    if(lover1.y > height){
      state = `end`
    }

    if(lover1.y < 0){
      state = `end`
    }

  }
  function display1(){
    push();
      ellipseMode(CENTER);
      stroke(50, 255, 0);
      fill (245, 66, 236);
      ellipse(lover1.x, lover1.y, lover1.w);
    pop();
  }
  function display2(){
    push();
      ellipseMode(CENTER);
      stroke(50, 255, 0);
      fill (245, 66, 236);
      ellipse(lover2.x, lover2.y, lover2.w);
    pop();

  }
  function move1(){
    //Movement for Lover1
    lover1.yv = lover1.speedY;
    lover1.y = lover1.y + lover1.yv;
    lover1.xv = lover1.speedX;
    lover1.x = lover1.x + lover1.xv;
  }
  function move2(){
    //Moverment for Lover2
    lover2.yv = lover2.speedY;
    lover2.y = lover2.y + lover2.yv;
    lover2.xv = lover2.speedX;
    lover2.x = lover2.x + lover2.xv;
  }
  function collision(){
    let d = dist(lover1.x, lover1.y, lover2.x, lover2.y);
    if(d < lover1.w + lover2.w /25){
      state = `love`;
    }
  }


}
