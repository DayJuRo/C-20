var a, b;

function setup() {
  createCanvas(800,400);
  a=createSprite(200, 200, 30, 30);
  b=createSprite(400, 200, 40, 40);

  a.shapeColor="purple";
    b.shapeColor="purple";
}


function draw() {
  background(255,255,255); 
  
  b.x=World.mouseX;
  b.y=World.mouseY;

  if(b.x-a.x<a.width/2+b.width/2 && a.x-b.x<a.width/2+b.width/2 && b.y-a.y<a.height/2+b.height/2 && a.y-b.y<a.height/2+b.height/2){
    a.shapeColor="pink";
    b.shapeColor="pink";
  }
  else{
    a.shapeColor="purple";
    b.shapeColor="purple";
  }

  drawSprites();

}