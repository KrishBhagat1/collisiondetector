var object1,object2


function setup() {
  createCanvas(800,400);
  object1=createSprite(400, 200, 50, 50);
  object1.shapeColor="green";
  
  object2=createSprite(400,300,40,60)
  object2.shapeColor="blue";
}

function draw() {
  background(255,255,255); 
  object1.x=World.mouseX
  object1.y=World.mouseY
  if(colldetect(object1,object2)){
    object1.shapeColor="red"
    object2.shapeColor="orange"
  }
  else{
    object1.shapeColor="green"
    object2.shapeColor="blue"
  }
  drawSprites();
  }
  