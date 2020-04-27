/*
Based on "Michael John - attempting a sequencer"
Tom Smith
*/

var canvasHeight;
var canvasWidth;

var metronomeSound; // sound object
var metronomeEnv; // envelope object

var bpm;
var beatDivisions; // clicks will be rounded to this number of beat divisions. (probably ~16)
var beatLength; // in milliseconds
var loopLength; // in beats
var nextLoop;  // in millis()
var loopCount;
var nextClick; // time for next metronome click

var instrument = [];
var metronomeOn;

var reverb, delay
var cVerb

function setup() {
  
  canvasHeight = 600;
  canvasWidth = 855;
  createCanvas(canvasWidth, canvasHeight);
  noStroke();
  textSize( 24 );
  textAlign( CENTER );
  
  metronomeOn = true;
  bpm = 10;
  beatDivisions = 16;
  beatLength = 10/bpm * 1000;
  nextClick = 0;
  loopLength = 4 * 10/bpm * 1000; // in milliseconds
  nextLoop = 0;
  loopCount = 0;
  
  // a bunch of stuff to set up the sound fx
  metronomeEnv = new p5.Envelope();
 
  metronomeEnv.setRange(1, 0);
  metronomeSound = new p5.Oscillator("triangle");
   metronomeEnv.scale(0.2) //? Does this make it quieter?
  metronomeSound.phase(0.9) //? What does this do...?
  metronomeSound.amp(metronomeEnv);
  metronomeSound.freq(30);
  
  
  metronomeSound.start();
  
  reverb = new p5.Reverb()
  delay = new p5.Delay();


}

function draw() {
  fill('red')
  rect(0, 0, width, height)
  
   if( millis() > nextClick ) {
      if( metronomeOn) { playClick(); }
      nextClick = nextClick + beatLength;
   }
  
   if( millis() > nextLoop ) {
      nextLoop = nextLoop + loopLength; 
      fill('yellow');
      circle( canvasWidth/2, canvasHeight/2, 90 );
      loopCount++;
   }
  
   var currentLoopTime = nextLoop + millis();
   instrument.forEach( function( arrayItem ) {
       if( millis() > nextLoop - arrayItem.loopOffset && arrayItem.loopIndex < loopCount ) {
       arrayItem.play();
       arrayItem.draw();
     } } );
  

    
    fill('yellow');
    text( "press any key to clear", canvasWidth/2, 20 );
    text( "space: toggle metronome", canvasWidth/2, 50 );
    text( "click anywhere to play a note", canvasWidth/2, canvasHeight - 30 );
  
  text( instrument.length, canvasWidth/2, canvasHeight - 50 );
}

function mouseClicked() {
  instrument.push(new Instrument(mouseX,map(mouseY, canvasHeight,0.0, 0.5, 1.0),nextLoop - millis())); 
  instrument[instrument.length-1].play();
}

function keyPressed() {
  instrument.length = 0;
  if( key === ' ' ) {
    if( metronomeOn === true ) { metronomeOn = false; } else { metronomeOn = true; }
  } 
}


function playClick() {  
  fill('yellow');
  circle( canvasWidth/2, canvasHeight/2, 50 );
  metronomeEnv.setADSR(0.01, 0.05, 0.1, 0.15);
  metronomeEnv.play();  
}



/* classes */
class Instrument {
  
  constructor(pitch, amp, offset){
    this.pitch = pitch;
    this.env = new p5.Envelope();
    this.env.setRange(amp,0);
    this.sound = new p5.Oscillator("sine");
    this.sound.amp(this.env);
    this.sound.freq(this.pitch);
    this.sound.start();
    let beatError = offset % beatLength/beatDivisions; // timing error from "maximum error" allowed
    if( beatError > beatLength/beatDivisions/2 ) { offset += beatLength/beatDivisions - beatError; } else { offset -= beatError; } // round up or down to align note to beat division
    this.loopOffset = offset; // milliseconds *from END of loop*
    this.loopIndex = 0;
    this.x = mouseX;
    this.y = mouseY;
    print(offset);

  }
  
  play() {
    this.env.setADSR(0.01, 0.05, 0.1, 0.15);
    
    //Add effects
    reverb.process(this.sound)
    delay.process(this.sound, 0.5, 0.5, 1000);

    
    this.env.play();
    this.loopIndex = loopCount;
  }
  
  draw() {
      fill('yellow');
      circle( this.x, this.y, 30 );
  }

}

