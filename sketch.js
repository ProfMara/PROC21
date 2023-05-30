const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var world;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;


    ellipseMode(RADIUS);
    rectMode(CENTER);

}

function draw() {
    background(51);

    Engine.update(engine);
}
