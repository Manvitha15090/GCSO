var car, wall, speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255); 
  
  if(wall.x - car.x < wall.width/2 + car.width/2){
    car.velocityX = 0;
    deformation = 0.5*weight*speed*speed/22500
    if(deformation<100){
      car.shapecolor = "green";

    }
    if(deformation>100&&deformaiton<180){
      car.shapecolor = "yellow";
      
    }
    if(deformation<180){
      car.shapecolor = "red";
      
    }
  }


  drawSprites();
}