
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var chain1, chain2, chain3, chain4, chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(400,50,600,50);
bob1 = new Bob(400,350,70);
bob2 = new Bob(500,350,70);
bob3 = new Bob(600,350,70);
bob4 = new Bob(700,350,70);
bob5 = new Bob(800,350,70);


chain1 = new Chain(bob1.body, roof.body)
chain2 = new Chain(bob2.body, roof.body)
chain3 = new Chain(bob3.body, roof.body)
chain4 = new Chain(bob4.body, roof.body)
chain5 = new Chain(bob5.body, roof.body)

	Engine.run(engine);
  


}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 

  chain1.display
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}



