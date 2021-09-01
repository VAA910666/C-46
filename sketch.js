var bg1, bg2, bg3;
function preload(){
  bg1 = loadImage("images & sound/Beginer bg.jpg");
  bg2 = loadImage("images & sound/bg2.jpg");
  bg3 = loadImage("images & sound/bg3.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

 var StartButton = createButton("Let's go");
 StartButton.position(displayWidth/2+150, displayHeight/2+40);
 StartButton.mousePressed(clickB);
}

function draw() {
  background(bg2);  

  textSize(60)
  fill("orange");
  text("The Quizner", displayWidth/3+40, displayHeight/8);
  
  textSize(40)
  fill("pink");
  text("We Welcome You with all our Heart", displayWidth/4+40, displayHeight/2-20);


  drawSprites();
}

function clickB(){
  clear();
  background(bg1);
  
}

