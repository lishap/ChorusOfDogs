var pey, maya, jes, bark;

function preload(){
    maya = loadAnimation("dog_spr/maya1.png","dog_spr/maya2.png","dog_spr/maya3.png","dog_spr/maya4.png","dog_spr/maya5.png");  
    jes = loadAnimation("dog_spr/jes1.png", "dog_spr/jes2.png", "dog_spr/jes3.png", "dog_spr/jes4.png", "dog_spr/jes5.png");
    pey = loadAnimation("dog_spr/pey1.png","dog_spr/pey2.png","dog_spr/pey3.png","dog_spr/pey4.png","dog_spr/pey5.png");
    soundFormats('mp3');
    bark = loadSound('bark.mp3');
    }

function setup(){
    createCanvas(windowWidth, windowHeight);
    maya = createSprite (width/2 - width/4, height/2, 100, 100);
    pey = createSprite(width/2, height/2.2, 100, 100);
    
    var myAnimation = pey.addAnimation("forward","dog_spr/pey3.png");
    pey.addAnimation("left","dog_spr/pey1.png");
    pey.addAnimation("mleft","dog_spr/pey2.png");
    pey.addAnimation("mright","dog_spr/pey4.png");
    pey.addAnimation("right","dog_spr/pey5.png"); 
    
    var myAnimation2 = maya.addAnimation("forward","dog_spr/maya3.png");
    maya.addAnimation("left","dog_spr/maya1.png");
    maya.addAnimation("mleft","dog_spr/maya2.png");
    maya.addAnimation("mright","dog_spr/maya4.png");
    maya.addAnimation("right","dog_spr/maya5.png");
}
 
function draw (){
  background(255,255,255);
    
if(mouseX < pey.position.x - 480) {
    bark.setVolume(0.1);
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
            pey.changeAnimation("forward");}
    
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
    
if(mouseIsPressed) {
    jes.play();
    bark.play();
}else{
    jes.stop();
    bark.stop();
}
    animation(jes, width/2 + width/4, height/2, 100, 100);
    drawSprites();
}