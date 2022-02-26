
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rock;
var boy;
var ground;
var toss;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//rock = new Rock();
	boy = new Boy(150, 400, 250, 250);
	rock = new Rock(500, 250, 40, 40);
	toss = new Throw(boy.body,{x:100, y:200});

	ground = new Ground(width/2, 470, width, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220, 220, 220);
  
  boy.display();
  rock.display();
  ground.display();
  toss.display();
  toss.fly();
  
}



