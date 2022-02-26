
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2, 50, width-100, 40);
	bobObject1 = new Bob(170, 350, 30);
	bobObject2 = new Bob(240, 350, 30);
	bobObject3 = new Bob(310, 350, 30);
	bobObject4 = new Bob(380, 350, 30);
	bobObject5 = new Bob(450, 350, 30);

	rope1= new Rope(bobObject1.bob, roof.body, -30*2, 0);
	rope2= new rope(bobObject2.bob, roof.body, -30*2, 0);
	rope3= new rope(bobObject3.bob, roof.body, -30*2, 0)
	rope4= new rope(bobObject4.bob, roof.body, -30*2, 0)
	rope5= new rope(bobObject5.bob, roof.body, -30*2, 0)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(128);
  
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



