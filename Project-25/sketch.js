
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash, bin1, bin2, bin3, ground, trashCanImg;

function preload()
{
	trashCanImg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(350, 680, 1400, 10);
	trash = new Balls(40, 660 , 50);
	
	bin1 = new Bin(800, 665, 150, 20);
	bin2 = new Bin(720, 590, 10, 170);
	bin3 = new Bin(880, 590, 20, 170);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(60, 98, 123);
  
  ground.display();
  
  bin1.display();
  bin2.display();
  bin3.display();

  image(trashCanImg, 700, 480, 200, 200);
  
  trash.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(trash.body, trash.body.position,{x:130, y:-150});
	}
}

