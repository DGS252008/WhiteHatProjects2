const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1, block2, block3, block4, block5, block6, block7, block8,
    block9, block10, block11, block12, block13, block14, block15, block16;
var block_1, block_2, block_3, block_4, 
    block_5, block_6, block_7, block_8, block_9;
var ground1, ground2;
var shooter, sling;
var polygon;

var gameState = "onSling";

function preload(){
  polygon = loadImage('polygon.png')
}

function setup() {
  createCanvas(1200,600);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  // first layer 
  block1 = new Block(330, 258, 30, 40); 
  block2 = new Block(360, 258, 30, 40); 
  block3 = new Block(390, 258, 30, 40); 
  block4 = new Block(420, 258, 30, 40); 
  block5 = new Block(450, 258, 30, 40); 
  block6 = new Block(300, 258, 30, 40); 
  block7 = new Block(270, 258, 30, 40); 
  // second layer 
  block8 = new Block(300, 218, 30, 40); 
  block9 = new Block(330, 218, 30, 40); 
  block10 = new Block(360, 218, 30, 40); 
  block11 = new Block(390, 218, 30, 40); 
  block12 = new Block(420, 218, 30, 40); 
  // third layer 
  block13 = new Block(330, 198, 30, 40); 
  block14 = new Block(360, 198, 30, 40); 
  block15 = new Block(390, 198, 30, 40); 
  // fourth layer 
  block16 = new Block(360, 158, 30, 40);


  ground1 = new Ground(380, 300, 350, 20);
  ground2 = new Ground(780, 500, 350, 20);

  // first layer 
  block_1 = new Block(800, 480, 30, 40); 
  block_2 = new Block(830, 480, 30, 40); 
  block_3 = new Block(710, 480, 30, 40); 
  block_4 = new Block(740, 480, 30, 40); 
  block_5 = new Block(770, 480, 30, 40); 
  //second layer
  block_6 = new Block(740, 440, 30, 40); 
  block_7 = new Block(770, 440, 30, 40);
  block_8 = new Block(800, 440, 30, 40); 
  //third layer
  block_9 = new Block(770, 400, 30, 40); 

  shooter = Bodies.circle(100, 300, 20);
  World.add(world, shooter)
  
  sling = new SlingShot(shooter, {x:150, y:95});



  Engine.run(engine);
}

function draw() {
  background("#bee8fa");  
 
  block1.display();
  block2.display();
  block5.display();
  block3.display();
  block4.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block_1.display();
  block_2.display();
  block_3.display();
  block_4.display();
  block_5.display();
  block_6.display();
  block_7.display();
  block_8.display();
  block_9.display();


  imageMode(CENTER);
  image(polygon, shooter.position.x, shooter.position.y, 40, 40);

  ground1.display();
  ground2.display();

  sling.display();
}

function mouseDragged(){
      Matter.Body.setPosition(this.shooter, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}