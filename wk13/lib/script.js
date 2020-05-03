let txt="DECAY";

function setup(){
  createCanvas(500, 500);
  
  background('white');  
  fill('green');
  noStroke();
  
  textFont('dokdo');
  textSize(150);

  textAlign(CENTER, CENTER);
  text(txt, width / 2 - 13, height / 2 - 56);
}

function draw(){
  fill(255);
  let s = random(10);
  ellipse(random(width), random(height), s, s);
}


