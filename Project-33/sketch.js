const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var divisions = [];
var particles = [];
var plinkos = [];

var score = 0;


var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  
}

function draw() {
  background(255,255,255); 
  text("Score: " + 0, 10, 50);
  createDivisions(); 
  divisions.display();
}

function createDivisions(){
  for(var k = 0; k <=width; k+=80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
}