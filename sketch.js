
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var tree1,stones,ground1;
var boy;
var mango1,mango2,mango3,mango4,mango5;
var launcher1;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree1 = new tree (600,470,200,200);

	stones = new stone (120,510);
	
	ground1 = new ground (400,680,800,30);

	boy = createSprite (200,610,100,100);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	
	mango1 = new mango (610,550);
	mango2 = new mango (620,550);
	mango3 = new mango (625,550);
	mango4 = new mango (615,545);
	mango5 = new mango (625,545); 
	
	launcher1 = new launcher (stones.body, {x : 190, y : 610});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  tree1.display();

  stones.display();

  ground1.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  launcher1.display();

  detectCollision(stones, mango1);
  detectCollision(stones, mango2);
  detectCollision(stones, mango3);
  detectCollision(stones, mango4);
  detectCollision(stones, mango5);
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stones.body, {x: mouseX , y: mouseY});
   
}
function mouseReleased(){
	launcher1.fly();
}
function detectCollision(stone,mango){
  var distance = dist(stone.body.position.x,stone.body.position.y,mango.body.position.x,mango.body.position.y);
  if(distance <= mango.r + stone.r)
  {
	Matter.Body.setStatic(mango.body,false);
  Matter.Body.setStatic(stone.body,false);
  }
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stones.body,{x : 235, y : 420});
		launcher1.attach(stones.body);
	}
}