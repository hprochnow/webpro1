let startAngle = 0;
const angleVel = 0.1;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background("yellow");

  let angle = startAngle;
  startAngle += 0.01;

  for (let x = 0; x <= width; x += 24) {
    const y = map(sin(angle),-1,1,0,height);
    stroke(0);
    fill('black');
    ellipse(x,y,20,30);
    angle += angleVel;
  }
}