var video;
var img;
var xres = 500;
var yres = 500;

function setup() {
    createCanvas (500,500);
    video = createVideo('peyton_spr.mp4');
    video.loop();
    video = createVideo('maya_spr.mp4');
    video.hide();
    video.size(500,500);
    video.loop();
    img = createImage(width, height);
}

function draw (){
    background (255);
    video.loadPixels();
    img.loadPixels();
    
    for(var i = 0; i< video.pixels.length; i+=4){
        var r = video.pixels[i];
        var g = video.pixels[i+1];
        var b = video.pixels[i+2];
        var a = video.pixels[i+3];
        
        img.pixels[i] = r;
        img.pixels[i+1] = g;
        img.pixels[i+2] = b;
        img.pixels[i+3] = a;
        
    }
    
    img.updatePixels();
    image(img, 0,0);
}