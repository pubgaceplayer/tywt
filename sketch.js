
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
let engine;
let world;
var box;
function setup()
{
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;
var boxopptions={
  isStatic:true
}
box=Bodies.rectangle(200,370,400,10,boxopptions);
World.add(world,box);
var ballopptions={
  restitution:1.0
}
ball=Bodies.circle(200,10,30,ballopptions)
World.add(world,ball)
}

function draw() 
{
  background(51);
 Engine.update(engine);
 rectMode(CENTER)
 rect(box.position.x,box.position.y,400,10);
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,30)
}
















