const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld,obj1,groundOptions, ball ,ballOptions;


function setup() {
  var canvas=createCanvas(400,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  var groundOptions={
    isStatic:true
  }
  ground=Bodies.rectangle(200,400,400,20,groundOptions);
  World.add(myWorld,ground);

  ballOptions={
    restitution: 1.0
  }
  
  ball = Bodies.circle(200, 100, 20, ballOptions);
  World.add(myWorld, ball);

  
  /*console.log(obj1);
  console.log();
  console.log(obj1.position.y);
  console.log(obj1.type);*/
}

function draw() {
  background(0);  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}