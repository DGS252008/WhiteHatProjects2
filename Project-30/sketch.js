const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var block_1, block_2, block_3, block_4, block_5, block_6, block_7, block_8, block_9;
var polygon;
var slingShot;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  block1 = new Block(330, 235, 30, 40);
  block2 = new Block(360, 235, 30, 40);
  block3 = new Block(390, 235, 30, 40);
  block4 = new Block(420, 235, 30, 40);
  block5 = new Block(450, 235, 30, 40);
  
  block6 = new Block(360, 195, 30, 40);
  block7 = new Block(390, 195, 30, 40);
  block8 = new Block(420, 195, 30, 40);

  block9 = new Block(360, 155, 30, 40);

  block_1 = new Block()
  polygon = Bodies.circle(500,200,20);
  World.add(world, polygon);

  slingShot = new Slingshot(polygon, {x:100, y:200});

  imageMode(CENTER)
  image(polygon.img, polygon.position.x, polygon.position.y, 40, 40);
}

function draw() {
  text("Score: " + score, 750, 40);
  background(255,255,255);  
 
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block5.display();
  block5.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();

}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(polygon.body);
  }
}