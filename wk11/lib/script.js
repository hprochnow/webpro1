var cwidth = 720
var cheight = 720
var row = 10

function setup() {
  createCanvas(cwidth, cheight);
  background('black');
  for (x = 0; x <= width; x += row) {
    for (y = 0; y <= height; y += row) {
       stroke(x - 100);
      if ( y % 3 === 0) {
        noStroke();
        fill(46, 46, 234);
        rect(100, 100, 400, 400);
        
      }
      else {
        noStroke();
        fill((random(300, 63)),(random(300,3)),(random(0, 24)));
        triangle(200, 250,500, 420, 500, 100);
        rotate(PI/10);
      }
    }
  }
}