const p5Sound = require("./p5.sound");

var canvas;
var music;
var gameObject1,gameObject2,gameObject3,gameObject4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

  music.play();  

  box = createSprite(random(20, 350));
  box.height = 20;
  box.width = 20;
  box.shapeColor = "white";
  box.velocityY = 2;

  gameObject1 = createSprite( 50, 385, 80, 20);
  gameObject1.shapeColor = "red";

  gameObject2 = createSprite(150, 385, 80, 20);
  gameObject2.shapeColor = "blue";
  
  gameObject3 = createSprite(250, 385, 80, 20);
  gameObject3.shapeColor = "yellow";
  
  gameObject4 = createSprite(350, 385, 80, 20);
  gameObject4.shapeColor = "green";


}

function draw() {

    background(rgb(169,169,169));
    createEdgeSprites ();

   if(gameObject1.isTouching(box))
   {
      box.shapeColor = "red";
      box.bounceOff(gameObject1);
      music.stop();
      box.velocityY = 0 ;
   }
   else if(gameObject2.isTouching(box))
   {
      box.shapeColor = "blue";
      box.bounceOff(gameObject2);
      music.stop();
      box.velocityY = 0 ;
   }
   else if(gameObject3.isTouching(box))
   {
      box.shapeColor = "yellow";
      box.bounceOff(gameObject3);
      music.stop();
      box.velocityY = 0 ;
   }
   else if(gameObject4.isTouching(box))
   {
      box.shapeColor = "green";
      box.bounceOff(gameObject4);
      music.stop();
      box.velocityY = 0 ;
   }
    drawSprites();
}

function isTouching(object1, object2)
{

  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.y - object1.y < object1.height/2 + object2.height/2
    && object1.y - object2.y < object1.height/2 + object2.height/2) 
  {
    return true;
  }
  else 
  {
    return false;
  }

}

