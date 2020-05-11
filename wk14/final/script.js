let song;
var amp;

function preload (){
 song = loadSound('sound/talking.mp3');

}

function setup() {
  background('black');
  createCanvas(710, 510);
  song.play();
  amp = new p5.Amplitude();
}
function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}


function draw() {
  fill('yellow');
  ellipse(325, 350, 200);
  strokeWeight(10);

  // Get the overall volume (between 0 and 1.0)
  let vol = amp.getLevel();
  fill('red');
  // Face with moving elements
  let h = map(vol, 0, 1, height, 1);
  stroke('red');
  point(width / 2, h - 175);
  point(width / 2.5, h - 175);
  ellipse(width / 2.25, h - 110, 75, 10);
  ellipse(width / 2.25, 405, 75, 10);
  //Funky Face Hat
  fill("blue");
  strokeWeight(15);
  line(300, 250, 215, 250);
  // hat body
  rect(300, 200, 65, 50);
  
}
