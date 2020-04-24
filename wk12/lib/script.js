
let monoSynth;

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.mousePressed(playSynth);
  background('red');


  monoSynth = new p5.MonoSynth();
}

function playSynth() {
  userStartAudio();

  let note = random(['Fb4', 'G4']);
  // note velocity (volume, from 0 to 1)
  let velocity = 5;
  // time from now (in seconds)
  let time = 0;
  // note duration (in seconds)
  let dur = 1;

  monoSynth.play(note, velocity, time, dur);
}


