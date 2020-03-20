var mercury,venus,earth,mars;
var jupiter,saturn,uranus,neptune,sun;
var mercuryI,venusI,earthI,marsI;
var jupiterI,saturnI,uranusI,neptuneI,sunI;


function preload(){
  mercuryI=loadImage("mercury.png");
  venusI=loadImage("venus.png");
  earthI=loadImage("earth.png");
  marsI=loadImage("mars.png");
  jupiterI=loadImage("jupiter.png");
  saturnI=loadImage("saturn.png");
  uranusI=loadImage("uranus.png");
  neptuneI=loadImage("neptune.png");
  sunI=loadImage("sun.png");
}
function setup() {
  createCanvas(800,400);
  mercury=createSprite(450, 250, 15, 15);
  mercury.addAnimation("mercury.png");
  venus=createSprite(315, 210, 20, 20);
  earth=createSprite(375, 100, 25, 25);
  mars=createSprite(425, 325, 20, 20);
  jupiter=createSprite(300, 50, 40, 40);
  saturn=createSprite(650, 150, 30, 30);
  uranus=createSprite(100, 350, 25, 25);
  neptune=createSprite(780, 380, 30, 30);
  sun=createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(0);  
  mercury.display();
  if(World.frameCount%10===0){
    sun.scale=sun.scale+0.1;
  }
  drawSprites();
}