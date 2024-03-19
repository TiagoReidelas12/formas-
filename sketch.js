
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var plane_options={
isStatic:true
}
var blockl_options={
	restitution:0.5,
	friction:0.02,
	frictionAir:0.1
	
}
var block2_options={
	restitution:0.7,
	friction:0.01,
	frictionAir:0.1
	
}
var block3_options={
	restitution:0.01,
	friction:1,
	frictionAir:0.3
	
}
plane = Bodies.rectangle(600,600,1000,2,plane_options)
World.add(world,plane)
	Engine.run(engine);
	block1=Bodies.circle(220,10,10,blockl_options)
	World.add(world,block1)

	block2=Bodies.rectangle(600,600,1000,2,block2_options)
		World.add(world,block2)

		block3=Bodies.rectangle(350,50,10,10,block3_options)
		World.add(world,block3)
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine)
  drawSprites();
 rect(plane.position.x,plane.position.y,1000)
ellipse(block1.position.x,block1.position.y,50)
rect(block2.position.x,block2.position.y,50,50)
rect(block3.position.x,block3.position.y,100,50)
}




