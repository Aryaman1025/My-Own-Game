var Player,Mpc,Laptop;
var Wall1,Wall2,Wall3,Wall4,Wall5,Wall6,Wall7,Wall8,Wall9,Wall10;
var Wall11,Wall12,Wall13,Wall14,Wall15,Wall16,Wall17,Wall18,Wall19,Wall20;

function preload(){


}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-200);

  //wall parallel to wall (wall2)
  Wall1 = createSprite(250, 282.5,20,250);
  Wall1.shapeColor="brown";

  //wall adjascent to (wall3)
  Wall2 = createSprite(100, 325,20,150);
  Wall2.shapeColor="brown";

  //wall above spawn (wall5)
  Wall3 = createSprite(10, 400,200,20);
  Wall3.shapeColor="brown";

  // spawn wall top
  Wall4 = createSprite(10, 525,265,20);
  Wall4.shapeColor="brown";

  // spawn wall right
  Wall5 = createSprite(250, 600,20,150);
  Wall5.shapeColor="brown";

  //wall adjascent to wall (wall1)
  Wall6 = createSprite(350, 397.5,200,20);
  Wall6.shapeColor="brown";

  //wall adjascent to (wall5)
  Wall7 = createSprite(350, 525,220,20);
  Wall7.shapeColor="brown";

  Wall8 = createSprite(100, 250,20,50);
  Wall8.shapeColor="brown";

  Wall9 = createSprite(100, 5,20,50);
  Wall9.shapeColor="brown";

  Wall10 = createSprite(100, 25,20,50);
  Wall10.shapeColor="brown";

  Wall11 = createSprite(100, 25,10,50);
  Wall11.shapeColor="brown";

  Wall12 = createSprite(100, 25,10,50);
  Wall12.shapeColor="brown";

  Wall13 = createSprite(100, 25,10,50);
  Wall13.shapeColor="brown";

  Wall14 = createSprite(100, 25,10,50);
  Wall14.shapeColor="brown";

  Wall15 = createSprite(100, 25,10,50);
  Wall15.shapeColor="brown";

  Wall16 = createSprite(100, 25,10,50);
  Wall16.shapeColor="brown";

  Wall17 = createSprite(100, 25,10,50);
  Wall17.shapeColor="brown";

  Wall18 = createSprite(100, 25,10,50);
  Wall18.shapeColor="brown";

  Wall19 = createSprite(100, 25,10,50);
  Wall19.shapeColor="brown";

  Wall20 = createSprite(100, 25,10,50);
  Wall20.shapeColor="brown";

  

  

  

}
 
function draw(){
  
drawSprites();
  }

