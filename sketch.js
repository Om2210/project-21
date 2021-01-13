var bullet,wall,speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 15);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  speed=random(30,52);
  weight=random(223,321);
  thickness=random(22,83);
  bullet.velocityX=speed;
  bullet.shapeColor="white"
}

function draw() {
  background(0,0,0);  
  if (bullet.isTouching(wall)) {
    bullet.velocityX=0
    deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  if(deformation<10.01) {
    bullet.shapeColor="green";
    textSize(30);
    fill("white");
    text("The wall is safe", 50,200)
  }

  
  else {
    bullet.shapeColor="red";
    textSize(30);
    fill("white");
    text("The wall is very unsafe", 50,200);
  }
}
  drawSprites();
}