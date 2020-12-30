//1st step: Name Aliasing-Used to indicate a name (nickname)
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

//2nd step: Declaring your own world and engine
var myEngine,myWorld;
//3rd step: Declaring whatever objects you wish to make
var ground,ball;



function setup() {
  createCanvas(400,400);

  //4th step: Creating your own engine and adding world to it

  //Acquiring all of the Physics Engine properties into myEngine
  myEngine=Engine.create();
  //Adding engine.world to myWorld
  myWorld = myEngine.world;


  //5th step: Creating your own objects
  //Giving what shape the object should be 
  ground=Bodies.rectangle(200,380,400,10,{isStatic:true});
  World.add(myWorld,ground);
  

  var ballOptions={
    //Degree of bounciness, no semi-colon needed
      restitution:2.0,
      //Mass of the object
      density:1
  }

  ball=Bodies.circle(200, 100, 30,ballOptions);
  World.add(myWorld, ball);
  console.log(ball);

}

function draw() {
  background("black");  
  //VERY IMPORTANT 6th Step: Updating engine
  Engine.update(myEngine);

  //7th step: Displaying the ground object and other objects that have been created
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);

  ellipseMode(RADIUS);
  circle(ball.position.x, ball.position.y, 30);

 //Drawsprites is not required because we only created a rectangle using physics engine body and no sprites
}