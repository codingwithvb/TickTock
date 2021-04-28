var hr, sc, mn; 

function setup() {
  createCanvas(450,400);
  angleMode(DEGREES); 
}

function draw() {
  background(0); 
  
  hr = hour();
  sc = second();
  mn = minute();

  translate(200,200);
  rotate(-90); 

  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);
 
  push(); 
  rotate(scAngle); 
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop(); 

  stroke(255,0,0);
  strokeWeight(7);
  noFill();
  arc(0,0,280,280,0,scAngle);
  
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,80,0);
  pop(); 

  stroke(0,255,0);
  strokeWeight(7);
  noFill();
  arc(0,0,260,260,0,mnAngle);

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,60,0);
  pop(); 

  stroke(0,0,255);
  strokeWeight(7);
  noFill();
  arc(0,0,240,240,0,hrAngle);

  drawSprites();
}