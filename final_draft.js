var pey, maya, jes, bark;
var aveX = 0;
var aveY = 0; 
var video;
var constraints;
var threshold = 50;
var closeThreshold = 40000;
var objectR = 255;
var objectG = 0;
var objectB = 0;
var debug = true;
var calibration = true;
    

function preload(){
    maya = loadAnimation("dog_spr/maya1.png","dog_spr/maya2.png","dog_spr/maya3.png","dog_spr/maya4.png","dog_spr/maya5.png");  
    jes = loadAnimation("dog_spr/jes1.png", "dog_spr/jes2.png", "dog_spr/jes3.png", "dog_spr/jes4.png", "dog_spr/jes5.png");
    pey = loadAnimation("dog_spr/pey1.png","dog_spr/pey2.png","dog_spr/pey3.png","dog_spr/pey4.png","dog_spr/pey5.png");
    soundFormats('m4a');
    bark = loadSound('dog_spr/bark.m4a');
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    
     constraints = {
        video: {
            mandatory: {
                minWidth: width,
                minHeight: height
            },
            optional: [{
                maxFrameRate: 10
            }]
        },
        audio: false
    };
    
   video = createCapture(constraints, function(stream){
       console.log("hello " + stream);
});
    
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

    console.log("setup works ");
}
 
function draw (){
    background(255);
    video.loadPixels();
    var totalFoundPixels = 0; //we are going to find the average location of change pixels so
    var sumX = 0; //we will need the sum of all the x find, the sum of all the y find and the total finds
    var sumY = 0;

    for (var row = 0; row < video.height; row++) {
        for (var col = 0; col < video.width; col++) {
            
            var offset = (row * video.width + col) * 4;
            var thisColor = video.pixels[offset];

            var r = video.pixels[offset];
            var g = video.pixels[offset + 1];
            var b = video.pixels[offset + 2];
            var redDist = abs(r-objectR);
            var greenDist = abs(g-objectG);
            var blueDist = abs(b-objectB);
            
            var diff = redDist + greenDist + blueDist;

           if (diff < threshold) { //if it is close enough in size, add it to the average
                sumX = sumX + col;
                sumY = sumY + row;
                totalFoundPixels++;
                // if (debug) video.pixels[offset] = 0xff000000;//debugging
            }   
        }
    }
    
if(aveX < pey.position.x - 480) {
    pey.changeAnimation("left");
        }
        else if(aveX < pey.position.x - 160 && aveX > pey.position.x - 480) {
            pey.changeAnimation("mleft");
        }
        else if(aveX > pey.position.x + 160 && aveX < pey.position.x + 480) {
            pey.changeAnimation("mright");
        }
        else if(aveX > pey.position.x + 480) {
            pey.changeAnimation("right");
    }
        else {
            pey.changeAnimation("forward");
        }
    
if(aveX < maya.position.x - 480 ) {
    maya.changeAnimation("left");
  }
  else if(aveX < maya.position.x - 160 && aveX > maya.position.x - 480) {
  maya.changeAnimation("mleft");
  }
  else if(aveX > maya.position.x + 160 && aveX < maya.position.x + 480) {
    maya.changeAnimation("mright");
  }
  else if(aveX > maya.position.x + 480) {
    maya.changeAnimation("right");
  }
   else {
    maya.changeAnimation("forward");
  }
    
    animation(jes, width/2 + width/4, height/2, 100,100);
    drawSprites();
    
    video.updatePixels();
    if (calibration){
    push();
    translate(video.width,0);
    scale(-1.0,1.0);
    image(video, 0, 0);
    pop();
}


    if (totalFoundPixels > 0) {
        aveX = sumX / totalFoundPixels;
        
        aveX = map(aveX,0,width,width,0);
        aveY = sumY / totalFoundPixels;
         
        ellipse(aveX - 10, (aveY - 10), 20, 20);
}
   if(totalFoundPixels > closeThreshold){
      if (bark.isPlaying()){
        bark.stop();  
        jes.stop();
    } else {
        bark.play();
        jes.play();
    }
      } 
    console.log("total found pixels ", totalFoundPixels);
}


function mousePressed(){
    var offset = map(mouseX, 0,width,width,0);
    //pull out the same pixel from the current frame 
    var thisColor = video.get(offset, mouseY);
    calibration = false;

    //pull out the individual colors for both pixels
    objectR = thisColor[0];
    objectG = thisColor[1];
    objectB = thisColor[2]; 
}

function keyTyped() {
    //for adjusting things on the fly
    if (key == '-') {
        closeThreshold-=20000;
        console.log("Threshold " + closeThreshold);
    }
    if (key == '+') {
        closeThreshold+=20000;
        console.log("Threshold " + closeThreshold);
    }
}
