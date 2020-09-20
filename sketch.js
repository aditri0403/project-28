
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree1 = new tree(200,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  tree1.display();
 
}



