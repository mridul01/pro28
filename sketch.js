
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;
var tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var ground;
var stone;
var sling;

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
boy = new Boy(150,350);
tree = new Tree(600,50);
mango1 = new Mango(800,100);
mango2 = new Mango(1000,100);
mango3 = new Mango(900,150);
mango4 = new Mango(700,200);
mango5 = new Mango(800,250);
mango6 = new Mango(1100,200);
mango7 = new Mango(920,250);
mango8 = new Mango(1200,250);
mango9 = new Mango(1000,220);

ground = new Ground(650,660);

stone = new Stone(170,500);

sling = new Sling(stone.Body,{x:190,y:460});


	Engine.run(engine);
  
}

function mouseDragged(){
	Matter.Body.setPosition(stone.Body,{x:mouseX,y:mouseY});
}

function draw() {
  rectMode(CENTER);

  background("skyblue");
  
boy.display(); 
tree.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();

ground.display();

stone.display();

sling.display();
}



