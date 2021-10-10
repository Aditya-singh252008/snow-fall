const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var ice=[]
function preload(){
bg=loadImage("snow3.jpg");

}


function setup() {
  createCanvas(1390,600);
  engine=Engine.create()
  world=engine.world
  createSprite(400, 200, 50, 50);
  if(frameCount % 100 === 0){
    for(var i=0; i<100; i++){
    ice.push(new Snow(random(0,1350), random(0,50)));
    }
    }
}

function draw() {
  background(bg);  
  Engine.update(engine)
  drawSprites();

  for(var i = 0;i < 100; i++){
    ice[i].display();
  //  ice[i].changePosition();
    }    
}

