const Engine = Matter.Engine;
const World = Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var bgimg;
function preload(){

bgimg=loadImage("sprites/bg.png")

}


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  bird = new Bird(20,20);

  box1 = new Box(700,320,70,70);
  box2 = new Box(900,320,70,70);
  log1 = new log(800,275,275,PI/2);
  pig1 = new pig(800,350);

  box3 = new Box(700,230,70,70);
  box4 = new Box(900,230,70,70);
  log2 = new log(800,185,275,PI/2);
  pig2 = new pig(800,210);

  box5 = new Box(800,150,70,70);
  log3 = new log(760,120,150,PI/8);
  log4 = new log(840,120,150,-PI/8)

  ground = new Ground(600,390,1200,20);

 
  
}

function draw() {
  background(bgimg);
  Engine.update(engine);

  bird.display();

  box1.display();
  box2.display();
  pig1.display();
  log1.display();
  
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
    
  box5.display();
  log3.display();
  log4.display();

  ground.display();
}