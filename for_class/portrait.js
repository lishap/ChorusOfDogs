function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //shirt
	noStroke();
	fill(70,70,70,50);
	ellipse(200,470,300,370);
	//Face
	noStroke();
	fill(235,180,120);
	ellipse(200,180,255,300);
  //ShirtGraphic
  fill(10,200,100);
  textSize(30);
	textAlign(CENTER);
	text("I <3 p5*js",200, 370);
  //Eyebrows
  fill(1);
 	arc(175, 150, 100, 20, 40, PI + QUARTER_PI, TWO_PI);
  arc(280, 150, 100, 20, 40, PI + QUARTER_PI, TWO_PI);
  //Hair
	fill(0);
	stroke(0);
	curve(600, 600, 190, 20, 20, 300, 100, 300);
  curve(100, 600, 210, 20, 380, 300, 100, 300);
  ellipse(195, 30, 70, 40);
  triangle(20, 300, 100, 120, 106, 300);
  triangle(300, 300, 300, 120, 380, 300);
  //Glasses
	noStroke();
	fill(10,200,100);
	quad(120, 150, 175, 150, 175, 200, 120, 200);
  quad(280, 150, 225, 150, 225, 200, 280, 200);
  quad(100,172,300,172,300,180,100,180)
	fill(235,180,120);
  quad(125,155,170,155,170,195,125,195);
  quad(275,155,230,155,230,195,275,195);
  fill(255,255,255,80);
	quad(125,155,170,155,170,195,125,195);
  quad(275,155,230,155,230,195,275,195);
  //Eyes
	fill(255);
  ellipse(145,175,25,30);
  ellipse(255,175,25,30);
  fill(0);
  ellipse(145,178,15);
  ellipse(255,178,15);
  //Mouth
  fill(240,40,10);
  arc(200, 260, 60, 60, 0, PI, CHORD);
  fill(255);
  arc(200, 262, 50, 50, 0, PI, CHORD);
  //Nose
  fill(215,160,100);
  arc(200, 230, 40, 30, 0, PI, CHORD);
  triangle(180, 180, 200, 240,220,180);
}