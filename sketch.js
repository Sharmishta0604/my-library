var fixedrect;
var moverect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 80);
  moverect=createSprite(200,200,80,30);
  moverect1=createSprite(400,300,40,80);
moverect1.velocityY=-3;
  fixedrect.shapeColor="green";
  moverect.shapeColor="green";
  moverect.debug=true;
  fixedrect.debug=true;
}

function draw() {
  background("black");  
  moverect.x=World.mouseX;
  moverect.y=World.mouseY;
  console.log(moverect1.velocityY);
  if(isTouching(moverect,fixedrect) ) {
    moverect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  else{
    moverect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  bounceOff(moverect1,fixedrect);
  drawSprites();
}

