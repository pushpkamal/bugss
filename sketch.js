var astronaut;
var bath,bathImg;
var brush,brushImg;
var drink,drinkImg;
var eat,eatImg;
var gym,gymImg;
var spacebgImg;
var sleep,sleepImg;
var move,moveImg;
var edges = createEdgeSprites()

function preload(){
spacebgImg = loadImage("images/iss.png");
bathImg = loadAnimation("images/bath1.png","images/bath2.png");
brushImg = loadAnimation("images/brush.png");
drinkImg = loadAnimation("images/drink1.png","images/drink2.png");
eatImg =loadAnimation("images/eat1.png","images/eat2.png");
gymImg = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
sleepImg =loadAnimation("images/sleep.png");
moveImg = loadAnimation("images/move.png","images/move1.png");
}

function setup() {
 createCanvas(600,600);
 
 astronaut = createSprite(300,300);
 astronaut.addAnimation("sleeping",sleepImg)
 astronaut.scale = 0.1;
 astronaut.velocityX = 2;
 astronaut.velocityY = 3;

}

function draw() {
  background(spacebgImg);
  drawSprites();
  text("Instructions: ", 10,20);
  text("Up Arrow =Brushing  ", 10,40);
  text("Left Arrow = Eating ", 10,60);
  text("Right Arrow =Bathing ", 10,80);
  text("Down Arrow = Gymming ", 10,100);
  text("SPACE = Moving ", 10,120);
  
 if (keyDown("UP_ARROW")){
  astronaut.addAnimation( "brushing", brushImg);
  astronaut.changeAnimation( "brushing");
  astronaut.x = 300;
  astronaut.y = 300;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
 }

 if (keyDown("RIGHT_ARROW")){
  astronaut.addAnimation( "bathing", bathImg);
  astronaut.changeAnimation( "bathing");
  astronaut.x = 300;
  astronaut.y = 300;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
 }

 if (keyDown("LEFT_ARROW")){
  astronaut.addAnimation( "eating", eatImg);
  astronaut.changeAnimation( "eating");
  astronaut.x = 300;
  astronaut.y = 300;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
 }

 if (keyDown("DOWN_ARROW")){
  astronaut.addAnimation( "Gymming", gymImg);
  astronaut.changeAnimation( "Gymming");
  astronaut.x = 300;
  astronaut.y = 300;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
 }

 if (keyDown("SPACE")){
  astronaut.addAnimation( "Moveing", moveImg);
  astronaut.changeAnimation( "Moveing");
  astronaut.x = 300;
  astronaut.y = 300;
  astronaut.velocityX = 2;
  astronaut.velocityY = 3;
   
  createEdgeSprites();
  astronaut.bounceOff(edges);
  

 }
 
}