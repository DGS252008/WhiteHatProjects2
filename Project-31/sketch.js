const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var divisions = [];
var particles = [];
var plinkos = [];

var ground1, ground2, ground3, ground4;
var div1, div2, div3, div4, div5, div6, div7;

var divisionHeight=300;

function setup() {
  createCanvas(550,800);
  
  engine = Engine.create(); 
  world = engine.world;

  Engine.run(engine);

  ground1 = new Ground(0, 0, 1300, 5)
  ground2 = new Ground(550, 0, 5, 2000)
  ground3 = new Ground(0, 800, 1300, 5)
  ground4 = new Ground(0, 0, 3, 2000)

  div1 = new Division(10, 650, 1, 350);
  div2 = new Division(92, 650, 10, 350);
  div3 = new Division(183, 650, 10, 350);
  div4 = new Division(274, 650, 10, 350);
  div5 = new Division(365, 650, 10, 350);
  div6 = new Division(456, 650, 10, 350);
  div7 = new Division(537, 650, 1, 350);
}

function draw() {
  background(0); 
  //createDivisions(); 
  //if(frameCount%60 === 0){
    particle = new Particles(random(0, 800), 0, 20);
  //}

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
}

/*function createDivisions(){
  for(var k = 0; k <=width; k+=80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
}*/
