let mic;


function setup() {
  createCanvas(710, 510);
  // New Audio In
  mic = new p5.AudioIn();
 // start the Audio Input.
  mic.start();
}

function draw() {
  background(0);
  fill('yellow');
  ellipse(325, 350, 200);
  strokeWeight(10);

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  fill('red');
  // Face with moving elements
  let h = map(vol*5, 0, 1, height, 0);
  stroke('red');
  point(width / 2, h - 175);
  point(width / 2.5, h - 175);
  ellipse(width / 2.25, h - 110, 75, 10);
  ellipse(width / 2.25, 405, 75, 10);
  //Funky Face Hat
  fill('blue');
  quad(200, 250, 310, 250, 400, 120, 407, 285);
  
}
