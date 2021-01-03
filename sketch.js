var wall,car;
var speed,wight
function setup() {
  createCanvas(800,400);
  speed = random(50,90)
  wight = random(400,1500)
   
  car = createSprite(0,200,50,50);
  wall = createSprite(1500,200,60,height/2)

  car.velocityX = speed;
  
  if(wall.x-car.x(car.width+wall.width)/2){
     car.velocityX = 0;
     var deformation = 0.5 * wight * speed * speed/22509;
     if(deformation>180){
       car.shapeColour = colour(red);
     }

     if(deformation<180 && deformation>100){
       car.shapeColour = colour(orange);
     }

     if(deformation<100){
       car.shapeColour = colour(green);
     }


  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
}