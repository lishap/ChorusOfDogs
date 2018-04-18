let angle = 0;
let w = 24;

function setup () {
    createCanvas (400,600);
}

function draw () {
    background (0);
    translate(width/2, height / 2);
    rectMode(CENTER);
    
    let offset = 0;
    for (let x = 0; x < width; x+= 50){
        let a = angle + offset;
        let h = map(sin(a),-1,1,0,100);
    fill(100,130,140);
    rect(x - width / 2 + w / 2,0,w - 2,h)
        offset += 0.1
    }
    

angle += 0.1;
}