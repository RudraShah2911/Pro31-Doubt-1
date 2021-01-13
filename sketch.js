const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground

function preload() {
  
}

function setup() {
  createCanvas(500,700);

  ground = new Ground (250,470,500,20)
  
}

function draw() {
  background("black");  
  drawSprites();
}