var particles = [];
var plinkos = [];
var divisions = [];

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,480,20);

}


function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();
  drawSprites();
}