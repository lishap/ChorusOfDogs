var pey, maya;

function preload(){
    pey = loadAnimation("dog_spr/pey1.png","dog_spr/pey2.png","dog_spr/pey3.png","dog_spr/pey4.png","dog_spr/pey5.png");
    maya = loadAnimation("dog_spr/maya1.png","dog_spr/maya2.png","dog_spr/maya3.png","dog_spr/maya4.png","dog_spr/maya5.png");  
    jes = loadAnimation("dog_spr/jes1.png", "dog_spr/jes2.png", "dog_spr/jes3.png", "dog_spr/jes4.png", "dog_spr/jes5.png");
    }

function setup(){
    createCanvas(windowWidth, windowHeight);
    pey = createSprite(width/2,height/2,100,100);
    
    var myAnimation = pey.addAnimation("forward","dog_spr/pey3.png");
    pey.addAnimation("left","dog_spr/pey1.png");
    pey.addAnimation("mleft","dog_spr/pey2.png");
    pey.addAnimation("mright","dog_spr/pey4.png");
    pey.addAnimation("right","dog_spr/pey5.png");
}

function draw (){
  background(255,255,255);  
  text(mouseX - pey.position.x,  mouseX,mouseY);
    
  if(mouseX < pey.position.x - 480 ) {
    pey.changeAnimation("left");
  }
  else if(mouseX < pey.position.x - 160 && mouseX > pey.position.x - 480) {
  pey.changeAnimation("mleft");
  }
  else if(mouseX > pey.position.x + 160 && mouseX < pey.position.x + 480) {
    pey.changeAnimation("mright");
  }
  else if(mouseX > pey.position.x + 480) {
    pey.changeAnimation("right");
  }
   else {
    pey.changeAnimation("forward");
  }
  
  drawSprites();
}
