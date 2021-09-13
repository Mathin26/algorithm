var fixedrect,movingrect



function setup() {
  createCanvas(1200,800);
 
 fixedrect= createSprite(400, 200, 50, 100);
 movingrect= createSprite(400, 200, 100, 50);
 fixedrect.shapeColor="green"
 movingrect.shapeColor="green"
 fixedrect.debug=true
 movingrect.debug=true
}

function draw() {
  background(0);  
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY

  if(movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<=movingrect.width/2+fixedrect.width/2
    &&movingrect.y-fixedrect.y<=movingrect.height/2+fixedrect.height/2
    &&fixedrect.y-movingrect.y<=movingrect.height/2+fixedrect.height/2){
    fixedrect.shapeColor="orange"
 movingrect.shapeColor="orange"
  }
else{
  fixedrect.shapeColor="green"
 movingrect.shapeColor="green"
}
  drawSprites();
}