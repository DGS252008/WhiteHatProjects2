const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var block_1, block_2, block_3, block_4, block_5, block_6, block_7, block_8, block_9;
var polygon;
var slingShot;
var score = 0;
var engine, world;

function preload(){
  polygonImg = loadImage('polygon.png')
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

// first layer 
block1 = new Block(330, 158, 30, 40); 
block2 = new Block(360, 158, 30, 40); 
block3 = new Block(390, 158, 30, 40); 
block4 = new Block(420, 158, 30, 40); 
block5 = new Block(450, 158, 30, 40); 
block6 = new Block(300, 158, 30, 40); 
block7 = new Block(270, 158, 30, 40); 
// second layer 
block8 = new Block(300, 118, 30, 40); 
block9 = new Block(330, 118, 30, 40); 
block10 = new Block(360, 118, 30, 40); 
block11 = new Block(390, 118, 30, 40); 
block12 = new Block(420, 118, 30, 40); 
// third layer 
block13 = new Block(330, 98, 30, 40); 
block14 = new Block(360, 98, 30, 40); 
block15 = new Block(390, 98, 30, 40); 
// fourth layer 
block16 = new Block(360, 58, 30, 40);


ground1 = new Ground(380, 200, 350, 20);
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

  polygon = Bodies.circle(100,200,20);
  World.add(world, polygon);

  slingShot = new SlingShot(polygon, {x:100, y:250});
}

function draw() {
  backgroundColor();
  fill("#EE6C4D")
  textSize(20);
  text("Score: " + score, 1000, 20);
    
  Engine.update(engine);

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

  block1.score();
  block2.score();
  block5.score();
  block3.score();
  block4.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  block_1.score();
  block_2.score();
  block_3.score();
  block_4.score();
  block_5.score();
  block_6.score();
  block_7.score();
  block_8.score();
  block_9.score();

  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);

  ground1.display();
  ground2.display();

  slingShot.display();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
slingShot.fly();
}

async function backgroundColor(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13);

  if(hour >= 06 &&
     hour <= 19){
         background("#FFFFF0");
     }
  else{
      background("#99C1B9");
  }
  backgroundImg = loadImage(bg);
}
