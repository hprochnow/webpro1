function setup() {
  createCanvas(800, 500);
  textSize(72);
}

function draw() {
  background("yellow");
  
  rect(100,110,100,100);
  noStroke()
  fill('red')
  rotate(PI/10);
  
	push();
  translate(200,110);
  rotate( radians(frameCount) );
  fill('blue')
  text("Hello, World!", 0,0);
    
    
	pop();
  
  
}
