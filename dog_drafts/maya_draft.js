var pey, maya, jes;

function preload(){
    pey = loadAnimation("dog_spr/pey1.png","dog_spr/pey2.png","dog_spr/pey3.png","dog_spr/pey4.png","dog_spr/pey5.png");
    maya = loadAnimation("dog_spr/maya1.png","dog_spr/maya2.png","dog_spr/maya3.png","dog_spr/maya4.png","dog_spr/maya5.png");  
    jes = loadAnimation("dog_spr/jes1.png", "dog_spr/jes2.png", "dog_spr/jes3.png", "dog_spr/jes4.png", "dog_spr/jes5.png");
    }

function setup(){
    createCanvas(windowWidth, windowHeight);
    maya = createSprite(width/2,height/2,100,100);
    
    var myAnimation = maya.addAnimation("forward","dog_spr/maya3.png");
    maya.addAnimation("left","dog_spr/maya1.png");
    maya.addAnimation("mleft","dog_spr/maya2.png");
    maya.addAnimation("mright","dog_spr/maya4.png");
    maya.addAnimation("right","dog_spr/maya5.png");
}

function draw (){
  background(255,255,255);  
  text(mouseX - maya.position.x,  mouseX,mouseY);
    
  if(mouseX < maya.position.x - 480 ) {
    maya.changeAnimation("left");
  }
  else if(mouseX < maya.position.x - 160 && mouseX > maya.position.x - 480) {
  maya.changeAnimation("mleft");
  }
  else if(mouseX > maya.position.x + 160 && mouseX < maya.position.x + 480) {
    maya.changeAnimation("mright");
  }
  else if(mouseX > maya.position.x + 480) {
    maya.changeAnimation("right");
  }
   else {
    maya.changeAnimation("forward");
  }
  
  drawSprites();
}
