
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObject=new Paper(300,100, 10);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paperObject.scale =1;

 
  groundObject.display();
  dustbinObj.display();
  paperObject.display();


}


function keyPressed(){
		if(keyCode ===32) {
		  Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x: 20,y: -20})
		}
	}	
