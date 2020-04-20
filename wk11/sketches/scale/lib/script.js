  
function setup() {
  createCanvas(800, 500);
  background('yellow');
}

function draw() {
  background('yellow');
  fill('red');
  stroke('red');
  scale(0.5 + sin(frameCount * 0.1) * 0.25);
  ellipse(400, 400, 400, 400);
}