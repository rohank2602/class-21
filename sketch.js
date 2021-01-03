var movinRect, fixedRect;
var gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {

  createCanvas(1200,800);
  movinRect = createSprite(600, 400, 50, 80);
  movinRect.shapeColor = "green";
  movinRect.debug = true;
  fixedRect = createSprite(400,200,80,30);
 fixedRect.shapeColor = "green";
 fixedRect.debug = true;
  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor="green";
  gameobject2 = createSprite(200,100,50,50);
  gameobject2.shapeColor="green";
  gameobject3 = createSprite(300,100,50,50);
  gameobject3.shapeColor="green";
  gameobject4 = createSprite(400,100,50,50);
  gameobject4.shapeColor="green";
  
  
  
}

function draw() {
  background(0,0,0);  
  movinRect.x = World.mouseX;
  movinRect.y = World.mouseY;

  bounceOff(movinRect,gameobject1);

  if(isTouching(movinRect,gameobject1)){
    movinRect.shapeColor = "red";
 gameobject1.shapeColor = "red";
  }
 else
 {
 movinRect.shapeColor = "green";
gameobject1.shapeColor = "green";
 }
  
  drawSprites();
}
