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

  move1();
  //Draw lover1
  display1();

  move2();
  //Draw lover2
  display2();




  function endScreen(){
    textAlign();
    textSize();
    text();
  }
  function edgeDetect(){
    //Screen wrap
    if(lover1.x > width) {
      //text
    }
    if(lover1.x < 0){
      //text
    }

    if(lover1.y > height){
      //text
    }

    if(lover1.y < 0){
      //text
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
    lover1.yv = lover1.speed;
    lover1.y = lover1.y + lover1.yv;
    lover1.xv = lover1.speed;
    lover1.x = lover1.x + lover1.xv;
  }
  function move2(){
    //Moverment for Lover2
    lover2.yv = lover2.speed;
    lover2.y = lover2.y + lover2.yv;
    lover2.xv = lover2.speed;
    lover2.x = lover2.x + lover2.xv;
  }
  function collision(){
    let d = dist(lover1.w, lover2.w);
    if(d < lover1.w + lover2.w /2){
      noLoop();
    }
  }
}
