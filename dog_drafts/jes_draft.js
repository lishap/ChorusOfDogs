var jes

function preload(){
    jes = loadAnimation("dog_spr/jes1.png", "dog_spr/jes2.png", "dog_spr/jes3.png", "dog_spr/jes4.png", "dog_spr/jes5.png");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(255,255,255);
        
if(mouseIsPressed)
    jes.play();
  else
    jes.stop();
    
animation(jes, width/2, height/2);

}
