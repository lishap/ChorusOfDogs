var cam;
var img;
var target;
var thresh = 20;

var tr,tg,tb,ta;

function setup(){
    createCanvas (640, 480);
    cam = createCapture(VIDEO);
    img = createImage (640, 480);
    img.loadPixels();
		target = color (255, 255, 255);
}

function draw() {
    background (255);
    cam.loadPixels();
		var totalFoundPixels = 0;
		var sumX=0
		var sumY=0
    
    for(var y =0; y<cam.height; y++){
        for (x =0; x<cam.width; x++){
            
            var offset = (y * cam.width + x) + 4;
            
            var r = cam.pixels[offset];
            var g = cam.pixels[offset + 1];
            var b = cam.pixels[offset + 2];
            var a = cam.pixels[offset + 3];
					
						var diff = dist(r,g,b,tr,tg,tb);
						if (diff<thresh){
							sumX = sumX + x;
							sumY = sumY + y;
							totalFoundPixels++;
						
						}
			 
            img.pixels[offset] = r;
            img.pixels[offset+1] = g;
            img.pixels[offset+2] = b;
            img.pixels[offset+3] = a;
               
        }
    }  
	
	img.updatePixels();
	image(img, 0,0);
	
	if(totalFoundPixels >0){
		aveX = sumX/ totalFoundPixels;
		aveY = sumY/ totalFoundPixels;
		ellipse(aveX, aveY, 30,30);
	}
}

function mousePressed(){
   target = cam.get(mouseX, mouseY);
		tr = target[0];
		tb = target[1];
		tg = target[2];
		ta = target[3];
}






