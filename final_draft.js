var pey, maya, jes, bark;

var threshold = 20; //255 is white, 0 is black
var aveX, aveY; //this is what we are trying to find

var objectR = 255;
var objectG = 0;
var objectB = 0;
var debug = true;

function preload(){
    maya = loadAnimation("dog_spr/maya1.png","dog_spr/maya2.png","dog_spr/maya3.png","dog_spr/maya4.png","dog_spr/maya5.png");  
    jes = loadAnimation("dog_spr/jes1.png", "dog_spr/jes2.png", "dog_spr/jes3.png", "dog_spr/jes4.png", "dog_spr/jes5.png");
    pey = loadAnimation("dog_spr/pey1.png","dog_spr/pey2.png","dog_spr/pey3.png","dog_spr/pey4.png","dog_spr/pey5.png");
    soundFormats('m4a');
    bark = loadSound('dog_spr/bark.m4a');
    }

function setup(){
    createCanvas(windowWidth, windowHeight);
    video = createCapture(VIDEO);
    maya = createSprite (width/2 - width/4, height/2, 100, 100);
    pey = createSprite(width/2, height/2.2, 100, 100);
    bark.loop();
    
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
    
    video.loadPixels();
    var totalFoundPixels = 0; //we are going to find the average location of change pixels so
    var sumX = 0; //we will need the sum of all the x find, the sum of all the y find and the total finds
    var sumY = 0;

    //enter into the classic nested for statements of computer vision
    for (var row = 0; row < video.height; row++) {
        for (var col = 0; col < video.width; col++) {
            //the pixels file into the room long line you use this simple formula to find what row and column the sit in 
            
            var offset = (row * video.width + col) * 4;
            //pull out the same pixel from the current frame 
            var thisColor = video.pixels[offset];

            //pull out the individual colors for both pixels
            var r = video.pixels[offset];
            var g = video.pixels[offset + 1];
            var b = video.pixels[offset + 2];

            //in a color "space" you find the distance between color the same whay you would in a cartesian space, phythag or dist in processing
            var diff = dist(r, g, b, objectR, objectG, objectB);

            if (diff < threshold) { //if it is close enough in size, add it to the average
                sumX = sumX + col;
                sumY = sumY + row;
                totalFoundPixels++;
                // if (debug) video.pixels[offset] = 0xff000000;//debugging
            }   
        }
    }
    video.updatePixels();
    
    push();
    translate(video.width,0);
    scale(-1.0,1.0);
    image(video, 0, 0);
    pop();


    if (totalFoundPixels > 0) {
        aveX = sumX / totalFoundPixels;
        
        aveX = map(aveX,0,width,width,0);
        aveY = sumY / totalFoundPixels;
        
        
        ellipse(aveX - 10, (aveY - 10), 20, 20);
    }

    
if(sumX < pey.position.x - 480) {
    pey.changeAnimation("left");
        }
        else if(sumX < pey.position.x - 160 && sumX > pey.position.x - 480) {
            pey.changeAnimation("mleft");
        }
        else if(sumX > pey.position.x + 160 && sumX < pey.position.x + 480) {
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
    animation(jes, width/2 + width/4, height/2, 100,100);
    drawSprites();

}

function mousePressed(){
     var offset = map(mouseX, 0,width,width,0);
    //pull out the same pixel from the current frame 
    var thisColor = video.get(offset, mouseY);

    //pull out the individual colors for both pixels
    objectR = thisColor[0];
    objectG = thisColor[1];
    objectB = thisColor[2];
    println("Chasing new color  " + objectR + " " + objectG + " " + objectB);
    
    if (bark.isPlaying()){
        bark.stop();  
        jes.stop();
    } else {
        bark.play();
        jes.play();
    }
}