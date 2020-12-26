const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var score = 0;
var bg, back1, back2, backgroundImg2;
var block1;
var block2, block3, block4;
var block5, block6, block7, block8, block9;
var block10, block11, block12, block13, block14, block15, block16;
var ground, ball, slingshot, stand;

function preload() 
{
  backgroundImg2 = loadImage("Untitled.png");
  back1 = loadImage("Untitled.png");
  back2 = loadImage("Untitled2.png");
}

function setup() {
  createCanvas(1300,650);
  engine = Engine.create();
  world = engine.world;

  ball = new Thrower(130,335,20);

  ground = new Ground(width/2, 600, width*3, 50);
  stand = new Ground(720, 480, 300, 20);

  block1 = new Box(720,190, 60, 80);

  block2 = new Box(690,270, 60, 80);
  block3 = new Box(720,270, 60, 80);
  block4 = new Box(750, 270, 60, 80);

  block5 = new Box(660, 350, 60, 80);
  block6 = new Box(690, 350, 60, 80);
  block7 = new Box(720, 350, 60, 80);
  block8 = new Box(750, 350, 60, 80);
  block9 = new Box(780, 350, 60, 80);

  block10 = new Box(630, 430, 60, 80);
  block11 = new Box(660, 430, 60, 80);
  block12 = new Box(690, 430, 60, 80);
  block13 = new Box(720, 430, 60, 80);
  block14 = new Box(750, 430, 60, 80);
  block15 = new Box(780, 430, 60, 80);
  block16 = new Box(810, 430, 60, 80);

  slingshot = new SlingShot(ball.body,{x:140, y:335});

//  createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg2);  

  textSize(20);
  fill("white");
  text("Score : " + score, width-120, 20);
//  text(mouseX + "," + mouseY, 10, 10);
//  Engine.update(engine);

//  ground.display();

  Engine.update(engine);
  drawSprites();

  ground.display();
  slingshot.display();

  ball.display();

  //fill("red");
  block1.display();
  block1.score();

  //fill("blue");
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();

 // fill("yellow");
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();

  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();

  stand.display();

  fill("white");
  textSize(20);
  text("Use you mouse to throw the bottles!", 10,20);
  text("Use Space to pickup the ball to get another chance", 10, 50);
  text("Show you friends that you are also good in aiming!", 10, 80);


//  ball.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}
function mouseReleased() 
{
  slingshot.fly();
}

function keyPressed() 
{
  if (keyCode === 32) 
  {
    Matter.Body.setPosition(ball.body, {x:130, y:335});
    slingshot.attach(ball.body);
  }
}
async function getBackgroundImage() 
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON = await response.json();
//    console.log(responseJSON);
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);

    if (hour>=6 && hour<=18)
    {
      bg = back1;
//        bg = "sprites/bg.png";
    }
    else 
    {
      bg = back2;
//        bg = "sprites/bg2.jpg";
    }
    backgroundImg2 = loadImage(bg);
}